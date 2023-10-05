class Api::V1::TripPackagesController < ApplicationController
  before_action :set_trip_package, only: %i[show edit update destroy]

  # Action to fetch all trip packages
  def index
    @trip_packages = TripPackage.all

    render json: @trip_packages
  end

  # Action to show a specific trip package
  def show
    render json: @trip_package
  end

  # Action to create a new trip package
  def create
    @trip_package = TripPackage.new(trip_package_params)

    if @trip_package.save
      render json: @trip_package, status: :created, location: @trip_package
    else
      render json: @trip_package.errors, status: :unprocessable_entity
    end
  end

  # Action to update a trip package
  def update
    if @trip_package.update(trip_package_params)
      render json: @trip_package
    else
      render json: @trip_package.errors, status: :unprocessable_entity
    end
  end

  # Action to delete a trip package
  def destroy
    try { @trip_package.destroy }
    catch { |e| render json: { error: e.message }, status: :unprocessable_entity }
  end

  private

  # Find and set the trip package based on the provided ID
  def set_trip_package
    @trip_package = TripPackage.find(params[:id])
  end

  # Only allow specific parameters when creating or updating a trip package
  def trip_package_params
    params.require(:trip_package).permit(:name, :country, :price, :description)
  end
end
