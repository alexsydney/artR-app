// 'use strict';

module.exports = function (app){

    var items = [{
      name:"Roy Fox Lichtenstein"
    }, {
      name:"Andy Warhol"
    }, {
      name:"Keith Allen Haring"
    }, {
      name:"Jasper Johns"
    }, {
      name:"Robert Indiana"
    }, {
      name:"Romero Britto"
    }, {
      name:"David Hockney"
    }, {
      name:"Wayne Thiebaud"
    }, {
      name:"Sara Pope"
    }, {
      name:"Robert Rauschenberg"
    }];

    app.route('/api/items')
    .get(function(req, res){
      res.send(items);
    })
    .post(function(req, res){
        var item = req.body;
        items.push(item);
    })
}
