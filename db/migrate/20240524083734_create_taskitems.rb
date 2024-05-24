class CreateTaskitems < ActiveRecord::Migration[7.0]
  def change
    create_table :taskitems do |t|

      t.string :task, null: false
      t.string :memo
      t.boolean :completed, default: false
      t.date :due_date
      t.timestamps
    end
  end
end
