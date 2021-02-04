import { getAlbums } from '../../api/getAlbums'

export const fetchAlbumRequest = () => {
  return {
    type: 'FETCH_ALBUM_REQUEST'
  }
}

export const fetchAlbumSuccess = albums => {
  return {
    type: 'FETCH_ALBUM_SUCCESS',
    payload: albums
  }
}

export const fetchAlbumFail = () => {
  return {
    type: 'FETCH_ALBUM_FAILED'
  }
}

export const fetchDataAlbum = userId => async dispatch => {
  try {
    dispatch(fetchAlbumRequest())
    const { data } = await getAlbums(userId)
    dispatch(fetchAlbumSuccess(data))
  } catch (error) {
    dispatch(fetchAlbumFail())
  }
}
