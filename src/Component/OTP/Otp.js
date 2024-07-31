import React, { useRef, useState } from 'react'
import "./otp.css"

export default function Otp({digits=5}) {

    const [fields, setFields] = useState(new Array(digits).fill(""))

    const ref = useRef([])
    console.log(ref)

    const handleKeychange = (e, index) => {
        const key = e.key
        console.log(e.key, index)
        if(isNaN(e.key)) {
            return
        }

        if (key == "ArrowRight") {
            console.log("clickled")
            copyOtpFields[index] = ""
            if(index > 0) {
                ref.current[index-1].focus()
            }
            setFields(copyOtpFields)
        }

        const copyOtpFields = [...fields]
        copyOtpFields[index] = e.key
        if(index + 1 < fields.length) {
            ref.current[index+1].focus()
        }
        setFields(copyOtpFields)

    }

  return (
    <div className="otp_main">
        {fields.map((values, index) => {
            return <input 
            type="text" 
            className='otp'
            value={values}
            ref = {(curentInput) => (ref.current[index] = curentInput)}
            onKeyDown={(e) => handleKeychange(e, index)}
            />
        })}
    </div>
  )
}
