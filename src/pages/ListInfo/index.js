import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, SafeAreaView,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
export default class App extends Component {
  state = {
    data: [
      { id: 0, full_name: 'Eduardo Tomacheski', idade: 18, rg: 9120108064, peso: '100 Kg', altura: '1.92m', obs: 'Alimentação regular'  },
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
      <SafeAreaView style={styles.listItem2}>
        <Text style={styles.title}>Pacientes</Text>
        <View style={{
          display:'flex',
          flexDirection: 'row',
        }}>
          <TextInput
          style={styles.input}
          label='user'
          placeholder='Pesquisa'
          />
          <AntDesign name="search1" style={styles.search} size={24} color="black" />
        </View>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        > 
        </FlatList>
      </SafeAreaView>
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
  listItem2:{
    margin: 20,
  },
  title: {
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize:40,
  },
  input: {
    // marginRight: 60,
    width: '80%',
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    color: '#3A3A45',
    fontSize: 18,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
  },
  search:{
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
  }
});
