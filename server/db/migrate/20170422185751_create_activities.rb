class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.time :start_time
      t.time :end_time
      t.string :uuid
      t.string :name
      t.text :description
      t.string :place

      t.timestamps
    end
  end
end
