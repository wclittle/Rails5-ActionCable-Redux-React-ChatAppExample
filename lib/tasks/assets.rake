# # Ensure proper asset compiling for Heroku deploys
# Rake::Task["assets:precompile"]
#   .clear_prerequisites
#   .enhance(["assets:compile_environment"])

# namespace :assets do
#   # In this task, set prerequisites for the assets:precompile task
#   task compile_environment: :npm do
#     Rake::Task["assets:environment"].invoke
#   end

#   desc "Compile assets"
#   task :npm do
#     sh "npm install"
#   end

# end
