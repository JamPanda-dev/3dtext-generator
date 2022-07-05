import opentype from 'opentype.js';
import {useState} from 'react'
//const [mysvg, setmysvg] = useState<any>()
const optimizationText = (text: any, width: any, height: any, fontsize_: any, base_: any) => {
//  var _svg = ''
    async function makeText(input: any, x: any, y: any, fontsize: any, _base64: any) {
      const font = await opentype.load(_base64);
      // @ts-ignore
      const path = font.getPath(input, x, y, fontsize).toPathData();
      return path
    }
   const len_ = (txt: any): txt is string => {
     if (txt !== undefined) {
       return txt.length
     }
     //@ts-ignore
     return 0
   }
   function get_v(value: any) {
     return value;
   }
   //@ts-ignore
   const svg_path = makeText(text, (width -  len_(text) * fontsize_) / 2, height / 2, fontsize_, base_)
   //console.log(dt)
  // console.log(svg_path)
   //const v_ = svg_path.then((value) => {
  //   console.log(value)
  //   return value;
  // })
  // console.log(v_)
  console.log(svg_path)
   return svg_path;
}

export default optimizationText
