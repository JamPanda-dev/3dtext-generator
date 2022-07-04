import opentype from 'opentype.js';
import {useState} from 'react'
//const [mysvg, setmysvg] = useState<any>()
const optimizationText = (text, width, height, fontsize_, base_) => {
//  var _svg = ''
    async function makeText(input, x, y, fontsize, _base64) {
      const font = await opentype.load(_base64);
      const path = font.getPath(input, 0, 150, 72).toPathData();
      return path
    }
   const len_ = (txt) => {
     if (txt !== undefined) {
       return txt.length
     }
     return 0
   }
   function get_v(value) {
     return value;
   }
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
