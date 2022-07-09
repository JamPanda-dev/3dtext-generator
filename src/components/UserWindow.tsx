var global: any = global || window;
 var Buffer: any = Buffer || [];
 var process: any = process || {
   env: { DEBUG: undefined },
   version: []
 };
import { useWindowDimensions } from '../hook/getWindowDimensions'
import React, {useEffect, useState, useRef} from 'react'
//import Moveable from 'react-moveable';
import './UserWindow.css'
//import { JSDOM } from 'jsdom';
import svgson from 'svgson'
/* import warp program */
import Warp from 'warpjs';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
/* import end warp program */
import './comment.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faFill, faGripLines, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons'
//import {color_picker_components} from './react-colorful-gradient'
import { HexColorPicker } from 'react-colorful'
import {encodeSvg}  from './other/encodeSVG'
import styled from 'styled-components'
import { Intro_ } from './__INTRO'
import {Popup} from 'semantic-ui-react'
library.add(faDownload);
library.add(faFill);
library.add(faGripLines);
library.add(faRulerHorizontal);
type Props = {
  path: string;
  value__: any;
  isDisplay?: boolean;
}
export const UserWindow:React.FC<Props> = ({ path , value__, isDisplay}) => {
  /* gsap registerPlugin: Draggable */
  gsap.registerPlugin(Draggable);
  /* define with useState and useRef */
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
  const [strokeWidth, setStrokeWidth] = useState<any>(0)
  var controller = useRef<SVGPathElement>(null)
  var content = useRef<SVGSVGElement>(null)
  const downloadref = useRef<HTMLAnchorElement>(null)
  const [downloadURL, setDownloadURL] = useState<string>('')
  const [textdimensions, settextdimensions] = useState<any>({ controller_width: 0, controller_height: 0, content_width: 0, content_height: 0, controller_top: 0, controller_left: 0})
  const [mouseEvents, setMouseEvents] = useState<any>(false)
  const [style__, setstyle__] = useState<any>()
  /* end define with useRef and useState*/
  /*const [frame, setFrame] = useState({
    matrix: [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  })*/
  /*const [frame, setFrame] = useState({
    translate: [0,0],
        scale: [1,1],
  })*/
  /* define function */
 /* useEffect(() => {
     if (controller && content && controller.current) {
        settextdimensions({
          width: content.current?.getBoundingClientRect().width,
          height: content.current?.getBoundingClientRect().height,
        })  
        console.log(textdimensions)
     }
  }, [path, content, controller]) */
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
  const onClick__ = (e: any) => {
    setMouseEvents(true)
    setstyle__({
      left: e.clientX,
      top: e.clientY,
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

   /* define function end (no gsap)*/


   //const svgContainer = useRef<HTMLSpanElement>()
   //onst svgElement = useRef<any>()
   //const svgControll = useRef<any>()
   //const controlPath = useRef<any>()
   const [fill, setfill] = useState<any>()
   const [dang0, setdang] = useState<any>()
   const [htm, sethtm] = useState<any>()
   const [styles, setstyles] = useState<any>()
   const [myinner, setmyinner] = useState<any>('')
   const [myd, setmyd] = useState<any>('')
   const senc = useRef<any>(null)
   const getdang = () => {
     if (typeof dang0 !== 'undefined'){
       return dang0
     }
     return ''
   }
   const gethtm = () => {
     if (typeof htm !== 'undefined') {
       return htm
     }
     return ''
   }
   const getstyle = () => {
     if (typeof styles !== 'undefined') {
       return styles
     }
     return '100%'
   }
  useEffect(() => {
    if (typeof path !== 'undefined' && typeof value__ !== 'undefined' && value__ !== 0) {
      //RefActions();
    }
  }, [path])
  const getFill = () => {
    if (typeof fill !== 'undefined') {
      return fill
    }
    return ''
  }
 // useEffect(() => {
 //   if (typeof path !== 'undefined' && path !== '0') {
 //     controller = useRef<SVGPathElement>(null)
 //   }
 // },[path])
 useEffect(() => {
  console.log(textdimensions)
 }, [textdimensions])
  var controlPath: any = ''
  var width_: any = 0
  var height_: any = 0
  useEffect(() => {
    if (controller && controller.current && typeof path !== 'undefined' && path !== '0') {

      /*console.log(controller.current.getBoundingClientRect().width)
      console.log(controller.current.getBoundingClientRect().height);
      console.log(content.current?.getBoundingClientRect().width)
      console.log(content.current?.getBoundingClientRect().height)*/
      settextdimensions({
        controller_width: controller.current.getBoundingClientRect().width,
        controller_height: controller.current.getBoundingClientRect().height,
        controller_top: controller.current.getBoundingClientRect().top,
        controller_left: controller.current.getBoundingClientRect().left,
        content_width: content.current?.getBoundingClientRect().width,
        content_height: content.current?.getBoundingClientRect().height,
      })
      controlPath = controller;
      width_ = controller.current.getBoundingClientRect().width;
      height_ = controller.current.getBoundingClientRect().height
      const warp_ = new Warp(controller.current)
      RefActions(warp_, width_, height_);
    }
  },[path])
  const RefActions = (warp: any, width: any, height: any) => {
    // Need to interpolate first, so angles remain sharp
     warp.interpolate(4)

     // 
     // Envelope distort shape

     // Start with a rectangle, then distort it later
    const controlPoints = [
	  [0, 0],
  	[0 - 10, height],
  	[width + 10, height],
	  [width, 0],
    ]

// Funny things happen when control points are positioned perfectly on other points... buff it out
    const controlBuffer = 0.1
    for(let i = 0; i < controlPoints.length; i++)
    {
	  if(controlPoints[i][0] === 0) controlPoints[i][0] -= controlBuffer
   	if(controlPoints[i][1] === 0) controlPoints[i][1] -= controlBuffer
   	if(controlPoints[i][0] === width) controlPoints[i][0] += controlBuffer
  	if(controlPoints[i][1] === height) controlPoints[i][1] += controlBuffer
    }

    //
    // Compute weights from control points

    warp.transform(function(v0: any, V=controlPoints){	
	     const A = []
	     const W = []
	     const L = []
	
    	// Find angles
      	for(let i = 0; i < V.length; i++){
	     	const j = (i + 1) % V.length
		
	    	const vi = V[i]
    		const vj = V[j]
		
	    	const r0i = Math.sqrt((v0[0] - vi[0])**2 + (v0[1] - vi[1])**2)
	    	const r0j = Math.sqrt((v0[0] - vj[0])**2 + (v0[1] - vj[1])**2)
	    	const rij = Math.sqrt((vi[0] - vj[0])**2 + (vi[1] - vj[1])**2)

	    	const dn = 2 * r0i * r0j
	    	const r = (r0i**2 + r0j**2 - rij**2) / dn

	    	A[i] = isNaN(r) ? 0 : Math.acos(Math.max(-1, Math.min(r, 1)))
	    }
	
    	for(let j = 0; j < V.length; j++){
		   const i = (j > 0 ? j : V.length) - 1
		
		   const vi = V[i]
		   const vj = V[j]
		   const r = Math.sqrt((vj[0] - v0[0])**2 + (vj[1] - v0[1])**2)
		
	   	W[j] = (Math.tan(A[i] / 2) + Math.tan(A[j] / 2)) / r
    	}
	

	   const Ws = W.reduce((a, b) => a + b, 0)
    	for(let i = 0; i < V.length; i++){
		   L[i] = W[i] / Ws
    	}
	
     	return [...v0, ...L]
      })
      const magnitude = 0

       controlPoints[0][0] += 1 * magnitude
       controlPoints[0][1] += 1 * magnitude

      controlPoints[1][1] -= 1 * magnitude

      controlPoints[3][1] -= 1 * magnitude
      for(let cp of controlPoints) cp[1] *= 1.2

      function reposition([x, y, ...W]: any[], V=controlPoints){
	     let nx = 0
	     let ny = 0
	    for(let i = 0; i < V.length; i++){
	     	nx += W[i] * V[i][0]
	     	ny += W[i] * V[i][1]
	    }
	
     	return [nx, ny, ...W]
    }


    function drawControlShape(element=controlPath, V=controlPoints){
	    const path = [`M${V[0][0]} ${V[0][1]}`]

	   for(let i = 1; i < V.length; i++){
		   path.push(`L${V[i][0]} ${V[i][1]}`)
    	}
	
	    path.push('Z')
     	element.current.d = path.join('')
      }

      const origControlPoints = JSON.parse(JSON.stringify(controlPoints))
     const radius = 20
     let angle = 0

     function animate(){
	    for(let i = 0; i < controlPoints.length; i++)
	    {
		const off = (origControlPoints[i][0] * origControlPoints[i][1]) / 200
		controlPoints[i] = [
			origControlPoints[i][0] + radius * Math.cos(angle + off),
			origControlPoints[i][1] + radius * Math.sin(angle + off),
		]
	}
	
	  drawControlShape()
	  warp.transform(reposition)
	
	   angle += 0.05
 }

  animate()

  }
  const [getHeight, setHeight] = useState<any>(0)
  useEffect(() => {
    if (typeof textdimensions !== 'undefined') {
      setHeight(textdimensions.controller_height)
    }
    setHeight(0)
  },[textdimensions])
  const onClick2 = (e: any) => {
   // var s = new XMLSerializer().serializeToString(document.getElementById('zorin')?.outerHTML);
   // console.log(s)
    //console.log(`data:image/svg+xml;base64,${window.btoa(`${content.current?.outerHTML}`)}`)
    function copyTextToClipboard(text: string) {
      navigator.clipboard.writeText(text)
      .then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
    copyTextToClipboard(`data:image/svg+xml;base64,${window.btoa(`${content.current?.outerHTML}`)}`);
    setMouseEvents(true)
  }
  useEffect(() => {
    if (mouseEvents) {
      setTimeout(() => {
        setMouseEvents(false)
      }, 2000)
    }
  }, [mouseEvents])
  /*useEffect(() => {
     if (downloadURL !== '' && downloadref && downloadref.current) {
      location.href = downloadURL
     } else {
      console.log('undefined err')
     }
  }, [downloadURL])*/
  return (
    <span onClick={(e) => onClickP(e)}>
    {/*<Intro_ isDisplay={!isDisplay} /> */}
    <p hidden id="path">{path}</p>
    <p hidden id="lang">{window.navigator.language}</p>
    <a href={downloadURL} hidden ref={downloadref}></a>
     <span className='head'>
        <span className='btn_' onClick={(e) => onClick2(e)}>
            <FontAwesomeIcon icon={faDownload} className='fa__i_'/>{!mouseEvents ? ` COPY URL` : ` Copied!`}
        </span>
         
         
        <span className='icon_000' />
        <span className='controllholder'>
            <FontAwesomeIcon icon={faRulerHorizontal} className='n08m'/>
            <input className='input__field' pattern="^[0-9]+$"  title="please input number" type="number" min="0" onChange={(e) => setStrokeWidth(e.target.value)}></input>
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
        <svg xmlns='http://www.w3.org/2000/svg' style={{ width: '100%', height: getstyle()}} ref={content} id='zolin'>
          <path d={`${getPath()}`} fill={fillcolor} stroke={strokecolor} strokeWidth={strokeWidth} style={{transform: `translate(-10px, 40px) scale(0.95)`, transformOrigin: 'top center'}}/>
          <path d={`${getPath()}`} fill={fillcolor} stroke={strokecolor} strokeWidth={0} style={{transform: `translate(-10px, 40px) scale(0.95)`, transformOrigin: 'top center'}}/>
          <path d={`${getPath()}`} fill={fillcolor} stroke={strokecolor} strokeWidth={strokeWidth} />
          <path d={`${getPath()}`} ref={controller} fill={fillcolor} stroke={strokecolor} strokeWidth={0}/>
        </svg>
      {/*data:
        (window.innerWidth * 1.3 - len_(value_) * (window.innerWidth * 0.7/ len_(value_))) / 2
        ${((window.innerWidth * 1.3 - len_(value__) * (window.innerWidth * 0.7/ len_(value__))) / 2) + ((window.innerWidth * 0.7/ len_(value__)) * len_(value__) / 5)}px ${window.innerHeight * 1.3 / 2 - (window.innerWidth * 0.7/ len_(value__) / 2 * 0.7)}px
        */}
      </span>
     </span>
    </span>
  )
}
