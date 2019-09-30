import React, { useState } from 'react'
import "./BubbleSort.css"

export const BubbleSort = () => {
    let [arr, setArr] = useState([7, 8, 60, 4, 6, 6, 4, 435, 7, 32, 3, 74, 345, 7, 46, 78, 132, 20, 98, 45, 37, 89, 4, 8, 3, 6, 5])

    let [currentI, setCurrentI] = useState(null)
    let [currentJ, setCurrentJ] = useState(null)

    return (
        <div className="bubble-sort">
            <h2>Bubble sort</h2>

            <ul className="bubble-sort__list">
                {arr.map((item, index) => {
                    let className = 'bubble-sort__item'

                    if ([currentI, currentJ].includes(index)) {
                        className += ' active'
                    }

                    return (
                        <li className={className} key={index}>{item}</li>
                    )
                })}
            </ul>

            <button onClick={() => {
                sortBubble(arr)
            }}>Sort</button>
        </div>
    )

    /**
    * @param {Array} initialArr 
    */
    function sortBubble(initialArr) {
        for (let i = 0; i < initialArr.length; i++) {
            for (let j = i; j < initialArr.length; j++) {

                setTimeout(() => {
                    if (initialArr[i] > initialArr[j]) {
                        [initialArr[i], initialArr[j]] = [initialArr[j], initialArr[i]] // swap 'em!
                    }

                    setCurrentI(i)
                    setCurrentJ(j)

                    // because otherwise useState wouldn't consider it as new array
                    setArr([...initialArr])
                }, 100 * (i + j))
            }
        }
    }
}