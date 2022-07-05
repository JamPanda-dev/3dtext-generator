import { useState , useEffect} from 'react'
import logo from './logo.svg'
import { NavigateWindow } from './components/NavigateWindow'
import { UserWindow } from './components/UserWindow'
import './hook/styles/twemoji.css'
import optimizationText from './components/other/opentype_'
import Twemoji from 'react-twemoji';
import {removeemojis} from './components/other/remove_emoji'
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
    value: removeemojis(value.replace(/\r?\n/g, '')),
    res: res
    })
  }
  useEffect(() => {
   if(typeof inputdata !== 'undefined') {
     optimizationText(inputdata.value, window.innerWidth * 1.3, window.innerHeight * 1.3, window.innerWidth * 0.7/ inputdata.value.length, inputdata.res).then((value) => {
       console.log(value);
       setPath(value);
     })
   }
 }, [inputdata, window.innnerWidth, window.innerHeight])
useEffect(() => {
  if (typeof inputdata !== 'undefined') {
  console.log(inputdata.value)
}
}, [inputdata])
  useEffect(() => {
    console.log(myPath)
  },[myPath])
  const val_func = () => {
    if (typeof inputdata == 'undefined') {
      return 0
    }
    return inputdata.value
  }
  return (
    <Twemoji options={{ className: 'twemoji'}}>
      <NavigateWindow isDisplay={isDis} onCancel={(value: any, res: any) => disChange(value, res)} darkmode={isDarkmode}></NavigateWindow>
      <UserWindow path={myPath} value__ = {val_func()}/>
    </Twemoji>
  )
}

export default App
