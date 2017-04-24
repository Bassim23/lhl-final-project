class Activity < ApplicationRecord
  belongs_to :schedule
  has_many :participations, dependent: :destroy
  has_many :users, through: :participations
end
