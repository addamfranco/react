import React from 'react'
import ItemListContainer from './ItemListContainer';


function App(){
  return (
    <div className='App'>
      <h1>Mi pagina</h1>
      <ItemListContainer/>
    </div>
  );
}
// const App = () => {
//     const [contador, setContador] = useState(0)
//     console.log(contador)
//   return (
//     <>
//     <h1>{contador}</h1>
//     <button onClick={()=>setContador(contador + 1)}>+</button>
//     <div>App</div>
//     </>
//   )
// }

export default App;


