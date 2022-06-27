/*


* this is not working



*
*/












import React, {useState, useEffect, ReactNode} from 'react'
import { HexColorPicker } from 'react-colorful'
import "./styles/styles.css"
type props = {
    children?: ReactNode
}
export const color_picker_components: React.FC<props> = () => {
  const [colors, setcolors] = useState(["#FFCC70", "#C850C0"])
  const [Index, setIndex] = useState(0)
  const colorString = colors.join(", ")
  const backgroundImage = `linear-gradient(to right, ${colorString})`;
  const handleChange = (color: any) => {
    const colorsCopy = colors.slice();
    colorsCopy[Index] = color;
    setcolors(colorsCopy);
  };
  const GetData: React.FC<props> = () => {
    const dt_ = colors.map((color, i) => {
        <div
         key={i}
         className={`color color--${i} ${i == Index ? "color--active" : ""}`}
         style={{ backgroundColor: color}}
         onClick={() => setIndex(i)}>
        </div> 
    })
    return (
        <>
        {dt_}
        </>
    )
  }
  return (
    <div className="builder">
        <div className='control'>
            <div className='preview'>
               <GetData/>
            </div>
            <HexColorPicker color={colors[Index]} onChange={handleChange} />
            <div className='output'>{backgroundImage}</div>
        </div>
    </div>
  )
}