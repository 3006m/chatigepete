import './App.css'
import ChatApi from './components/Chat'
import InputChechecabox from './components/Sex'
import InputNum from './components/inputNumero'
import InputTexto from './components/inputTexto'
import LocalTeste from './components/LocalStorageEx'

function App() {
  return (
    <div>
      <ChatApi />
      <LocalTeste />
      <InputTexto />
      <InputNum />
      <InputChechecabox />
    </div>
  )
}

export default App
