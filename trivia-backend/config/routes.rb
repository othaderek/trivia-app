Rails.application.routes.draw do
  resources :questions
  resources :games
  resources :users
  get "user/:id/user_game_info", to: "users#user_game_info"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
