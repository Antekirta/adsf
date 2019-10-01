import React, { useState, useEffect } from 'react'
import "./BubbleSort.css"

export const BubbleSort = () => {
    let [arr, setArr] = useState([])
    let [currentI, setCurrentI] = useState(null)
    let [currentJ, setCurrentJ] = useState(null)

    useEffect(() => {
        (async function () {
            let initialArr = await fetch('http://localhost:3001/array-gen')

            initialArr = await initialArr.json()

            console.log('initialArr: ', initialArr)

            setArr(JSON.parse(initialArr))
        })()
    }, [])

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