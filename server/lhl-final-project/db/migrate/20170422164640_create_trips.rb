class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :kind
      t.text :summary

      t.timestamps
    end
  end
end
