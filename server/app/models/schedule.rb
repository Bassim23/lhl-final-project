class Schedule < ApplicationRecord
  belongs_to :trip
  has_many :activities, dependent: :destroy


# if deployed on heroku, use ILIKE instead of LIKE
  def self.search(search)
    where(" (destination) LIKE ? ", search.downcase)
    puts '........................'
    puts search.downcase
  end

end
