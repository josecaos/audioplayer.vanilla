<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Audio player</title>
</head>

<body>

  <!-- tarjeta player -->
  <section id="tarjeta-player">
    <div class="wrapper">
      <!--  -->
      <div class="nombre">
        <h3>Track: </h3>
        <h2>... </h2>
      </div>
      <progress min="0" max="100" value="0"></progress>
      <br>
      <input type="range" id="volumen" min="0" max="1" value="1" step="0.01">
      <br>
      <button class="toggle-play" data-playing="false" role="switch" aria-checked="false">
        <span>Play/Pause</span>
      </button>

    </div>
  </section>
  <!--  -->

  <script src="index.js" type="text/javascript"></script>
</body>

</html>
