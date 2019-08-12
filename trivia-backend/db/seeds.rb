# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

otha = User.create(name: "otha")
leah = User.create(name: "leah")


game_one = Game.create(user_id: 1)
game_two = Game.create(user_id: 2)
game_three = Game.create(user_id: 1)
game_four = Game.create(user_id: 1)
game_five = Game.create(user_id: 2)


Question.create(question: "Why did the chicken cross the road?" ,game_id: 1, correct_answer: true)
Question.create(question: "Is the earth flat?" ,game_id: 1, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?" ,game_id: 1, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?" ,game_id: 1, correct_answer: false)
Question.create(question: "Why did the chicken cross the road?" ,game_id: 1, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?" ,game_id: 1, correct_answer: true)

Question.create(question: "Why did the chicken cross the road?", game_id: 3, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 3, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 4, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 3, correct_answer: false)

Question.create(question: "Why did the chicken cross the road?", game_id: 2, correct_answer: true)


Question.create(question: "Why did the chicken cross the road?", game_id: 2, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 2, correct_answer: false)
Question.create(question: "Why did the chicken cross the road?", game_id: 5, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 5, correct_answer: true)
Question.create(question: "Why did the chicken cross the road?", game_id: 5, correct_answer: false)
