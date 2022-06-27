import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState} from 'react'
import './UserWindow.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faFill, faGripLines, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
//import {color_picker_components} from './react-colorful-gradient'
import { HexColorPicker } from 'react-colorful'
import styled from 'styled-components'
library.add(faDownload); 
library.add(faFill); 
library.add(faGripLines); 
library.add(faRulerHorizontal);

export const UserWindow:React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>()  
  const [windowHeight, setWindowHeight] = useState<number>()
  const [fillcolor, setfillcolor] = useState<string>('#aabbcc')
  const {width, height} = useWindowDimensions()
  return (
    <>
     <span className='head'>
        <span className='btn_'>
            <FontAwesomeIcon icon={faDownload} className='fa__i_'/> DOWNLOAD
        </span>
        <span className='controllholder'>
            <FontAwesomeIcon icon={faRulerHorizontal} className='n08m'/>
            <textarea className='input__field'></textarea>
            <FontAwesomeIcon icon={faGripLines} className='n09m' />
            <span className='bg_stroke'></span>
            <FontAwesomeIcon icon={faFill} className='n10m' />
            <span className='bg_fill'></span>
        </span>
     </span>
     <span className='hexpicker'>
       <HexColorPicker color={fillcolor} onChange={setfillcolor}/>
     </span>
    </>
  )
}