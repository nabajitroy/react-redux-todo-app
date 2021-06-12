const todoService = {
    list(dispatch, values) {
        dispatch({ type: 'LIST' })
    },
    add(dispatch, values) {

        return (new Promise((resolve, reject) => {
            try {
                dispatch({ type: 'ADD', plyload: values })
                resolve(values)
            } catch (err) {
                reject(err)
            }
        })
        ) // console.log("Add called")
    },

    delete(dispatch, id) {
        return (new Promise((resolve, reject) => {
            try {

                setTimeout(() => {
                    dispatch({ type: 'DELETE', plyload: id })
                    resolve('done')
                }, 20);
            } catch (err) {
                reject(err)
            }
        }))
    }

}
export default todoService