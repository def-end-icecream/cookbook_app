require 'rails_helper'

RSpec.describe "Recipes", type: :request do
  before do
    user = User.create(name: "Dani", email: "dani@gmail.com", password: "password")
    Recipe.create([
      {title: "Raw Eggs", ingredients: "Chicken", directions: "Squeeze the chicken", prep_time: 1, user_id: user.id},
      {title: "Empty Sandwich", ingredients: "Two slices of bread", directions: "Place slices of bread next to each other.", prep_time: 72, user_id: user.id},
      {title: "Licorice", ingredients: "Licorice", directions: "Buy licorice from store.", prep_time: 120, user_id: user.id}
    ])
  end
  describe "GET /recipes" do
    it "should return an array of recipes" do
      get "/api/recipes" # response = web response
      recipes = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(recipes.length).to eq(3)
    end
  end
  describe "GET /recipes/:id" do 
    it "should return a hash with the appropriate attributes" do
      get "/api/recipes/#{Recipe.first.id}"
      recipe = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(recipe["title"]).to eq("Raw Eggs")
      expect(recipe["ingredients"]).to eq("Chicken")
    end
  end
end
