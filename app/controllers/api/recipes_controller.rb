class Api::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render "index.json.jb"
  end

  def show
    recipe_id = params[:id]
    @recipe = Recipe.find_by(id: recipe_id)
    render "show.json.jb"
  end

  def create
    # create a new recipe
    @recipe = Recipe.new(
      title: params[:title],
      ingredients: params[:ingredients],
      directions: params[:directions],
      chef: params[:chef],
      prep_time: params[:prep_time]
    )
    @recipe.save
    render "show.json.jb"
  end

  def update
    # update an existing recipe
    recipe_id = params[:id]
    @recipe = Recipe.find_by(id: recipe_id)

    @recipe.title = params[:title] || @recipe.title
    @recipe.ingredients = params[:ingredients] || @recipe.ingredients
    @recipe.directions = params[:directions] || @recipe.directions
    @recipe.chef = params[:chef] || @recipe.chef
    @recipe.prep_time = params[:prep_time] || @recipe.prep_time

    @recipe.save
    render "show.json.jb"
  end

end