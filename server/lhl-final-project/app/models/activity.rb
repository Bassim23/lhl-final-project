class Activity < ApplicationRecord
  belongs_to :schedule
  has_many :participations
  has_many :users, through: :participations
end
