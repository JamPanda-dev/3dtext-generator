import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState} from 'react'
import Moveable from 'react-moveable';
import './UserWindow.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faFill, faGripLines, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
//import {color_picker_components} from './react-colorful-gradient'
import { HexColorPicker } from 'react-colorful'
import encodeSvg  from './other/encodeSVG'
import styled from 'styled-components'
library.add(faDownload);
library.add(faFill);
library.add(faGripLines);
library.add(faRulerHorizontal);
type Props = {
  path: string;
}
export const UserWindow:React.FC<Props> = ({ path }) => {
  const [windowWidth, setWindowWidth] = useState<number>()
  const [windowHeight, setWindowHeight] = useState<number>()
  const [strokecolor, setstrokecolor] = useState<string>('#aabbcc')
  const [fillcolor,setfillcolor] = useState<string>('#aabbcc')
  const {width, height} = useWindowDimensions()
  const [Picker, SetPicker] = useState<any>()
  const [isShow, setShow] = useState<boolean>(false)
  const [kkstyle, upkkstyle] = useState<any>()
  const [nnstyle, upnnstyle] = useState<any>()
  const [aastyle,setaastyle] = useState<any>({width: width * 1.3, height: height * 1.3, display: 'block'})
  const [target, setTarget] = useState<any>();
  const [windowDetails, setWindowDetails] = useState<any>()
  const [frame, setFrame] = useState({
    matrix: [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]
  })
  const onresizefunction = () => {
      setWindowDetails({
        width: window.innerWidth,
        height: window.innerHeight,
      })
  }
  useEffect(() => {
      window.addEventListener('resize', onresizefunction)
      return () => window.removeEventListener('resize', onresizefunction)
  }, [window.innerWidth, window.innerHeight])
  const onClick = (e: any) => {
    setstyle_0({
      position: 'fixed',
      left: e.clientX,
      top: '21%'
    })
  }
  useEffect(() => {
    upkkstyle({
      backgroundColor: strokecolor
    })
  },[strokecolor])
  const onClickP = (e: any) => {
    if (e.target.className !== 'bg_stroke') {
      setstyle_0('')
    }
    if (e.target.className !== 'bg_fill') {
      setstyle_1('')
    }
    setShow(!isShow)
  }
  const onClickO = (e: any) => {
    setstyle_1({
      position: 'fixed',
      left: e.clientX,
      top: '21%'
    })
  }
  useEffect(() => {
    upnnstyle({
      backgroundColor: fillcolor
    })
  },[fillcolor])
  const [style_0, setstyle_0] = useState<any>('')
  const [style_1, setstyle_1] = useState<any>('')
  return (
    <span onClick={(e) => onClickP(e)}>
    <p hidden id="path">{path}</p>
    <p hidden id="lang">{window.navigator.language}</p>
     <span className='head'>
        <span className='btn_'>
            <FontAwesomeIcon icon={faDownload} className='fa__i_'/> DOWNLOAD
        </span>
        <span className='icon_000' />
        <span className='controllholder'>
            <FontAwesomeIcon icon={faRulerHorizontal} className='n08m'/>
            <input className='input__field' pattern="^[0-9]+$"  title="please input number" type="number" min="0"></input>
            <FontAwesomeIcon icon={faGripLines} className='n09m' />
            <span className='bg_stroke' onClick={(e) => onClick(e)} style={kkstyle}></span>
            <FontAwesomeIcon icon={faFill} className='n10m'/>
            <span className='bg_fill' style={nnstyle} onClick={(e) => onClickO(e)}></span>
        </span>
     </span>


     { style_0 !== '' ? (
       <span style={style_0} className='hext_cont'>
         <HexColorPicker color={strokecolor} onChange={setstrokecolor}/>
       </span>
     ):(
      <></>
     )
     }
     { style_1 !== '' ? (
       <span style={style_1} className='hext_cont'>
         <HexColorPicker color={fillcolor} onChange={setfillcolor}/>
       </span>
     ):(
      <></>
     )
     }
     <span className='_body'>
      <span className='_scroll' style={aastyle}>

      </span>
     </span>
    </span>
  )
}
