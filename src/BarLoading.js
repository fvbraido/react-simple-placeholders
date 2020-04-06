import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./assets/_barloading.scss"

class BarLoading extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="lds-facebook" style={{marginTop: this.props.marginTop}}>
                <div style={{background: this.props.color}}>
                </div>
                <div style={{background: this.props.color}}>
                </div>
                <div style={{background: this.props.color}}>
                </div>
            </div>
        );
    }
}

BarLoading.propTypes = {
    color: PropTypes.string.isRequired,
    marginTop: PropTypes.string.isRequired,
};

BarLoading.defaultProps = {
    color: "#FFF",
    marginTop: "auto",
}

export default BarLoading;
