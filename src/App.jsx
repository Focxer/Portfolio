import { Header, Main } from './containers'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="w-full px-4 xl:px-0 max-w-[1200px]">
        <Main />
      </div>
    </>
  )
}

export default App
