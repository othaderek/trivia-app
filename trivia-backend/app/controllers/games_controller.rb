class GamesController < ApplicationController
  def index
    games = Game.all
    render json: games, include: [:user, :questions]
  end

  def show
    game = Game.find(params[:id])
    render json: game, include: [:user, :questions]
  end
end
