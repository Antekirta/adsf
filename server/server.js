const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: /^https?:\/\/localhost:\d{4}/
}));

app.get('/array-gen', (req, res) => {
    const length = Math.floor(Math.random() * 100)

    let arr = []

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }

    res.json(JSON.stringify(arr))
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}...`)
})