var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(item){
      dispatcher.dispatch({
        payload:item,
        type:"arts-item:add"
      })
    },
    delete:function(item){
      dispatcher.dispatch({
        payload:item,
        type:"arts-item:delete"
      })
    },
    buy:function(item){
      dispatcher.dispatch({
        payload:item,
        type:"arts-item:buy"
      })
    },
    unbuy:function(item){
      dispatcher.dispatch({
        payload:item,
        type:"arts-item:unbuy"
      })
    }
}
