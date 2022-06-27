import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState} from 'react'
import './UserWindow.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
library.add(faDownload)
export const UserWindow:React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>()  
  const [windowHeight, setWindowHeight] = useState<number>()
  const {width, height} = useWindowDimensions()
  return (
    <>
     <span className='head'>
        <span className='btn_'>
            <FontAwesomeIcon icon={faDownload} className='fa__i_'/> DOWNLOAD
        </span>
        <span className='controllholder'>
            
        </span>
     </span>
    </>
  )
}