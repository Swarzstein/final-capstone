# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_26_203940) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "trip_packages", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.decimal "price"
    t.text "description"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trip_packages_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "trip_package_id", null: false
    t.index ["trip_package_id", "user_id"], name: "index_trip_packages_users_on_trip_package_id_and_user_id"
    t.index ["user_id", "trip_package_id"], name: "index_trip_packages_users_on_user_id_and_trip_package_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_users_on_name", unique: true
  end

end
