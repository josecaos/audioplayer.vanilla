

(
  function() {
    // const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioContext = new AudioContext()
    const audioElement = new Audio()
    const playButton = document.querySelector('.toggle-play');
    const track = audioContext.createMediaElementSource(audioElement)//carga elemento html
    let url = "./josecaos-j71g1gj7-soundcloud.edit.mp3"
    audioElement.src = url
    // audioElement.type = "audio/mpeg"
    audioElement.crossOrigin = "anonymous";
    audioElement.controls = false
    audioElement.autoplay = false
    audioElement.loop = true

    play(playButton,track,audioContext,audioElement,url)

    // termina play callback
    audioElement.addEventListener('ended', (e) => {
      playButton.dataset.playing = 'false'
      console.log("Fin play: " + e);
    }, false)

  }()
)

function play(elemento,conexion,contexto,audioelement,fileURL) {

  conexion.connect(contexto.destination)
  elemento.addEventListener('click', () => {

    if (contexto.state === 'suspended') {
      contexto.resume();
    }

    if (elemento.dataset.playing === 'false') {
      // agrega el archivo de audioContext
      elemento.setAttribute('src',fileURL)
      audioelement.play();
      elemento.dataset.playing = 'true';
    } else if (elemento.dataset.playing === 'true') {
      audioelement.pause();
      elemento.dataset.playing = 'false';
    }

  }, false)
}
