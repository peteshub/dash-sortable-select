import React from 'react';
import {shallow} from 'enzyme';
import MultiSelectSortableField from '../MultiSelectSortableField.react';

describe('MultiSelectSortableField', () => {

    it('renders', () => {
        const component = shallow(<MultiSelectSortableField label="Test label"/>);
        expect(component).to.be.ok;
    });
});
