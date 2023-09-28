import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'
import MyCarousel from './components/MyCarousel'

function App() {
  
  const [profList, setProfList] = useState([]);

  const updateProfList = (newList) => {
    setProfList(newList);
  };

  return (
    <>
      <div className='main-container'>
        <h2>Create Your Profile!</h2>
        <MyForm profList={profList} updateProfList={updateProfList}/>
        <MyCarousel profList={profList}/>
     </div>
    </>
  )
}

export default App
