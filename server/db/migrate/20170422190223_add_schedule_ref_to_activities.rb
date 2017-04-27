class AddScheduleRefToActivities < ActiveRecord::Migration[5.0]
  def change
    add_reference :activities, :schedule, foreign_key: true
  end
end
