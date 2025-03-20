import './App.css'
import ChatApi from './components/Chat'
import InputTexto from './components/inputTexto'
import LocalTeste from './components/LocalStorageEx'

function App() {
  return(
  <div>
 <ChatApi />
 <LocalTeste/>
 <InputTexto/>
 </div>
  )
}

export default App
