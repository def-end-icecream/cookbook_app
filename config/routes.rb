Rails.application.routes.draw do
  namespace :api do
    get "/recipes" => "recipes#index"
    get "/recipes/:id" => "recipes#show"
    post "/recipes" => "recipes#create"
    patch "/recipes/:id" => "recipes#update"
    delete "/recipes/:id" => "recipes#destroy"

    post "/users" => "users#create"
    get "/users/:id" => "users#show"
    post "/sessions" => "sessions#create"

    get "/messages" => "messages#index"
    post "/messages" => "messages#create"
  end
  get "/*path" => proc { [200, {}, [ActionView::Base.new.render(file: 'public/index.html')]] }
end