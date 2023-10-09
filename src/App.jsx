import { Header, Main } from './containers'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="w-full px-4 xl:px-0 xl:w-2/3">
        <Main />
      </div>
    </>
  )
}

export default App
