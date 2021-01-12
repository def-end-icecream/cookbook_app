class Recipe
  attr_accessor :ingredients, :title, :directions, :prep_time, :image_url, :chef
  
  def initialize(options)
    @ingredients = options[:ingredients]
    @title = options[:title]
    @directions = options[:directions]
    @prep_time = options[:prep_time]
    @image_url = options[:image_url]
    @chef = options[:chef]
  end
end