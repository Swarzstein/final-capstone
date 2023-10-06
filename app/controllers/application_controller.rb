class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    # if session[:user_id] is true, then execute User.find_by(id: session[:user_id])
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user # !! turns current_user into a boolean
  end

  def require_user
    return if logged_in?

    flash[:alert] = 'You must be logged in to perform that action'
    redirect_to login_path
  end
end
