import React, { useState } from 'react'
import "./BubbleSort.css"

export const BubbleSort = () => {
    let [arr, setArr] = useState([7, 8, 60, 4, 6, 6, 4, 435, 7, 32, 3, 74])

    return (
        <div className="bubble-sort">
            <h2>Bubble sort</h2>

            <ul className="bubble-sort__list">
                {arr.map((item, index) => {
                    return (
                        <li className="bubble-sort__item" key={index}>{item}</li>
                    )
                })}
            </ul>

            <button onClick={() => {
                const sortedArr = sortBubble(arr)

                setArr(sortedArr)
            }}>Sort</button>
        </div>
    )
}

/**
 * @param {Array} initialArr 
 */
function sortBubble(initialArr) {
    for (let i = 0; i < initialArr.length; i++) {
        for (let j = i; j < initialArr.length; j++) {
            if (initialArr[i] > initialArr[j]) {
                [initialArr[i], initialArr[j]] = [initialArr[j], initialArr[i]] // swap 'em!
            }
        }
    }

    // because otherwise useState wouldn't consider it as new array
    return [...initialArr]
}