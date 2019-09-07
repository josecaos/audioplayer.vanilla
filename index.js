(
  function() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioContext = new AudioContext()
    const audioElement = new Audio()
    const track = audioContext.createMediaElementSource(audioElement)//carga elemento html
    const gainNode = audioContext.createGain();
    //
    const playButton = document.querySelector('.toggle-play');
    const volumeControl = document.querySelector('#volumen');
    let progressBar = document.querySelector("progress");
    let url = "./josecaos-j71g1gj7-soundcloud.edit.mp3"
    // audioElement.crossOrigin = "anonymous";
    audioElement.src = url
    audioElement.controls = false
    audioElement.autoplay = false
    audioElement.loop = false

    //
    // console.log(audioElement);

    //
    play(playButton,track,audioContext,audioElement,url,gainNode,progressBar)

    // progress bar
    progressBar.addEventListener("click", clickSeek);

    function clickSeek(e) {
      var percent = e.offsetX / this.offsetWidth
      audioElement.currentTime = percent * audioElement.duration//aplica tiempo seleccionado
      progressBar.value = percent * 100
    }

    // control volumen
    volumeControl.addEventListener('input', function() {
      gainNode.gain.value = this.value;
    }, false);

    // termina play callback
    audioElement.addEventListener('ended', (e) => {
      playButton.dataset.playing = 'false'
      console.log("Fin play: " + e);
    }, false)

  }()
)
//

function play(elemento,conexion,contexto,audioelement,fileURL,gain,progressbar) {

  let prog
  // clearInterval(prog)
  conexion.connect(gain).connect(contexto.destination)
  elemento.addEventListener('click', () => {

    if (contexto.state === 'suspended') {
      contexto.resume();
    }

    if (elemento.dataset.playing === 'false') {
      // nombre del archivo
      document.querySelector('.nombre h2').innerHTML = fileURL
      // agrega el archivo de audioContext
      elemento.setAttribute('src',fileURL)
      audioelement.play();
      elemento.dataset.playing = 'true';
      prog = (//sequencia la barra de progreso
        setInterval(()=>{
          console.log('setInterval ON');
          progress(progressbar,audioelement)
        },250)
      )
      // progreso del track

    } else if (elemento.dataset.playing === 'true') {
      audioelement.pause();
      document.querySelector('.nombre h2').innerHTML = "... "
      elemento.dataset.playing = 'false';
      clearInterval(prog)
    }

  }, false)

}

function progress(progressbar,audioelement) {
  let long = progressbar.clientWidth
  let point = audioelement.currentTime / long
  let res = point*100
  console.log(res);
  progressbar.value = res
}
