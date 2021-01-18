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

end