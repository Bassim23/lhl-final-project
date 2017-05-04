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
  first_name: "David",
  last_name: "VanDusen",
  age: 34,
  gender: "Male",
  nationality: "Canadian",
  email: "david@gmail.com",
  photo: "https://lighthouselabs.ca/uploads/team_member/avatar/3/medium_davidvandusen_2x.jpg",
  upvotes: 100,
  downvotes: 95,
  summary: "I'm David and I like to do something!",
  password: "david",
  password_confirmation: "david"
})

user2 = User.create!({
  first_name: "Joel",
  last_name: "Shinness",
  age: 31,
  gender: "Male",
  nationality: "American",
  email: "joel@gmail.com",
  photo: "https://yt3.ggpht.com/-5e9T1JeRJX8/AAAAAAAAAAI/AAAAAAAAAAA/7ZcYeYo4KfI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
  upvotes: 100,
  downvotes: 85,
  summary: "Check out my blog at http://www.joelshinness.com/",
  password: "joel1",
  password_confirmation: "joel1"

})

user3 = User.create!({
  first_name: "Don",
  last_name: "Burks",
  age: 18,
  gender: "Male",
  nationality: "Canadian/American/?",
  email: "don@gmail.com",
  photo: "https://lighthouselabs.ca/uploads/team_member/avatar/2/medium_don.JPG",
  upvotes: 99,
  downvotes: 1,
  summary: "Clap for me.",
  password: "burks",
  password_confirmation: "burks"
})

user4 = User.create!({
  first_name: "Larry",
  last_name: "The Duck",
  age: 18,
  gender: "Rather not say",
  nationality: "?",
  email: "larry@gmail.com",
  photo: "https://lighthouselabs.ca/uploads/team_member/avatar/51/medium_larry_2x.jpg",
  upvotes: 9999,
  downvotes: 0,
  summary: "Quack",
  password: "larry",
  password_confirmation: "larry"
})

user5 = User.create!({
  first_name: "Karl",
  last_name: "Jensen",
  age: 18,
  gender: "Male",
  nationality: "Canadian",
  email: "karl@gmail.com",
  photo: "https://avatars.githubusercontent.com/u/14803?v=3",
  upvotes: 99,
  downvotes: 0,
  summary: "I'm Karl.",
  password: "karl1",
  password_confirmation: "karl1"
})

puts "Creating trips ..."

Trip.destroy_all

trip1 = user2.trips.create!({
  name: "Hike at Whistler!",
  kind: "Public",
  summary: "Joel's trip to Whistler, Yo!"
})

trip2 = user4.trips.create!({
  name: "Trip to Las Vegas",
  kind: "Public",
  summary: "Larry's bash at Vegas"
})

trip3 = user3.trips.create!({
  name: "Visit to New York",
  kind: "Public",
  summary: "Don plans to visit New York"
})

trip4 = user1.trips.create!({
  name: "Hike at Whistler second",
  kind: "Public",
  summary: "David's trip to Whistler, Yo!"
})

trip5 = user5.trips.create!({
  name: "Trip to Las Vegas",
  kind: "Public",
  summary: "Larry's bash at Vegas"
})

trip6 = user5.trips.create!({
  name: "Visit to New York",
  kind: "Public",
  summary: "Karl plans to visit New York"
})

puts "Creating schedules ..."

Schedule.destroy_all

schedule1 = trip1.schedules.create!({
  date: Date.new(2017,10,15),
  destination: "ChIJh3uVA7I8h1QR9s_1dehBt0o",
  destination_name: "Whistler"
})

schedule2 = trip2.schedules.create!({
  date: Date.new(2017,8,24),
  destination: "ChIJ0X31pIK3voARo3mz1ebVzDo",
  destination_name: "Las Vegas"
})

schedule3 = trip3.schedules.create!({
  date: Date.new(2017,11,24),
  destination: "ChIJOwg_06VPwokRYv534QaPC8g",
  destination_name: "New York"
})

