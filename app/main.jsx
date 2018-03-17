  var React = require('react');
  var createReactClass =  require('create-react-class');
  var ReactDOM = require('react-dom');

  console.log("Hello from JSX");

  var ArtsItemList = require('./components/ArtsItemList.jsx');

  var artsItemStore = require('./stores/ArtsItemStore.jsx');

  var initial = artsItemStore.getItems();

  function render(){
    ReactDOM.render(<ArtsItemList items={ initial } />,app);

    //React.render(<ArtsItemList />,app)//

  }
  artsItemStore.onChange(function(items){
      initial = items;
      render();
  })

  render();
