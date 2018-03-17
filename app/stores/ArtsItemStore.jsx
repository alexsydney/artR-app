//'use strict';

var dispatcher = require('./../dispatcher.js');

var helper = require('./../helpers/RestHelper.js');


function ArtsItemStore(){
  //var items = [];

 var items = [];

   //var items = [{
     //name:"Roy Fox Lichtenstein"
     //}, {
     //name:"Andy Warhol"
     //}, {
     //  name:"Keith Allen Haring"
     //}, {
     //  name:"Jasper Johns"
     //}, {
     //  name:"Robert Indiana"
     //  }, {
     //  name:"Romero Britto"
     //  }, {
     //  name:"David Hockney"
     //}, {
     //  name:"Wayne Thiebaud"
     //}, {
     //  name:"Sara Pope"
     //}, {
     //  name:"Robert Rauschenberg"
     //}];


  helper.get("api/items")
  .then(function(data){
      items = data;
      triggerListeners();
  })

  var listeners = [];

  function getItems(){
    return items;
  }

  function addArtsItem( item ) {
    items.push( item );
    triggerListeners();
  }

  function deleteArtsItem( item ){
      var index;
      items.filter(function(_item, _index){
      if (_item.name == item.name){
        index = _index;
      }
      });

    // work same way
    //var index = items.findIndex( //function( _item ){
    //  return _item.name == item.name;
    //});



    items.splice( index,1 );
    triggerListeners();
  }

  function setArtsItemBought( item, isBought ){
    var _item = items.filter(function(a){ return a.name == item.name })[0];
    item.purchased = isBought || false;
    triggerListeners();
  }

  function onChange(listener){
    listeners.push(listener);
  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(items);
    })
  };

  dispatcher.register(function(event){
    var split = event.type.split(':');
    if (split[0]==='arts-item'){
      switch(split[1]){
        case "add":
          addArtsItem(event.payload);
          break;
        case "delete":
          deleteArtsItem(event.payload);
          break;
        case "buy":
          setArtsItemBought(event.payload, true);
          break;
        case "unbuy":
          setArtsItemBought(event.payload, false);
          break;
      }
    }
  });

  return {
    getItems:getItems,
    onChange:onChange
  }

}

module.exports = new ArtsItemStore();
