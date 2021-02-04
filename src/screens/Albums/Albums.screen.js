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
import styles from './Albums.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataAlbum } from '../../stores/actions/albums.action'

const screenHeight = Dimensions.get('window').height
const Albums = ({ navigation, album, route }) => {
  const { userId } = route.params
  const dispatch = useDispatch()
  console.log('albums: ', album)
  function ListAlbum() {
    return (
      <FlatList
        style={{ flex: 1, marginBottom: 0.1 * screenHeight }}
        data={album}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Photos', { albumId: item.id })}
            style={styles.albumsRowContainer}>
            <View style={{ paddingHorizontal: '3%' }}>
              <Text style={[styles.text, { fontSize: 0.018 * screenHeight }]}>
                {item.id}. {item.title}
              </Text>
            </View>
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
            <Icon name={'ios-albums'} size={100} color={'purple'} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataAlbum(userId))}>
              <Text style={[styles.text, { fontSize: 0.022 * screenHeight }]}>
                Click here to show Album Titles:
              </Text>
            </TouchableOpacity>
            <ListAlbum />
          </View>
        </View>
        <View style={{ marginBottom: 0.1 * screenHeight }} />
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    album: state.albumReducer.albums
  }
}

export default connect(mapStateToProps, null)(Albums)
