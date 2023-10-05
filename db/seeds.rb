# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

TripPackage.create(
  name: "Los Roques Special", 
  country: "Venezuela", 
  price: 100, 
  description: "Special Tour in the Beaches of Los Roques Venezuela, 5 days 4 nights, " \
  "includes: all meals, stay, drinks, and transportation from the airport to the hotel, " \
  "with different activities to do in the beach, like snorkeling, diving, and more",
  image_url: "https://ospreyexpeditions.com/wp-content/uploads/2021/03/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg"
)
