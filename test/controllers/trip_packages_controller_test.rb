require "test_helper"

class TripPackagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trip_package = trip_packages(:one)
  end

  test "should get index" do
    get trip_packages_url
    assert_response :success
  end

  test "should get new" do
    get new_trip_package_url
    assert_response :success
  end

  test "should create trip_package" do
    assert_difference("TripPackage.count") do
      post trip_packages_url, params: { trip_package: { country: @trip_package.country, description: @trip_package.description, name: @trip_package.name, price: @trip_package.price } }
    end

    assert_redirected_to trip_package_url(TripPackage.last)
  end

  test "should show trip_package" do
    get trip_package_url(@trip_package)
    assert_response :success
  end

  test "should get edit" do
    get edit_trip_package_url(@trip_package)
    assert_response :success
  end

  test "should update trip_package" do
    patch trip_package_url(@trip_package), params: { trip_package: { country: @trip_package.country, description: @trip_package.description, name: @trip_package.name, price: @trip_package.price } }
    assert_redirected_to trip_package_url(@trip_package)
  end

  test "should destroy trip_package" do
    assert_difference("TripPackage.count", -1) do
      delete trip_package_url(@trip_package)
    end

    assert_redirected_to trip_packages_url
  end
end
