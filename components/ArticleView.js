import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Quantity } from './Quantity';

export function ArticleView(props) {
  // eslint-disable-next-line react/prop-types
  const { description, price, picture, quantity } = props;

  return (
    <View style={styles.article}>
      <View style={styles.articleTop}>
        <Text style={styles.articleDesc}>{description}</Text>
        <Text style={styles.articlePrice}>{price}</Text>
      </View>
      <View style={styles.articleBottom}>
        <Image source={picture} style={{ width: 200, height: 200 }} resizeMode="center" />
        <Quantity quantity={quantity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#ccc091',
    width: '100%',
    padding: 15,
    marginTop: 25,
  },

  articleTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  articleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  articleDesc: {
    color: '#000000',
    fontSize: 40,
    textAlign: 'center',
  },
});

ArticleView.defaultProps = {
  description: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string,
  quantity: PropTypes.number,
};

export default ArticleView;
