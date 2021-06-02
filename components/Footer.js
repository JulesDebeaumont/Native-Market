/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Link } from 'react-router-native';
import { StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../context/store';

export function Footer(props) {
  // eslint-disable-next-line react/prop-types
  const { route } = props;
  const { state } = useContext(MyContext);
  let totalPrice = 0;
  let totalQuantity = 0;

  for (const v in state.cart) {
    totalPrice += state.cart[v].prix * state.cart[v].quantity;
    totalQuantity += state.cart[v].quantity;
  }

  return (
    <>
      <View style={styles.footer}>
        <Link to={route}>
          <>
            <Text>Quantity: {totalQuantity}</Text>
            <Text>Total Price: {totalPrice.toFixed(2)}€</Text>
          </>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#54c499',
    minHeight: 80,
    width: '100%',
  },
});

Footer.defaultProps = {
  route: PropTypes.string,
};

export default Footer;
