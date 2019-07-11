class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question
      t.integer :game_id
      t.boolean :correct_answer

      t.timestamps
    end
  end
end
