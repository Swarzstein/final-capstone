# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
TripPackage.create([
    {
        name: "Los Roques Special", 
        country: "Venezuela", 
        price: 100, 
        description: "Special Tour in the Beaches of Los Roques Venezuela, 5 days 4 nights, " \
        "includes: all meals, stay, drinks, and transportation from the airport to the hotel, " \
        "with different activities to do in the beach, like snorkeling, diving, and more",
        image_url: "https://ospreyexpeditions.com/wp-content/uploads/2021/03/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg"
    },
    {
        name: "Nyungwe forest national park", 
        country: "RWANDA", 
        price: 600, 
        description: "Nyungwe is one of the oldest rainforests in Africa " \
        " and the largest expanse of forest in Rwanda, covering 1,019 km2 of dense Afromontane forests, " \
        " bamboo-covered slopes, grasslands and wetlands. ",
        image_url: "https://www.explorerwandatours.com/wp-content/uploads/2019/03/nyugwe-forest-canopt-walk.jpg"
    },
    {
        name: "Great Wall of China", 
        country: "CHINE", 
        price: 500, 
        description: "The Great Wall is the largest man-made project in the world. " \
        "The complete route is over 20,000 km, stretching from the " \
        "east seaside to the west desert in northern China, winding up and down across mountains and plateaus like a dragon.",
        image_url: "https://img.veenaworld.com/customized-holidays/world/dubai-egypt-israel/shdz5/shdz9-thb.jpg"
    },
    
])