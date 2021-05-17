import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export function Footer(props) {
  // eslint-disable-next-line react/prop-types
  const { cart } = props;
  const allArticleInCart = Object.values(cart).map(v => <Image source={v.articles.picture} />);

  return <View style={styles.footer}>{allArticleInCart}</View>;
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
