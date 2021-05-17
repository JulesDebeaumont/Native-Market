import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export function Article(props) {
  // eslint-disable-next-line react/prop-types
  const { picture, price } = props;

  return (
    <View style={styles.article}>
      <Image source={picture} style={{ width: 70, height: 70 }} resizeMode="center" />
      <Text>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#303030',
    borderRadius: '5%',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

Article.defaultProps = {
  picture: PropTypes.string,
  price: PropTypes.number,
};

export default Article;
