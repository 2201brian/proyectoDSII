import {useState} from 'react';

const initialState={
    cart:[],
}

const useInitialState = () => {
    const [state, setState] = useState(useInitialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    return {
        state, 
        addToCart
    }
}

export default useInitialState;