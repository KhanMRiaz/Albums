const initialState = {
  albums: [],
  isLoading: false
}

export const albumReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_ALBUM_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_ALBUM_SUCCESS':
      return {
        ...state,
        albums: payload,
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

export default albumReducer
