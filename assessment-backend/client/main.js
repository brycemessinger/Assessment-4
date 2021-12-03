const memeContainer = document.querySelector('#meme-container')
const form = document.querySelector

const baseURL = 'http://localhost:4000/api/memes'

const memesCallback = ({ date: memes}) => displayMemes(memes)
const errCallback = err => console.log(err.response.data)

const getAllMemes = () => axios.get(baseURL).then(memesCallback).catch(errCallback)
const createMeme = () => axios.post(baseURL).then(memesCallback).catch(errCallback)
const updateMeme = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(memesCallback).catch(errCallback)
const deleteMeme = id => axios.delete(`${baseURL}/${id}`).then(memesCallback).catch(errCallback)

function memePosterHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value,
    }

    createMeme(bodyObj)
    title.value = ''
    imageURL.value = ''
}

function createMemeCard(meme) {
    const memeCard = document.createElement('div')
    memeCard.classList.add('meme-card')

    memeCard.innerHTML = `<img alt='meme picture' src=${meme.imageURL} class="meme-cover/>
    <buttons onclick="deleteMovie(${movie.id})">Delete Meme</buttons>
    `

    memeContainer.appendChild(memeCard)
}

function displayMemes(arr) {
    memeContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createMemeCard(arr[i])
    }
}

form.addEventListener('submit', memePosterHandler)

getAllMemes()