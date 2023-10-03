# frozen_string_literal: true

class CreateJoinTableUsersTripPackages < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :trip_packages do |t|
      t.index %i[user_id trip_package_id]
      t.index %i[trip_package_id user_id]
    end
  end
end
