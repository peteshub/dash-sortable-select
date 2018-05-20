import React, {Component} from 'react';
import {MultiSelectSortableField} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>dash-sortable-select Demo</h1>

                <hr/>
                <h2>Multi Select Sortable</h2>
                <MultiSelectSortableField
                    label="This is an example label"
                    value={this.state.value}
                    setProps={newProps => this.setState({value: newProps.value})}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
