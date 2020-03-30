// import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

// make a components
const Header = () => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
  },
  textStyle: {
    fontSize: 30,
  },
};

// Make the component available to other parts of the app
export default Header;
