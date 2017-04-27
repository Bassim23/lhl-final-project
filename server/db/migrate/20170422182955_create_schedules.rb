class CreateSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :schedules do |t|
      t.date :date
      t.string :destination

      t.timestamps
    end
  end
end
