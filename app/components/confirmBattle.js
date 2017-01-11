var React = require('react');
var PropTypes = React.PropTypes;

function ConfirmBattle (props){
    return( props.isLoading 
        ?  <p>LOADING</p>
        : <p> BATTLE </p>
    )
}

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;