import React, {useState, useEffect} from 'react'
import twemoji from 'twemoji'
import './styles/twemoji.css'
type Props = {
  children?: any;
}
export const Twemoji: React.FC<Props> = ({children}) => {
  var htmltext: any = children
  useEffect(() => {
    htmltext = twemoji.parse(children)
  }, [children])
  return (
    <span dangerouslySetInnerHTML={ {__html: htmltext} } />
  )
}