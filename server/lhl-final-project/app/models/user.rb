class User < ApplicationRecord
  has_many :trips, dependent: :destroy
  has_many :participations, dependent: :destroy
  has_many :activities, through: :participations, dependent: :destroy
end
