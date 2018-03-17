var React = require('react');
//You need this npm package to do createReactClass
var createReactClass = require('create-react-class');

var ArtsItem = require('./ArtsItem.jsx');

var ArtsListAddItem = require('./ArtsListAddItem.jsx')

module.exports = createReactClass({
    render:function(){
        return (
            <div>
                <h1>Arts listing </h1>
                <div>
                    { this.props.items.map(function(item, index){
                        return (
                          <ArtsItem item={item} key={"item"+index}/>
                        )
                    })
                    }
                </div>
                <ArtsListAddItem />
            </div>
        )
    }
})
