class AddTripRefToSchedules < ActiveRecord::Migration[5.0]
  def change
    add_reference :schedules, :trip, foreign_key: true
  end
end
