class Game < ApplicationRecord
  belongs_to :user
  has_many :questions

  def correct_questions
    self.questions.filter {|q| q.correct_answer == true}.length
  end

  def incorrect_questions
    self.questions.filter {|q| q.correct_answer == false}.length
  end

end
