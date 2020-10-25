import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class App extends Component {
  state = {
    data: [
      { id: 0, full_name: 'Eduardo Tomacheski', idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular'  },
      { id: 1, full_name: 'Juliano Teixeira', idade: 18, idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular'  },
      { id: 2, full_name: 'Gabriel Oliveira', idade: 18, idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular'  },
      { id: 3, full_name: 'Matheus Silva', idade: 18, idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular'  },
      { id: 4, full_name: 'Jonas Stein', idade: 18, idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular'  },
      { id: 5, full_name: 'Carlos Alberto' , idade: 18, idade: 18, rg: 1111111111, peso: '100 Kg', altura: '1.20m', obs: 'alimentação regular' },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>Nome: {item.full_name}</Text>
      <Text>Idade: {item.idade}</Text>
      <Text>RG: {item.rg}</Text>
      <Text>Peso: {item.peso}</Text>
      <Text>Altura: {item.altura}</Text>
      <Text>OBS: {item.obs}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      > 
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});
