import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Quantity(props) {
  // eslint-disable-next-line react/prop-types
  const { quantity, onUpdate } = props;

  return (
    <View style={styles.quantity}>
      <Text>Quantity: {quantity}</Text>
      <Button onPress={() => onUpdate(quantity + 1)} title="+" />
      <Button onPress={() => onUpdate(quantity - 1)} title="-" />
    </View>
  );
}

const styles = StyleSheet.create({
  quantity: {
    justifyContent: 'center',
    backgroundColor: '#ccc091',
    width: '100%',
    padding: 15,
    marginTop: 25,
  },
});

Quantity.defaultProps = {
  quantity: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default Quantity;
