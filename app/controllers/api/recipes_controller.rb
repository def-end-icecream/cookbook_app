class Api::RecipesController < ApplicationController

  def one_recipe_action
    @recipe = Recipe.first #hash of recipe data
    render "one_recipe.json.jb"
  end

end
