export const getAlbums = async userId => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
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
  getAlbums
}
