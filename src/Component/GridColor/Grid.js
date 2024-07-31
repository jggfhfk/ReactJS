import React, { useState } from 'react'
import "./Grid.css"

const Compo = ({onClick, filled, disable}) => {
    return <button
    onClick={onClick}
    className={filled?"cell cell_filled" : "cell"}
    disabled={disable}
/>
}



const Grid = () => {

    const [order, setOrder] = useState([])
    const [activation, setIsDeactivation] = useState(false)

    const activateCells = (index) => {
        const newOrder = [...order, index]
        setOrder(newOrder)
        // setFilled(order.includes(index))
        console.log(newOrder)

        if(newOrder.length === config.flat(1).filter(Boolean).length){
            deactivateCells()
            console.log("Deactivate")
        }


    }

    const deactivateCells = () => {
        setIsDeactivation(true)
        const timer = setInterval(() => {
            setOrder((prevOrder) => {
                const newOrder = prevOrder.slice()
                newOrder.pop()

                if (newOrder.length === 0) {
                    clearInterval(timer)
                    setIsDeactivation(false)
                }
                return newOrder
            })
        }, 300)
    }

    const config = [        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]

  return (
    <div className='container'>
      <div className="grid">
        {config.flat(1).map((val, index) => {
            return val ? <Compo
                key={index}
                filled={order.includes(index)}               
                onClick={() => activateCells(index)}
                disable = {order.includes(index) || activation}
            />:<span/>
        })}
      </div>
    </div>
  )
}

export default Grid
