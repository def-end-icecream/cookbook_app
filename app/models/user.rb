class User < ApplicationRecord
  has_many :recipes
  has_many :messages
  has_secure_password
  validates :name, length: {in: 2..30}
  validates :password, length: {in: 6..20}
  validates :email, presence: true, uniqueness: true
end
