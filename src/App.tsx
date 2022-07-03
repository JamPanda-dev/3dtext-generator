import { useState , useEffect} from 'react'
import logo from './logo.svg'
import { NavigateWindow } from './components/NavigateWindow'
import { UserWindow } from './components/UserWindow'
import './hook/styles/twemoji.css'
import Twemoji from 'react-twemoji';
function App() {
  const [isDis, setisDis] = useState(true);
  const [isDarkmode, setDarkmode] = useState(false);
  //const [inputData, setData] = useState<any>();
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      setDarkmode(!isDarkmode)
    }
  },[])
  const disChange = (value: any, res: String | ArrayBuffer | null) => {
    setisDis(!isDis)
    console.log(value.replace(/\r?\n/g, ''));
    console.log(res);
  }
  return (
    <Twemoji options={{ className: 'twemoji'}}>
      <NavigateWindow isDisplay={isDis} onCancel={(value: any, res: any) => disChange(value, res)} darkmode={isDarkmode}></NavigateWindow>
      <UserWindow />
    </Twemoji>
  )
}

export default App
