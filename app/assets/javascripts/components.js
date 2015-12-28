//Important for server-side rendering, which I didn't end up using to get Redux and ActionCable to play nice.
window.React = require('react');
window.ReactDOM = require('react-dom');
window.Root  = require('./components/containers/Root.js').default;
