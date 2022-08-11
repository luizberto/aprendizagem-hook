import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [contador, setContador] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 1" />
            <div className='center'>
                <span className='text'>{contador}</span>

                <div>
                    <button className="btn" onClick={() => setContador(contador + 1)}>
                        +1
                    </button>

                    <button className="btn" onClick={() => setContador(contador - 1)}>
                        -1
                    </button>

                    <button className="btn" onClick={() => setContador(current => current + 1000)}>
                        1000
                    </button>
                </div>

            </div>

            <SectionTitle title="exercicio 2" />

            <input type="text" className="input" 
            value={name} onChange={e => setName(e.target.value)}/>

        </div>
    )
}

export default UseState
