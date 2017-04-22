class Activity < ApplicationRecord
  belongs_to :schedule
  has_many :participation
  has_many :users, through :participation
end
