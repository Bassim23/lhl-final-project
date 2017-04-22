class User < ApplicationRecord
  has_many :trips
  has_many :participation
  has_many :activities, through :participation
end
