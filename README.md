## Rails5-ActionCable-Redux-React-ChatAppExample

*[Updated Feb 27, 2016] Now with Webpack and Hot Module Replacement (HMR) for rapid development*

Rails5 brings the long-awaited [ActionCable](https://github.com/rails/rails/tree/master/actioncable) (integrated websockets) into the game. Combined with the [Redux](https://github.com/rackt/redux) implementation of [Flux](https://facebook.github.io/flux/) - and of course [React](https://facebook.github.io/react/) components - there's potential here for an _interesting_ stack if you don't want to create a separate front-end app and use Rails5 as an API server (which it now [more easily](https://github.com/rails/rails/pull/19832) does out of the box as an option, BTW).

I spent some time over the holiday break pulling examples from:

* [react-rails](https://github.com/reactjs/react-rails)
* [react_on_rails](https://github.com/shakacode/react_on_rails)
* Kenta Suzuki's [react-rails-redux-sample](https://github.com/suzan2go/react-rails-redux-sample)
* DHH's [Rails 5: Action Cable Demo](https://medium.com/@dhh/rails-5-action-cable-demo-8bba4ccfc55e)
* [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
* ...and the [Redux docs](https://github.com/rackt/redux/tree/master/docs).

..to create a _very simple_ chat app. Live demo [here](https://rails5reduxchat.herokuapp.com/).

If you're curious to learn more, I posted some background/motivation and a code walkthrough on my Medium account [here](https://medium.com/@wclittle/rails5-actioncable-redux-and-react-walking-through-an-example-chat-application-84fced7c5d27). Another post discussing the webpack/HMR addition is coming soon.

Anyway, diving right into the setup (I'm assuming you are familiar with Rails/JavaScript):

* Make sure you have Ruby 2.2.4, Rails 5.0.0.beta3 (or higher, if applicable), and recent versions of NPM, PostgreSQL, and Redis installed (for the Rails stuff, [here's a quick setup tutorial](https://articles.startuprocket.com/how-to-setup-a-mac-to-begin-developing-ruby-on-rails-web-applications-776435045393#.ld3h5plxs)).
* Grab the [Redux dev tools Chrome exention](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* Copy `config/database.yml.example` to `config/database.yml` and setup your username to be whatever super user (PostgreSQL) you have on your local machine.
* From the Rails root in your console, run `bundle install` and `npm install` and `rails db:create` and `rails db:migrate` and `rails db:seed` to add a quick "Hello World" message into the database.
* Fire up your Rails server via `rails s` and point your web browser to `http://localhost:3000`
* *The first time* you load the app, browserify-rails will do some caching, so give it a few seconds to load.
* Try opening two browsers side-by-side and see the web socket (via Action Cable) do its thing as you submit messages.
* For more rapid development with HMR with your react components, fire up the webpack server via `npm start`

That's it for now!


