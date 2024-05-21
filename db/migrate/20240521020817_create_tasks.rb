class CreateTasks < ActiveRecord::Migration[7.0]
  def change 
    create_table   :tasks do |t|
      t.string     :title,            null: false   
      t.text       :descriptio
      t.date       :due_date
      t.references :user,             null: false,  foreign_key: true 
      t.boolean    :completed, default: false # タスクの完了状態を表すブール型のカラム
      t.timestamps
    end
  end
end
