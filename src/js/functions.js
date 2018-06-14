export function urlEncodeData(data) {
  return Object.keys(data)
    .map(key => {
      return [key, data[key]].map(encodeURIComponent).join("=")
    })
    .join("&")
}

export function getPromiseData(promises) {
  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(res => {
        return res.map(type => {
          return type.status === 200 ? type.json() : reject(type.statusText)
        })
      })
      .catch(reason => console.log(reason))
      .then(res => {
        return Promise.all(res).then(resolve)
      })
      .catch(reject)
  })
}
