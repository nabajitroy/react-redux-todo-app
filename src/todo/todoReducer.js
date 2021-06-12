const initialState = {
    list: [],
    loading: true
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'LIST':
            console.log("Hello List reducer")
            return { ...state }

        case 'ADD':
            let data = { id: state.list.length, todo: action.plyload.todo };
            let newList = [...state.list, data]
            console.log(newList)
            return { ...state, list: [...state.list, data] }
        case 'DELETE':
            let delList = [...state.list];
            let index = delList.findIndex(item => item.id === action.plyload)
            delList.splice(index, 1)
            return { ...state, list: delList }


        default:
            return { ...state }
    }

}


export default todoReducer