class Api::V1::TripPackagesController < ApplicationController
  before_action :set_trip_package, only: %i[ show edit update destroy ]

  # GET /trip_packages or /trip_packages.json
  def index
    @trip_packages = TripPackage.all
  end

  # GET /trip_packages/1 or /trip_packages/1.json
  def show
  end

  # GET /trip_packages/new
  def new
    @trip_package = TripPackage.new
  end

  # GET /trip_packages/1/edit
  def edit
  end

  # POST /trip_packages or /trip_packages.json
  def create
    @trip_package = TripPackage.new(trip_package_params)

    respond_to do |format|
      if @trip_package.save
        format.html { redirect_to trip_package_url(@trip_package), notice: "Trip package was successfully created." }
        format.json { render :show, status: :created, location: @trip_package }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @trip_package.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /trip_packages/1 or /trip_packages/1.json
  def update
    respond_to do |format|
      if @trip_package.update(trip_package_params)
        format.html { redirect_to trip_package_url(@trip_package), notice: "Trip package was successfully updated." }
        format.json { render :show, status: :ok, location: @trip_package }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @trip_package.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trip_packages/1 or /trip_packages/1.json
  def destroy
    @trip_package.destroy

    respond_to do |format|
      format.html { redirect_to trip_packages_url, notice: "Trip package was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip_package
      @trip_package = TripPackage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trip_package_params
      params.require(:trip_package).permit(:name, :country, :price, :description)
    end
end
