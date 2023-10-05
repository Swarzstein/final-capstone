json.extract! trip_package, :id, :name, :country, :price, :description, :created_at, :updated_at
json.url trip_package_url(trip_package, format: :json)
