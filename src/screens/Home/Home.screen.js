import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'

const screenHeight = Dimensions.get('window').height
const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()
  console.log('users: ', user)
  function ListUser() {
    return (
      <FlatList
        style={{ flex: 1, marginBottom: 0.1 * screenHeight }}
        data={user}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Albums', { userId: item.id })}
            style={styles.usersRowContainer}>
            <Text style={[styles.text, { fontSize: 0.02 * screenHeight }]}>
              {item.name}
            </Text>
            <Text style={[styles.text, { fontSize: 0.018 * screenHeight }]}>
              {item.phone}
            </Text>
            <Text style={[styles.text, { fontSize: 0.014 * screenHeight }]}>
              {item.address.suite}, {item.address.street}, {item.address.city}
            </Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '20%'
            }}>
            <Icon name={'ios-home'} size={100} color={'purple'} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}>
              <Text style={[styles.text, { fontSize: 0.022 * screenHeight }]}>
                Click here to show Users data:
              </Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
        <View style={{ marginBottom: 0.1 * screenHeight }} />
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
