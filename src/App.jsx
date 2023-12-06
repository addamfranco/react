import React from 'react'

const App = () => {
    const [contador, setContador] = useState(0)
    console.log(contador)
  return (
    <>
    <h1>{contador}</h1>
    <button onClick={()=>setContador(contador + 1)}>+</button>
    <div>App</div>
    </>
  )
}

export default App

import React from 'react'

