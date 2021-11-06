import { createContext, useContext, useReducer, useEffect } from 'react';

import CalcReducer from '../reducers/CalcReducer';

const initialState = {
    calc: CalcReducer()
}

const MainReducer = (state, action) => ({
    
    calc: CalcReducer(state.calc, action)
});

export const StateContext = createContext();

const localState = JSON.parse( localStorage.getItem('ctx') );



export const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(MainReducer, localState || initialState)

    useEffect(()=>{
        localStorage.setItem('ctx', JSON.stringify(state));
    }, [state]);

    return(
    <StateContext.Provider value={[state, dispatch]}>
        {children}
    </StateContext.Provider>);}


export const useStateValue = () => useContext(StateContext);