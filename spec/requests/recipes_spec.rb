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
  describe "POST /recipes" do
    it "creates a new recipe when a user is logged in with valid data" do
      jwt = JWT.encode(
        {user_id: User.first.id},
        Rails.application.credentials.fetch(:secret_key_base), 
        "HS256"
      )
      post "/api/recipes", params: {
        title: "Example title", 
        ingredients: "Example ingredients", 
        directions: "Example directions", 
        prep_time: 10
      }, headers: {"Authorization" => "Bearer #{jwt}"}

      recipe = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(recipe["title"]).to eq("Example title")
    end
    it "returns an error status when a user is logged in with invalid data" do
      jwt = JWT.encode(
        {user_id: User.first.id},
        Rails.application.credentials.fetch(:secret_key_base), 
        "HS256"
      )
      post "/api/recipes", params: {
        ingredients: "Example ingredients", 
        directions: "Example directions", 
        prep_time: 10
      }, headers: {"Authorization" => "Bearer #{jwt}"}

      expect(response).to have_http_status(422)
    end
    it "returns an error status when a user is not logged in" do
      post "/api/recipes", params: {}
      expect(response).to have_http_status(401)
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
