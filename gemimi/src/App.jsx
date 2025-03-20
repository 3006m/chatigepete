import './App.css'
import ChatApi from './components/Chat'
import InputNum from './components/inputNumero'
import InputTexto from './components/inputTexto'
import LocalTeste from './components/LocalStorageEx'

function App() {
  return(
  <div>
 <ChatApi />
 <LocalTeste/>
 <InputTexto/>
 <InputNum/>
 </div>
  )
}

export default App
