export default store => {
  store.subscribe((mutation, state) => {
    console.log('plugin called')

    const isPromise = mutation.payload && mutation.payload.then

    if (!isPromise) {
      return
    }

    console.log('keep working')

    mutation.payload.then((response) => {
      store.commit(`${mutation.type}_SUCCEEDED`, response)
    }).catch((response) => {
      store.commit(`${mutation.type}_FAILED`, response)
    })
  })
}
