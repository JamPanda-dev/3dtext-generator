import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState} from 'react'
import './UserWindow.css'
export const UserWindow:React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>()  
  const [windowHeight, setWindowHeight] = useState<number>()
  const {width, height} = useWindowDimensions()
  return (
    <>
     <span className='head'></span>
    </>
  )
}