import React, { useState } from 'react';




import Header from './Header';


function counte() {
    const [count, setCount] = useState(1);// retornar uma array [valor,função q atualiza o valor]

    function addcount() {
        setCount(count + 1)
    };
    return (
        <div>
            <Header>
                semana quarentena Dia: {count}
            </Header>
            <button onClick={addcount}>ADD</button>
        </div>
    )
}

export default counte