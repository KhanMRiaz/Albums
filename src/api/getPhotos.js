export const getPhotos = async albumId => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    )
    let json = await response.json()
    return Promise.resolve({
      status: 'success',
      data: json
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = {
  getPhotos
}
