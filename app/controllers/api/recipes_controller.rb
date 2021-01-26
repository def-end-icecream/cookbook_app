class Api::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all

    if params[:search]
      @recipes = Recipe.where("title iLIKE ?", "%#{params[:search]}%")
    end

    @recipes = @recipes.order(:id)

    render "index.json.jb"
  end

  def show
    if current_user
      recipe_id = params[:id]
      @recipe = Recipe.find_by(id: recipe_id)
      render "show.json.jb"
    else
      render json: {}, status: :unauthorized
    end
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

  def destroy
    recipe = Recipe.find_by(id: params[:id])
    recipe.destroy
    render json: {message: "Recipe successfully obliterated!"}
  end

end