Rails.application.routes.draw do
  get 'participations/index'

  get 'landing/index'

  get 'search/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'landing#index'
  resources :trips, only: [:index, :create, :update, :destroy] do
    resources :schedules, shallow: true do
      resources :activities, shallow: true
      resources :participations, shallow: true
    end
  end

  resources :search, only: [:show]
  resources :users, only: [:show] do
    resources :participations, only: [:index]
  end


  # get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  # get 'register', to: 'users#new'
  post 'register', to: 'users#create'

end
