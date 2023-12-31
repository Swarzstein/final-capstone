# frozen_string_literal: true

class CreateTripPackages < ActiveRecord::Migration[7.0]
  def change
    create_table :trip_packages do |t|
      t.string :name
      t.string :country
      t.decimal :price
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
