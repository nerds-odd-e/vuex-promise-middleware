export default (options = { snakecase: true }) => store => {
  store.subscribe((mutation, state) => {
    console.log('plugin called')

    const isPromise = mutation.payload && mutation.payload.then

    if (!isPromise) {
      return
    }

    console.log('keep working')

    const succededString = options.snakecase ? '_SUCCEEDED' : 'Succeeded'
    const failedString = options.snakecase ? '_FAILED' : 'Failed'

    const succeded = `${mutation.type}${succededString}`
    const failed = `${mutation.type}${failedString}`

    mutation.payload.then((response) => {
      store.commit(succeded, response)
    }).catch((response) => {
      store.commit(failed, response)
    })
  })
}
