import React, {useState} from 'react'
import { Steps } from 'intro.js-react'
export function Intro_({isDisplay}: any) {
  const [introsettings, setintrosettings] = useState({
        stepsEnabled: true,
        initialStep: 0,
        steps: [
          {
            element: ".n08m",
            intro: "Hello step"
          },
          {
            element: ".input__field",
            intro: "World step"
          }
        ],
  })
  const [isDisplayState, setDisp] = useState()
  const {stepsEnabled, initialStep, steps} = introsettings;
  React.useEffect(() => {
    setTimeout(() => {
     setDisp(isDisplay)
    }, 1000)
  }, [isDisplay])
  const onExit = () => {
    setintrosettings({
        stepsEnabled: false,
        initialStep: 0,
        steps: [
          {
            element: ".n08m",
            intro: "Hello step"
          },
          {
            element: ".input__field",
            intro: "World step"
          }
        ],
  })
  }
  if (typeof isDisplayState !== 'undefined' && isDisplayState == true) {
    return (
        <>
         <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={() => onExit()}
         />
        </>
    )
  }
  return (
    <>
    </>
  )
}