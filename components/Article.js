/* eslint-disable react/prop-types */
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Quantity } from './Quantity';
import useQuantity from '../hooks/useQuantity';

export function Article(props) {
  const { article, inCart } = props;
  const { changeQuantity } = useQuantity();

  return (
    <View style={styles.article}>
      <View style={styles.articleTop}>
        <Text style={styles.articleDesc}>{article.description}</Text>
        <Text style={styles.articlePrice}>{article.prix}€</Text>
      </View>
      <View style={styles.articleBottom}>
        <Image
          source={{ uri: `http://10.31.4.155:7000/${article.picture}` }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Quantity
        onUpdate={value => changeQuantity(value, article.id, article.prix)}
        quantity={Number.isInteger(inCart.quantity) ? inCart.quantity : 0}
      />
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
    alignContent: 'center',
  },

  articleTop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  articleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  articleDesc: {
    color: '#000000',
    paddingTop: 8,
    fontSize: 30,
    textAlign: 'center',
  },

  articlePrice: {
    color: '#000000',
    backgroundColor: '#30B080',
    fontSize: 40,
    borderColor: '#5ad68a',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 2,
    padding: 5,
  },
});

Article.defaultProps = {
  article: PropTypes.object,
  inCart: PropTypes.object,
};

export default Article;
