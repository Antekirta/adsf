import React, { useState, useEffect } from 'react'
import "../styles.css"
import { func } from 'prop-types'

export const MergeSort = () => {
    let [arr, setArr] = useState([])
    let [currentI, setCurrentI] = useState(null)
    let [currentJ, setCurrentJ] = useState(null)

    useEffect(() => {
        (async function () {
            let initialArr = await fetch('http://localhost:3001/array-gen')

            initialArr = await initialArr.json()

            setArr(JSON.parse(initialArr))
        })()
    }, [])

    return (
        <div className="sorting">
            <h2>Merge sort 3</h2>

            <ul className="sorting__list">
                {arr.map((item, index) => {
                    let className = 'sorting__item'

                    if ([currentI, currentJ].includes(index)) {
                        className += ' active'
                    }

                    return (
                        <li className={className} key={index}>{item}</li>
                    )
                })}
            </ul>

            <button onClick={() => {
                const sorted = sortMerge(arr)

                setArr([...sorted])
            }}>Sort</button>
        </div>
    )

    function sortMerge(initialArr) {
        if (initialArr.length < 2) {
            return initialArr
        }
        const middle = Math.floor(initialArr.length / 2)

        const left = initialArr.slice(0, middle)
        const right = initialArr.slice(middle)

        return sew(sortMerge(left), sortMerge(right))
    }

    function sew(left, right) {
        let sewed = [], rightIndex = 0, leftIndex = 0

        while (rightIndex < right.length && leftIndex < left.length) {
            if (right[rightIndex] < left[leftIndex]) {
                sewed.push(right[rightIndex])
                rightIndex++
            } else {
                sewed.push(left[leftIndex])
                leftIndex++
            }
        }

        return sewed
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
    }
}