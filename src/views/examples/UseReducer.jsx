import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/config'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user ? (
                        <span className="text">{state.user.name}</span>
                    ) : (
                        <span className="text">Sem Usuario</span>
                    )
                }

                <span className='text'>{state.number}</span>

                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>
                        +2
                    </button>

                    
                    <button className="btn"
                        onClick={() => dispatch({ type: 'multiSeven' })}>
                        *7
                    </button>

                    
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divTwentyFive' })}>
                        /25
                    </button>

                    
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberN', num: 5 })}>
                        N
                    </button>

                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Luiz' })}>
                        Logar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
