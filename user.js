function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cN0CTmh6Pm":
        Script1();
        break;
      case "5dnoKUFk80i":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src = "musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.05;

}

