import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from './components/Title';
import { ArticleView } from './components/ArticleView';
import { MyContext } from './context/store';
import reducer, { initialState } from './reducer/index';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <View style={styles.bar}>
          <StatusBar style="light" />
          <Title title="API-Panier" />
        </View>
        <ArticleView />
      </View>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bar: {
    backgroundColor: '#707070',
  },
});