schedule4 = trip4.schedules.create!({
  date: Date.new(2017,12,15),
  destination: "ChIJh3uVA7I8h1QR9s_1dehBt0o",
  destination_name: "Whistler"
})

schedule5 = trip5.schedules.create!({
  date: Date.new(2017,12,16),
  destination: "ChIJ0X31pIK3voARo3mz1ebVzDo",
  destination_name: "Las Vegas"
})

schedule6 = trip6.schedules.create!({
  date: Date.new(2017,12,17),
  destination: "ChIJOwg_06VPwokRYv534QaPC8g",
  destination_name: "New York"
})

schedule7 = trip2.schedules.create!({
  date: Date.new(2017,8,25),
  destination: "ChIJ0X31pIK3voARo3mz1ebVzDo",
  destination_name: "Las Vegas"
})

puts "Creating activities ..."

Activity.destroy_all

activity1 = schedule1.activities.create!({
  start_time: '16:00',
  end_time: '18:00',
  uuid: 1,
  name:"Hiking",
  description:"Hiking a lot!!",
  place: "ChIJW5JDBk0jh1QRttPEPI0TSm8"
})

activity2 = schedule1.activities.create!({
  start_time: '19:00',
  end_time: '21:00',
  uuid: 2,
  name:"Lunch",
  description:"Italian for lunch!",
  place: "ChIJ81o8DrM8h1QR9NeJlPZ0ZRA"
})

activity3 = schedule1.activities.create!({
  start_time: '23:00',
  end_time: '03:00',
  uuid: 3,
  name:"Bar",
  description:"Hit the Dubh Linn bar!",
  place: "ChIJTVGqokwjh1QRAN4E3Ad4v5E"
})

activity4 = schedule2.activities.create!({
  start_time: '17:00',
  end_time: '19:00',
  uuid: 4,
  name:"Bellagio",
  description:"Visit Bellagio for fun!",
  place: "ChIJvUdRyzDEyIARhA3R2cXH8oI"
})

activity5 = schedule2.activities.create!({
  start_time: '21:00',
  end_time: '23:00',
  uuid: 5,
  name:"Strip",
  description:"Time to hit the strip!",
  place: "ChIJ69QoNDjEyIARTIMmDF0Z4kM"
})

activity6 = schedule2.activities.create!({
  start_time: '19:00',
  end_time: '21:00',
  uuid: 6,
  name:"Dinner",
  description:"Dinner time at a fancy place!",
  place: "ChIJvUdRyzDEyIARh86Fi1C2hqI"
})

activity7 = schedule3.activities.create!({
  start_time: '16:00',
  end_time: '18:00',
  uuid: 7,
  name:"Empire State Building",
  description:"What better than Empire State Building!",
  place: "ChIJtcaxrqlZwokRfwmmibzPsTU"
})

activity8 = schedule7.activities.create!({
  start_time: '16:00',
  end_time: '18:00',
  uuid: 8,
  name:"Morning at the Venetian",
  description:"Explore the property and shops at Venetian",
  place: "ChIJiwV3rBXEyIARRdN3c345tKE"
})

activity9 = schedule7.activities.create!({
  start_time: '19:00',
  end_time: '21:00',
  uuid: 10,
  name:"Buffet Lunch at MGM",
  description:"MGM Grant Buffet!",
  place: "ChIJJQ6Ck8zFyIARhIWFRFW3RQ8"
})


puts "Creating participations ..."

Participation.destroy_all

participation1 = schedule2.participations.create!({
  user_id: user1.id
})

participation3 = schedule2.participations.create!({
  user_id: user3.id,
  status: 'Accepted'
})

participation4 = schedule2.participations.create!({
  user_id: user5.id,
  status: 'Accepted'
})

participation5 = schedule1.participations.create!({
  user_id: user1.id
})

participation6 = schedule1.participations.create!({
  user_id: user3.id
})


