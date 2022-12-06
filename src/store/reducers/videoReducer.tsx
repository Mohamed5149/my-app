const initialState = {
    videos: [

    ]
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD':            
            return action.videos
        default:
            return state;
    }
}

export default reducer;