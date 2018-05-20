import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select, { Value } from 'react-select';
// SortableHandle,SortableElement
import { SortableContainer,  arrayMove,SortableHandle,SortableElement } from 'react-sortable-hoc';

const SortableLabel = SortableHandle(({ label }) => <div>{label}</div>);
const SortableValue = SortableElement(Value);
const SortableSelect = SortableContainer(Select);


/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
**/

export default class MultiSelectSortableField extends Component {
  constructor(props){
      super(props);
      this.state = {
        value: props.value
      };
    }

    handleSelectChange(value, setProps){
      this.setState({ value });
      if (setProps) setProps({value});
    }
    onSortEnd({ oldIndex, newIndex }, setProps)  {
      let value;
      value = arrayMove(this.state.value, oldIndex, newIndex)
      this.setState({
        value: value
      });
      if (setProps) setProps({value});
    }
    render(){
      const {
            id, options, setProps, style
        } = this.props;
      const { value } = this.state;
      return (
        <div id={id} style={style}>
          <SortableSelect
            multi
            onChange={(value) => this.handleSelectChange(value, setProps)}
            options={options}
            placeholder="Select your favourite(s)"
            value={value}
            valueRenderer={option => <SortableLabel label={option.label} />}
            valueComponent={SortableValue}
            axis="xy"
            helperClass="draggable-dragging"
            onSortEnd={(sortState) => this.onSortEnd(sortState, setProps)}
            useDragHandle={true}
          />
        </div>

      );
    }
}


MultiSelectSortableField.propTypes = {
    id: PropTypes.string,
    /**
     * An array of options
     */
     options: PropTypes.arrayOf(
         PropTypes.shape({
            /**
             * The checkbox's label
             */
            label: PropTypes.string,

            /**
             * The value of the checkbox. This value
             * corresponds to the items specified in the
             * `values` property.
             */
            value: PropTypes.string,

            /**
             * If true, this checkbox is disabled and can't be clicked on.
             */
            disabled: PropTypes.bool
        })
    ),
    /**
     * The value of the input. Multiple values can be selected at
     * once, and `value` is an
     * array of items with values corresponding to those in the
     * `options` prop.
     */
    value: PropTypes.arrayOf(PropTypes.string),

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
