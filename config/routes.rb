# frozen_string_literal: true

Rails.application.routes.draw do
  resources :trip_packages
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
end
