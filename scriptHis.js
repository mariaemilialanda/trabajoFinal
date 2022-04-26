//FUNCIONALIDADES VIDEO//

let botonPlay= document.querySelector('#darPlay')
let video= document.querySelector('video')

botonPlay.addEventListener('click',()=>{
    video.play()
})

let botonPausa= document.querySelector('#pausa')


botonPlay.addEventListener('click',()=>{
    video.pause()
})

