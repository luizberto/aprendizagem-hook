export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }

        case 'multiSeven':
            return {...state, number: state.number * 7}

        case 'divTwentyFive':
            return {...state, number: parseInt(state.number / 25)}
            
        case 'numberN':
            return {...state, number: action.num}    
            
        case 'login':
            return { ...state, user: { name: action.payload } }

        default:
            return state
    }
}