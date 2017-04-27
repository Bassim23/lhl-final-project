# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

puts "Creating users ..."

User.destroy_all

user1 = User.create!({
  first_name: "Kobe",
  last_name: "Bryant",
  age: 34,
  gender: "Male",
  nationality: "American",
  email: "kobe@gmail.com",
  photo: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254",
  upvotes: 15,
  downvotes: 5,
  summary: "I'm Kobe and I like to hike!",
  password_digest: "$2a$10$bReZ2887yez7d5bunZi0XuVDQsSkh6o2340AxbF4rnGlZkPsDfeFa"
})

user2 = User.create!({
  first_name: "Lebron",
  last_name: "James",
  age: 31,
  gender: "Male",
  nationality: "American",
  email: "lebron@gmail.com",
  photo: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
  upvotes: 5,
  downvotes: 15,
  summary: "I'm Lebron and that's all I have to say.",
  password_digest: "$2a$10$8N/CLwE2cLbFESRDbDD32OvRRPhSXs9ho3x0bx.f8by1Aozv3tqwW"
})

user3 = User.create!({
  first_name: "Kevin",
  last_name: "Love",
  age: 28,
  gender: "Male",
  nationality: "American",
  email: "love@gmail.com",
  photo: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3449.png&w=350&h=254",
  upvotes: 25,
  downvotes: 1,
  summary: "I'm Kevin Love and I love to travel",
  password_digest: "$2a$10$YuD5PmZB.w.Pyk444bAeQ.BzQMi9W.zdtui0.4/YM3pSRr9JaBPuG"
})

puts "Creating trips ..."

Trip.destroy_all

trip1 = user1.trips.create!({
  name: "Hike at Whistler!",
  kind: "Public",
  summary: "Kobe's trip to Whistler, Yo!"
})

trip2 = user2.trips.create!({
  name: "Trip to Las Vegas",
  kind: "Public",
  summary: "Lebron's bash at Vegas"
})

trip3 = user3.trips.create!({
  name: "Visit to New York",
  kind: "Public",
  summary: "Kevin plans to visit New York"
})

trip4 = user1.trips.create!({
  name: "Private Hike at Whistler!",
  kind: "Private",
  summary: "Kobe's private trip to Whistler, Yo!"
})

trip5 = user2.trips.create!({
  name: "Private Trip to Las Vegas",
  kind: "Private",
  summary: "Lebron's private ash at Vegas"
})

trip6 = user3.trips.create!({
  name: "Private Visit to New York",
  kind: "Private",
  summary: "Kevin private plans to visit New York"
})

puts "Creating schedules ..."

Schedule.destroy_all

schedule1 = trip1.schedules.create!({
  date: Date.new(2017,10,15),
  destination: "ChIJh3uVA7I8h1QR9s_1dehBt0o"
})

schedule2 = trip2.schedules.create!({
  date: Date.new(2017,8,24),
  destination: "ChIJ0X31pIK3voARo3mz1ebVzDo"
})

schedule3 = trip3.schedules.create!({
  date: Date.new(2017,11,24),
  destination: "ChIJOwg_06VPwokRYv534QaPC8g"
})

schedule4 = trip4.schedules.create!({
  date: Date.new(2017,12,15),
  destination: "ChIJh3uVA7I8h1QR9s_1dehBt0o"
})

schedule5 = trip5.schedules.create!({
  date: Date.new(2017,12,16),
  destination: "ChIJ0X31pIK3voARo3mz1ebVzDo"
})

schedule6 = trip6.schedules.create!({
  date: Date.new(2017,12,17),
  destination: "ChIJOwg_06VPwokRYv534QaPC8g"
})

puts "Creating activities ..."

Activity.destroy_all

activity1 = schedule1.activities.create!({
  start_time: Time.now() - 120000000,
  end_time: Time.now() - 1200000000,
  uuid: 1,
  name:"Hiking",
  description:"Hiking a lot!!",
  place: "ChIJW5JDBk0jh1QRttPEPI0TSm8"
})

activity2 = schedule1.activities.create!({
  start_time: Time.now() - 110000000,
  end_time: Time.now() - 1100000000,
  uuid: 2,
  name:"Lunch",
  description:"Italian for lunch!",
  place: "ChIJ81o8DrM8h1QR9NeJlPZ0ZRA"
})

activity3 = schedule1.activities.create!({
  start_time: Time.now() - 100000000,
  end_time: Time.now() - 1000000000,
  uuid: 3,
  name:"Food",
  description:"Italian for food!",
  place: "ChIJ81o8DrM8h1QR9NeJlPZ0ZRA"
})

activity4 = schedule2.activities.create!({
  start_time: Time.now() - 100000000,
  end_time: Time.now() - 1000000000,
  uuid: 4,
  name:"Bellagio",
  description:"Visit Bellagio for fun!",
  place: "ChIJvUdRyzDEyIARhA3R2cXH8oI"
})

activity5 = schedule2.activities.create!({
  start_time: Time.now() - 90000000,
  end_time: Time.now() - 900000000,
  uuid: 5,
  name:"Strip",
  description:"Time to hit the strip!",
  place: "ChIJ69QoNDjEyIARTIMmDF0Z4kM"
})

activity6 = schedule2.activities.create!({
  start_time: Time.now() - 80000000,
  end_time: Time.now() - 800000000,
  uuid: 6,
  name:"Dinner",
  description:"Dinner time at a fancy place!",
  place: "ChIJvUdRyzDEyIARh86Fi1C2hqI"
})

activity7 = schedule3.activities.create!({
  start_time: Time.now() - 110000000,
  end_time: Time.now() - 1100000000,
  uuid: 7,
  name:"Empire State Building",
  description:"What better than Empire State Building!",
  place: "ChIJtcaxrqlZwokRfwmmibzPsTU"
})

puts "Creating participations ..."

Participation.destroy_all

participation1 = activity1.participations.create!({
  user_id: user2.id,
  status: ''
})

participation2 = activity1.participations.create!({
  user_id: user3.id,
  status: "Accepted"
})

participation3 = activity2.participations.create!({
  user_id: user2.id,
  status: "Declined"
})

participation4 = activity2.participations.create!({
  user_id: user3.id,
  status: "Accepted"
})

participation4 = activity7.participations.create!({
  user_id: user1.id,
  status: "Accepted"
})

participation5 = activity7.participations.create!({
  user_id: user2.id,
  status: "Declined"
})


























