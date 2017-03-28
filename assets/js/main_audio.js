var cancion = document.getElementById("cancion");
cancion.ontimeupdate = function() {
  var mostrarProgreso = document.getElementById("progreso");
  mostrarProgreso.value = cancion.currentTime;
  }

function reproducir() {
  cancion.play();
}

function pausa() {
  cancion.pause();
}

function detener() {
  cancion.load();
}

function retroceder(valor) {
  cancion.currentTime -= valor;
}

function avanzar(valor) {
  cancion.currentTime += valor;
}

function volumenSubir(valor) {
  cancion.volume += valor;
}

function volumenBajar(valor) {
  cancion.volume -= valor;
}
