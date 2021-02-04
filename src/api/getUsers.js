export const getUsers = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
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
  getUsers
}
