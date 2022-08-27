import React, { useEffect, useState } from 'react'


function getData() {
    return fetch(`http://localhost:8080/Perfume`)
        .then((res) => {
            res.json()
        })
}


export const HomeFragrance = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
            .then((res) => {
                return setData(res.perfume)
                console.log(res)
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }, [])
    console.log(data)
    return (
        <div>
            <button>click</button>
        </div>
    )
}
