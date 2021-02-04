import { getPhotos } from '../../api/getPhotos'

export const fetchPhotoRequest = () => {
  return {
    type: 'FETCH_PHOTO_REQUEST'
  }
}

export const fetchPhotoSuccess = photos => {
  return {
    type: 'FETCH_PHOTO_SUCCESS',
    payload: photos
  }
}

export const fetchPhotoFail = () => {
  return {
    type: 'FETCH_PHOTO_FAILED'
  }
}

export const fetchDataPhoto = albumId => async dispatch => {
  try {
    dispatch(fetchPhotoRequest())
    const { data } = await getPhotos(albumId)
    dispatch(fetchPhotoSuccess(data))
  } catch (error) {
    dispatch(fetchPhotoFail())
  }
}
