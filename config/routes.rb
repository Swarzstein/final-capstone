# frozen_string_literal: true

Rails.application.routes.draw do
  resources :trip_packages
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'

  # routes for API
  namespace :api do
    namespace :v1 do
      resources :trip_packages
      resources :users
    end
  end
end
