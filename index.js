// port to change
// design to add

const PORT = 8000
// initialise express, axios, cheerio
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const val_f =  []

// scrap the first page
app.get('/', (req,res) => {
    res.json('wecome to my api')
})
// get ur content from other webpages

gazety.forEach(item => {
    axios.get(item.link)
        .then((response) => {
            const val = response.data
            const $ = cheerio.load(val)

            $('a:contains("ports")', val).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                val_f.push({
                    title,
                    url: item.fanampiny + url, 
                    src: item.name
                })
            })
        })
})

app.get('/try', (req,res) => {
    res.json(val_f)
})

app.listen(PORT, () => (console.log(`server runing on ${PORT}`)))

const gazety = [
    {
        name: "",
        link: "",
        fanampiny: ""
    }
]
