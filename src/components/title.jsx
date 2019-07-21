import React from 'react';
import PropTypes from 'prop-types';

export default class TitleLvl1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { class: this.props.styleTitle };
    }
    render(){
        return (
            <h1 className={ this.state.class }>{ this.props.value }</h1>
        );
    }
}
TitleLvl1.propTypes = {
    styleTitle: PropTypes.string,
    value: PropTypes.string
}
