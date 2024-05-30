class CreateTaskitems < ActiveRecord::Migration[7.0]
  def change
    create_table :taskitems do |t|

      t.boolean :completed, default: false
      t.string :task_name
      t.string :memo
      t.date :due_date
      t.references :task,  null: false,  foreign_key: true 
      
      t.timestamps
    end
  end
end
