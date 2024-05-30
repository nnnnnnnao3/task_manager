Rails.application.routes.draw do
  devise_for :users
  root to: 'tasks#index'

  resources :tasks do
    resources :task_items, only:[:index, :create]
 end
end
