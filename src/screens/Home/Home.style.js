import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView2: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { color: '#808080', fontWeight: 'bold' },
  usersRowContainer: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 1,
    marginTop: 10
  }
})
