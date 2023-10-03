class Api::V1::UsersController < ApplicationController

  # GET /users
  # GET /users.json
  def index
    render json: current_user
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  def sign_in
    @user = User.find_by(name: user_params[:name])
    if @user
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: "User not found"}, status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {error: @user.errors.full_messages}, status: 400
    end
  end

  private

  # get name from post request
  def user_params
    params.require(:user).permit(:name)
  end

end
