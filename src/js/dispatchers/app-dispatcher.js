var Dispatcher = require('./dispatcher.js');
var assign = require('react/lib/Object.assign.js');

var AppDispatcher = assign({}, Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;