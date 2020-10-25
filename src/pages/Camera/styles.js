import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#f0f0f5',
    paddingTop: Constants.statusBarHeight + 20

  },

  header: {
    marginTop: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },

  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 40,
    marginBottom: 16,
    marginTop: 60,
    color: '#13131a',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#737380',
    textAlign: 'center'
  },

  input: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
    color: '#3A3A45',
    fontSize: 26
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#3A3A45',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
    color: '#fff',
    fontSize: 26
  }

})
