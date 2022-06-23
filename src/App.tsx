import { useState } from 'react'
import logo from './logo.svg'
import { NavigateWindow } from './components/NavigateWindow'
import './hook/styles/twemoji.css'
import Twemoji from 'react-twemoji';
function App() {
  const [isDis, setisDis] = useState(true);
  const [isDarkmode, setDarkmode] = useState(false);
  if(window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
    setDarkmode(!isDarkmode)
  }
  const disChange = () => {
    setisDis(!isDis)
  }
  return (
    <Twemoji options={{ className: 'twemoji'}}>
      <NavigateWindow isDisplay={isDis} onCancel={() => disChange()} darkmode={isDarkmode}></NavigateWindow>
    </Twemoji>
  )
}

export default App
