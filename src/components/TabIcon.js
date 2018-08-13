import React from 'react';
import PropTypes from 'prop-types';
import {Text,Icon} from 'native-base';

const propTypes = {
    selected: PropTypes.bool,
    nameIcon: PropTypes.string,
    nameType: PropTypes.string,
};

const TabIcon = (props) => {
    return <Icon
        name={props.nameIcon}
        type={props.nameType}
        style={{color: props.focused ? '#057ce4' : '#afafa4'}}
    />
};

TabIcon.propTypes = propTypes;

export default TabIcon;