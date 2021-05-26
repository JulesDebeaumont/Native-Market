import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Article } from './Article';

export function ArticleList(props) {
  // eslint-disable-next-line react/prop-types
  const { articles, inCart } = props;
  const allArticles = Object.values(articles).map(v => <Article article={v} key={v.id} inCart={inCart[v.id] ?? 0} />);

  return <View style={styles.list}>{allArticles}</View>;
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    backgroundColor: '#e0d2bc',
  },
});

ArticleList.defaultProps = {
  articles: PropTypes.object,
};

export default ArticleList;
