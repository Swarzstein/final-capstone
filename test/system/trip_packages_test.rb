# frozen_string_literal: true

require 'application_system_test_case'

class TripPackagesTest < ApplicationSystemTestCase
  setup do
    @trip_package = trip_packages(:one)
  end

  test 'visiting the index' do
    visit trip_packages_url
    assert_selector 'h1', text: 'Trip packages'
  end

  test 'should create trip package' do
    visit trip_packages_url
    click_on 'New trip package'

    fill_in 'Country', with: @trip_package.country
    fill_in 'Description', with: @trip_package.description
    fill_in 'Name', with: @trip_package.name
    fill_in 'Price', with: @trip_package.price
    click_on 'Create Trip package'

    assert_text 'Trip package was successfully created'
    click_on 'Back'
  end

  test 'should update Trip package' do
    visit trip_package_url(@trip_package)
    click_on 'Edit this trip package', match: :first

    fill_in 'Country', with: @trip_package.country
    fill_in 'Description', with: @trip_package.description
    fill_in 'Name', with: @trip_package.name
    fill_in 'Price', with: @trip_package.price
    click_on 'Update Trip package'

    assert_text 'Trip package was successfully updated'
    click_on 'Back'
  end

  test 'should destroy Trip package' do
    visit trip_package_url(@trip_package)
    click_on 'Destroy this trip package', match: :first

    assert_text 'Trip package was successfully destroyed'
  end
end
