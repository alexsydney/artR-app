var React = require('react');
//You need this npm package to do createReactClass
var createReactClass = require('create-react-class');

var action = require('./../actions/ArtsItemActionCreator.jsx')

module.exports = createReactClass({

  getInitialState:function(){
    return { input:"" };
  },

  handleInputName:function(e){
    this.setState({input : e.target.value });
  },

  addItem:function(e){
    e.preventDefault();
    //console.log("Adding item!", this.state.input);
    action.add({
      name:this.state.input
    });
    this.setState({
      input:''
    })
  },

  render:function(){
    return (
      <div className='arts-addItem'>
        <form onSubmit={ this.addItem }>
            <input type="text" class="u-full-width" placeholder="Add your famous artist name" value={ this.state.input } onChange={ this.handleInputName } />
            <button class="button button-primary"> Add Your Art </button>
        </form>
      </div>
    )
  }
})
