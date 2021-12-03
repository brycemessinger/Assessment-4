const memes = require('./db.json')
let globalId = 4


module.exports = {
    getMemes: (req, res)=>{
        res.status(200).send(memes)
    },
    postMemes: (req,res) => {
        const {title, imageURL} = req.body
        let newMeme = {
            title,
            imageURL,
            id: globalId
        }
        memes.push(newMeme)
        res.status(200).send(memes)
        globalId++
    },
    updateMeme: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = memes.findIndex(elem => +elem.id === +id)
    },
    deleteMeme: (req, res) => {
        let {id} = req.params
        let index = movies.findIndex(elem => +elem.id === +id)
        movies.splice(index,1)
        res.status(200).send(movies)
    }
}