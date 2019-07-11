class User < ApplicationRecord
  has_many :games
  has_many :questions, through: :game

  def total_questions
    total = 0
    self.games.each do |game|
      total += game.questions.length
    end
    total
  end

  def games_played
    self.games.length
  end

  def correct_answers
    all_answers = []
    self.games.each {|game| all_answers << game.questions}
    all = all_answers.flatten
    points = all.filter {|a| a.correct_answer == true}.length
    self.update(points: points)
    points
  end
end
