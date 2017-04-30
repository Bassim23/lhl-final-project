class Schedule < ApplicationRecord
  belongs_to :trip
  has_many :activities, dependent: :destroy


# if deployed on heroku, use ILIKE instead of LIKE
  def self.search(search)
    where(" (destination) ILIKE ? ", "%#{search}%")
  end

end
