import React, {Component} from 'react';
import propTypes from 'prop-types';
import './index.css';

class NameGenerator extends Component {

    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    getNamesAndIndex() {
        return {
            names: this.props.names,
            index: this.state.index,
        }
    }

    switchIndex() {
        const {names, index} = this.getNamesAndIndex()
        const length = names.length;

        if (index >= length - 1) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: index + 1
            });
        }
    }

    render() {
        const {names, index} = this.getNamesAndIndex()

        return (
            <span className="name-span">{names[index]}</span>
        )
    }
}

NameGenerator.propTypes = {
    names: propTypes.array.isRequired
}

export default NameGenerator;