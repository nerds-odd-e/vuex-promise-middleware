export default store => {
    store.subscribe((mutation, state) => {
        if (mutation.payload && mutation.payload.then) {
            mutation.payload.then((response) => {
                store.commit(`${mutation.type}_SUCCEEDED`, response)
            }).catch((response) => {
                store.commit(`${mutation.type}_FAILED`, response)
            })
        }
    })
}
