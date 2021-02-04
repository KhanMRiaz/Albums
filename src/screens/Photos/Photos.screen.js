import React from 'react'

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image
} from 'react-native'
import styles from './Photos.style'
import Icon from 'react-native-vector-icons/Ionicons'
import GridImageView from 'react-native-grid-image-viewer'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

import { connect, useDispatch } from 'react-redux'
import { fetchDataPhoto } from '../../stores/actions/photos.action'

const screenHeight = Dimensions.get('window').height
const Photos = ({ photo, route }) => {
  photo = photo.map(function (obj) {
    obj['image'] = obj['url'] // Assign new key "image" requied by component used
    delete obj['url'] // Delete old key
    return obj
  })
  const { albumId } = route.params
  const dispatch = useDispatch()
  console.log('photos: ', photo)
  function ListPhoto() {
    return <GridImageView data={photo} />
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
              onPress={() => dispatch(fetchDataPhoto(albumId))}>
              <Text style={[styles.text, { fontSize: 0.022 * screenHeight }]}>
                Click here to show Photos of Selected Albums:
              </Text>
            </TouchableOpacity>
            <ListPhoto />
          </View>
        </View>
        <View style={{ marginBottom: 0.1 * screenHeight }} />
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    photo: state.photoReducer.photos
  }
}

export default connect(mapStateToProps, null)(Photos)
