class User < ApplicationRecord
  has_and_belongs_to_many :trip_packages
end
