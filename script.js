let musica = document.querySelector('audio')
let indexMusica = 0

let musicas = [
    {titulo: 'Guitar Solo', artista: 'Marlleyck Nathan', src:'music/We Ride! - Reed Mathis.mp3',
    img: 'img/rock.jpg'},
    {titulo: 'Samba', artista: 'Bossa Nuev', src: 'music/Ella Vater - The Mini Vandals.mp3',
    img: 'img/samba.jpg'},
    {titulo: 'Piano', artista: 'Pianista', src: 'music/A Brand New Start - TrackTribe.mp3',
    img: 'img/background.jpg'}
]

renderizarMusica(indexMusica)

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.innerHTML = musicas[index].titulo
        nomeArtista.innerHTML = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.innerHTML = segundosParaMinutos(Math.floor(musica.duration))
    })
}

let duracaoMusica = document.querySelector('.fim')

let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')


function tocarMusica() {
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoCorrido = document.querySelector('.inicio')
    tempoCorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))

}

function segundosParaMinutos(segundos) {
    let campoSegundos = segundos % 60
    let campoMinuto = Math.floor(segundos / 60)

    if (campoSegundos < 10) {
        campoSegundos  = '0'+campoSegundos
    }

    return campoMinuto+':'+campoSegundos
}



document.querySelector('.botao-play')
    .addEventListener('click', tocarMusica)

document.querySelector('.botao-pause')
    .addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior')
    .addEventListener('click', () => {
        indexMusica--
        if (indexMusica < 0) {
            indexMusica = 0
        }
        renderizarMusica(indexMusica)
    })

document.querySelector('.prox')
    .addEventListener('click', () => {
        indexMusica++
        if (indexMusica > 2) {
            indexMusica = 0
        }
        renderizarMusica(indexMusica)
    })