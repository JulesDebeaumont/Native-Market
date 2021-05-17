import { StyleSheet, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Footer(props) {
  const { cart } = props;

  return <View style={styles.footer} />;
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: '0%',
    left: '0%',
    backgroundColor: '#54c499',
    height: 40,
    width: '100%',
  },
});

Footer.defaultProps = {
  cart: PropTypes.object,
};

export default Footer;
