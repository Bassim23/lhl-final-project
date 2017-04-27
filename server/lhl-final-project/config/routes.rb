Rails.application.routes.draw do
  get 'search/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'trips#index'
  resources :trips, only: [:index, :show, :create, :update, :destroy] do
    resources :schedules, only: [:show, :create, :update, :destroy] do
      resources :activities, only: [:show, :create, :update, :destroy] do
        resources :participations, only: [:show, :create, :update, :destroy]
      end
    end
  end

  resources :search, only: [:show]

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get 'register', to: 'users#new'
  post 'regsiter', to: 'users#create'

end
