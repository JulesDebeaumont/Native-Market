/* eslint-disable react/prop-types */
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Quantity } from './Quantity';

export function Article(props) {
  const { article, inCart } = props;

  return (
    <View style={styles.article}>
      <View style={styles.articleTop}>
        <Text style={styles.articleDesc}>{article.description}</Text>
        <Text style={styles.articlePrice}>{article.price}</Text>
      </View>
      <View style={styles.articleBottom}>
        <Image source={article.picture} style={{ width: 200, height: 200 }} resizeMode="center" />
      </View>
      <Quantity quantity={inCart.quantity} onUpdate={() => console.log('onUpdate Function')} />
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#ccc091',
    padding: 15,
    margin: 25,
    borderColor: '#5ad68a',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
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

Article.defaultProps = {
  article: PropTypes.object,
  inCart: PropTypes.object,
};

export default Article;
