import { useState , useEffect} from 'react'
import logo from './logo.svg'
import { NavigateWindow } from './components/NavigateWindow'
import { UserWindow } from './components/UserWindow'
import './hook/styles/twemoji.css'
import optimizationText from './components/other/opentype_'
import Twemoji from 'react-twemoji';
function App() {
  const [isDis, setisDis] = useState(true);
  const [isDarkmode, setDarkmode] = useState(false);
  const [inputdata, setinputdata] = useState<any>()
  const [myPath, setPath] =useState<any>()
  //const [inputData, setData] = useState<any>();
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      setDarkmode(!isDarkmode)
    }
  },[])
  const disChange = (value: any, res: String | ArrayBuffer | null) => {
    setisDis(!isDis)
    setinputdata({
    value: value.replace(/\r?\n/g, ''),
    res: res
    })

  }
  useEffect(() => {
  if(typeof inputdata !== 'undefined') {
     optimizationText(inputdata.value, 600, 400, 32, inputdata.res).then((value) => {
       console.log(value);
       setPath(value);
     })
  }
  }, [inputdata])
  useEffect(() => {
    console.log(myPath)
  },[myPath])
  return (
    <Twemoji options={{ className: 'twemoji'}}>
      <NavigateWindow isDisplay={isDis} onCancel={(value: any, res: any) => disChange(value, res)} darkmode={isDarkmode}></NavigateWindow>
      <UserWindow />
      { typeof inputdata !== 'undefined' ? (
      <></>
    ):(
      <></>
    )}
    </Twemoji>
  )
}

export default App
