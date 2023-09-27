# frozen_string_literal: true

class TripPackage < ApplicationRecord
  has_and_belongs_to_many :users
end
