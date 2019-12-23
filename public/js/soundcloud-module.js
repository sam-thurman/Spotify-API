const container = document.getElementById('mediaPlayer')
const url = 'https://soundcloud.com/finthemartian'

renderReactPlayer(container, { url, playing: true })

function pausePlayer() {
  renderReactPlayer(container, { url, playing: false })
}