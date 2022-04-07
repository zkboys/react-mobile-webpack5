import {createContext, useCallback, useReducer} from 'react';
import {IS_SUB} from 'src/config';
import {isLoginPage} from 'src/commons';

const initialState = {
    // 是否显示头部，左侧等框架内容
    layout: isLoginPage() ? false : !IS_SUB,
};

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'layout':
            return { layout: payload };
        default:
            throw new Error(`no such reducer type : ${type}`);
    }
}

export const AppContext = createContext(null);

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setLayout = useCallback((layout) => {
        if (state.layout === layout) return;
        dispatch({ type: 'layout', payload: layout });
    }, [state.layout]);
    return (<AppContext.Provider value={{ state, setLayout }}>
        {props.children}
    </AppContext.Provider>);
};
