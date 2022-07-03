import React, {useState, useEffect, useRef} from 'react'
import {CSSTransition} from 'react-transition-group'
import styled from 'styled-components'
import {math}from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCoins,faUpload } from '@fortawesome/free-solid-svg-icons'
import { getFontBase64 } from '../other/fetch_handling'
import { UserWindow } from './UserWindow'
import './NavigateWindow.css'
library.add(faCoins as IconDefinition);
library.add(faUpload as IconDefinition);
type Props = {
    isDisplay?: boolean;
    darkmode?: boolean;
}
type ChildrenDispatchProps = {
    onCancel?: any; 
}
export const NavigateWindow: React.FC<ChildrenDispatchProps & Props> = ({isDisplay, onCancel, darkmode}) => {
    const [displayState, setDisplayState] = useState(isDisplay);
    const [result, setresult] = useState<String | ArrayBuffer | null>('')
    const [input_data, set_input_data] = useState<String>('')
    //const [level, setLevel] = useState(1);
    const [isWidth, setWidth] = useState(false)
    const nodeRef = React.useRef(null)
    const noseRef = React.useRef<any>(null)
    const dogRef = React.useRef<any>()
    const Elref = React.useRef<HTMLInputElement>(null)
    const IPRef = React.useRef<HTMLTextAreaElement>(null)
    const clickbtn = React.useRef<HTMLButtonElement>(null)

   // noseRef.current[0] = React.createRef();
    //noseRef.current[0] = React.createRef();
    useEffect(() => {
      setDisplayState(isDisplay);
    }, [isDisplay])
    /*
    useEffect(() => {
      if(noseRef && noseRef.current) {
        console.log('running...');
        const hem_ = noseRef.current?.getBoundingClientRect();
        if (hem_.width < hem_.height) {
          setWidth(true)
        }
        dogRef.current.style.width = isWidth ? hem_.width / 1.5 : hem_.height / 1.5
        dogRef.current.style.height = isWidth ? hem_.width /1.5 : hem_.height / 1.5
        dogRef.current.style.color = 'white'
      }
    }, [])
    */
    //const UpState_ = () => {
    //  setLevel(2)
   // }
    const selectedfile = (e: any) => {
      var input_ = e.target.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function(e) {
        setresult(reader.result)
      }, true)
      reader.readAsDataURL(input_)
    }
    const loadfile = () => {
      getFontBase64('../src/font/American Captain.ttf').then(function(data) {
        setresult(data)
      });
    }
    return(<>
            <CSSTransition nodeRef={nodeRef} in={displayState} timeout={1500}  classNames="fade" unmountOnExit>
              <span ref={nodeRef}>
                <span className='fadem'>
                 { result == '' ? ( 
                   <>
                    <span className="box">
                      <span className='nose' onClick={() => Elref.current?.click()} ><span className='imgview2'><FontAwesomeIcon className='icon__fa_upload_'icon={faUpload as IconDefinition} /></span><span className='bnp_up'><span className='input__1'><b>INPORT FILE</b><span className='input_on'>Load font file(support .woff .otf .ttf file)😄</span></span></span></span>
                      <span className='nose' onClick={() => loadfile()}><span className='imgview' ref={noseRef}><svg preserveAspectRatio="none" ref={dogRef} className="ftm_o" viewBox="0 0 52 70" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0" fill="currentColor"><path d="M 0 0 L 0 12.9 L 18.8 12.9 L 18.8 70 L 33.1 70 L 33.1 12.9 L 52 12.9 L 52 0 L 0 0 Z" vectorEffect="non-scaling-stroke"/></g></svg></span><span className='bnp_up_t'><b>AMERICAN CAPTAIN</b><span className='input_on'>Load American captain Font✨</span><FontAwesomeIcon className='icon__fa_'icon={faCoins as IconDefinition} /><p className='icon__fa_text'>NOT FOR COMMERICIAL USE😰</p></span></span>
                      <input type="file" ref={Elref} hidden onChange={selectedfile}/>
                    </span>
                   </>

                 ):(
                  <>
                   <span className='bk-image'><img className='emoji_view' src='https://twemoji.maxcdn.com/v/latest/svg/270f.svg'></img></span>
                   <span className='input_query'>INPUT A TEXT</span>
                   <textarea cols={1} onChange={(e) => set_input_data(e.target.value)} maxLength={30}></textarea>
                   <button className='btn' onClick={() => onCancel(input_data, result)}>Start</button>
                  </> 
                 )}
                </span> 
                <span className='fadem_bg'></span>
              </span>
            </CSSTransition>
            </>
    )
}
