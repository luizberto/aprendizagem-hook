import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)

    if(n < 0) return -1
    if(n===0) return 1
    
    return calcFatorial(n-1) * n
}

function calcParidade(num){
    const n = parseInt(num)

    if(n < 0){
        return "undefined"
    }else if(n % 2 === 0){
        return "par"
    }else{
        return "impar"
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [num, setNum] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    const [paridade, setParidade] = useState("")

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        setParidade(calcParidade(num))
    }, [num])
    
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title = "Exercicio 1"/>

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" 
                value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title = "Exercicio 2"/>

            <div className="center">
                <div>
                    <span className="text">Par ou Impar: </span>
                    <span className="text red">{paridade}</span>
                </div>

                <input type="number" className="input" 
                value={num} onChange = {e => setNum(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
