class Trip < ApplicationRecord
  belongs_to :user
  has_many :schedules
end
