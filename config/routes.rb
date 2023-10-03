Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'

  # routes for API
  namespace :api do
    namespace :v1 do
      resources :trip_packages
      resources :users do
        collection do
          post 'sign_in'
        end
      end
    end
  end
  get '*path', to: 'root#index'
end
