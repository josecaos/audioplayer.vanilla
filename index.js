

(
  function() {

    const AudioContext = window.AudioContext || window.webkitAudioContext
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
    track.connect(audioContext.destination)

    console.log(audioElement)

    playButton.addEventListener('click', function() {

      // check if context is in suspended state (autoplay policy)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      if (this.dataset.playing === 'false') {
        // agrega el archivo de audioContext
        audioElement.setAttribute('src',url)
        audioElement.play();
        this.dataset.playing = 'true';
      } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
      }

    }, false)

    // termina play callback
    audioElement.addEventListener('ended', (e) => {
      playButton.dataset.playing = 'false'
      console.log("Fin play: " + e);
    }, false)

  }()
)
