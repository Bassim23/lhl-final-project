class Activity < ApplicationRecord
  belongs_to :schedule
  has_many :users, through: :participations
  validates_uniqueness_of :uuid
end
