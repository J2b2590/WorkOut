class CreateLifts < ActiveRecord::Migration[5.1]
  def change
    create_table :lifts do |t|
      t.date :date
      t.string :liftname
      t.boolean :ismetric
      t.integer :weightlifted
      t.integer :repsperformed
      t.integer :onrm

      t.timestamps
    end
  end
end