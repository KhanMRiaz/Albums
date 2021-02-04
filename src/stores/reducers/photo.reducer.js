const initialState = {
  photos: [],
  isLoading: false
}

export const photoReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_PHOTO_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_PHOTO_SUCCESS':
      return {
        ...state,
        photos: payload,
        isLoading: false
      }
    case 'FETCH_ALBUM_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default photoReducer
