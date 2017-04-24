class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :gender
      t.string :nationality
      t.string :email
      t.text :photo
      t.integer :upvotes
      t.integer :downvotes
      t.text :summary
      t.string :password_digest

      t.timestamps
    end
  end
end
