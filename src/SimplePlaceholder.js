import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./assets/_placeholder.scss"

export default class SimplePlaceholder extends Component {
    render() {
        return (
            <div className={[this.props.parentClassName, "placeholder-container"].join(" ")}>
                <div className="animated-background" />
            </div>
        );
    }
}

SimplePlaceholder.propTypes = {
    parentClassName: PropTypes.string.isRequired,
};

SimplePlaceholder.defaultProps = {
    parentClassName: "card-container",
}