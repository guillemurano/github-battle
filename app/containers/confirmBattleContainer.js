var React = require('react');
var ConfirmBattle = require('../components/confirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes:{
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playerInfo: []
        }
    },
    componentDidMount: function(){
        var query =  this.props.location.query;
        console.log(query);
        //fetch data
    },
    render: function(){
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playerInfo={this.state.playerInfo}/>
        )
    }
});

module.exports = ConfirmBattleContainer;