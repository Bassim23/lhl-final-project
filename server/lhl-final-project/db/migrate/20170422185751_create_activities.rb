class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :uuid
      t.string :name
      t.text :description
      t.string :place

      t.timestamps
    end
  end
end
