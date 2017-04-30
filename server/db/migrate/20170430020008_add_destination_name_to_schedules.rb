class AddDestinationNameToSchedules < ActiveRecord::Migration[5.0]
  def change
    add_column :schedules, :destination_name, :string
  end
end
