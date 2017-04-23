class User < ApplicationRecord
  has_many :trips
  has_many :participations
  has_many :activities, through: :participations
end
