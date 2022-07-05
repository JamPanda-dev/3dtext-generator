import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState, useRef} from 'react'
import Moveable from 'react-moveable';
import './UserWindow.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faFill, faGripLines, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
//import {color_picker_components} from './react-colorful-gradient'
import { HexColorPicker } from 'react-colorful'
import {encodeSvg}  from './other/encodeSVG'
import styled from 'styled-components'
library.add(faDownload);
library.add(faFill);
library.add(faGripLines);
library.add(faRulerHorizontal);
type Props = {
  path: string;
  value: any;
}
export const UserWindow:React.FC<Props> = ({ path , value__}) => {
  const [windowWidth, setWindowWidth] = useState<number>()
  const [windowHeight, setWindowHeight] = useState<number>()
  const [strokecolor, setstrokecolor] = useState<string>('#aabbcc')
  const [fillcolor,setfillcolor] = useState<string>('#aabbcc')
  const [windowSize, setWindowSize] = useState(useWindowDimensions());
  const targetref = useRef<any>(null)
  const [Picker, SetPicker] = useState<any>()
  const [isShow, setShow] = useState<boolean>(false)
  const [kkstyle, upkkstyle] = useState<any>()
  const [nnstyle, upnnstyle] = useState<any>()
  const [aastyle,setaastyle] = useState<any>({width: windowSize.width * 1.3, height: windowSize.height * 1.3, display: 'block'})
  const [target, setTarget] = useState<any>();
  const [windowDetails, setWindowDetails] = useState<any>()
  const [frame, setFrame] = useState({
    matrix: [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  })
  /*const [frame, setFrame] = useState({
    translate: [0,0],
        scale: [1,1],
  })*/
  const onresizefunction = () => {
      setWindowDetails({
        width: window.innerWidth,
        height: window.innerHeight,
      })
  }
  const getPath = () => {
    if (typeof path == "undefined") {
      return ''
    }
    return path
  }
  useEffect(() => {
      window.addEventListener('resize', onresizefunction)
      return () => window.removeEventListener('resize', onresizefunction)
  }, [window.innerWidth, window.innerHeight])
  const len_ = (txt: any): txt is string => {
    if (txt !== undefined) {
      return txt.length
    }
    //@ts-ignore
    return 0
  }
// ちなみにuseEffectのアクションはwindow.innerWidthとwindow.innerHeightをもとにしているから、開発者ツールを閉じたり
// したら適応されないので注意
  var urlHash = location.hash;
  useEffect(() => {
    setWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
  })
    setaastyle({
      width: windowSize.width * 1.3,
      height: windowSize.height * 1.3,
      display: 'block'
    })
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
  const gettargetrefdetails = () => {
    return targetref?.current?.getBoundingClientRect();
  }
  const [style_0, setstyle_0] = useState<any>('')
  const [style_1, setstyle_1] = useState<any>('')
  React.useEffect(() => {
        setTarget(document.querySelector(".target")!);
    }, []);
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${windowSize.width * 1.3} ${windowSize.height * 1.3}`} style={{ width: '100%', height: '100%'}}>
          <path d={getPath()} className={'target'} ref={targetref}/>
        </svg>
        {typeof path !== 'undefined' && urlHash && urlHash == '#beta'? (

         <Moveable
            target={target}
            warpable={true}
            renderDirections={["nw","n","ne","w","e","sw","s","se"]}
            edge={false}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onWarpStart={e => {
                e.set(frame.matrix);
            }}
            onWarp={e => {
                frame.matrix = e.matrix
                e.target.style.transform = `matrix3d(${e.matrix.join(",")})`;
                //@ts-ignore
                e.target.style.transformOrigin = `${((window.innerWidth * 1.3 - len_(value__) * (window.innerWidth * 0.7/ len_(value__))) / 2) + ((window.innerWidth * 0.7/ len_(value__)) * len_(value__) / 5) * 1.2}px ${window.innerHeight * 1.3 / 2 - (window.innerWidth * 0.7/ len_(value__) / 2) * 0.6}px`
            }}
        />
      ):(
        <></>
      )
      }
      { /*typeof path !== 'undefined' ? (
        <Moveable
            target={target}
            scalable={true}
            keepRatio={false}
            throttleScale={0}
            renderDirections={["nw","n","ne","w","e","sw","s","se"]}
            edge={false}
            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            onScaleStart={e => {
                e.set(frame.scale);
                e.dragStart && e.dragStart.set(frame.translate);
            }}
            onScale={e => {
                const beforeTranslate = e.drag.beforeTranslate;

                frame.translate = beforeTranslate;
                frame.scale = e.scale;
                e.target.style.transform
                    = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
                    + ` scale(${e.scale[0]}, ${e.scale[1]})`;
            }}
        />
      ):(
        <></>
      )*/}
      {/*data:
        (window.innerWidth * 1.3 - len_(value_) * (window.innerWidth * 0.7/ len_(value_))) / 2
        ${((window.innerWidth * 1.3 - len_(value__) * (window.innerWidth * 0.7/ len_(value__))) / 2) + ((window.innerWidth * 0.7/ len_(value__)) * len_(value__) / 5)}px ${window.innerHeight * 1.3 / 2 - (window.innerWidth * 0.7/ len_(value__) / 2 * 0.7)}px
        */}
      </span>
     </span>
    </span>
  )
}
