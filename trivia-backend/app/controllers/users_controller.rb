class UsersController < ApplicationController

  def index
    users = User.all
    render json: users, except:[:created_at, :updated_at], include: [:games]
  end

  def show
    user = User.find(params[:id])
    render json: user, include: [:games]
  end

  def user_game_info
    user = User.find(params[:id])
    game_info = {
      game_count: user.games_played,
      total_questions: user.total_questions,
      correct: user.correct_answers,
      incorrect: user.total_questions - user.correct_answers
    }
    render json: game_info
  end


  private

  # def user_params
  #   params.require(:user).permit(:name, :points)
  # end

end
