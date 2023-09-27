function maquina(contenedor, textos, intervalo) 
{
  var tagHtml = document.getElementById(contenedor)
  var textoActual = ''
  var indiceTexto = 0
  var indiceCaracter = 0
  
  function escribir() 
  {
    if (indiceCaracter < textos[indiceTexto].length) 
    {
      textoActual += textos[indiceTexto].charAt(indiceCaracter)
      tagHtml.innerHTML = textoActual
      indiceCaracter++

      setTimeout(escribir, intervalo)

    }else {

      setTimeout(borrar, intervalo * 2)
    }
  }
  
    function borrar() 
    {
      if (indiceCaracter >= 0) 
      {
        textoActual = textos[indiceTexto].substring(0, indiceCaracter)
        tagHtml.innerHTML = textoActual
        indiceCaracter --

        setTimeout(borrar, intervalo / 2)

      } else {

        indiceTexto++

        if (indiceTexto >= textos.length) 
        {
          indiceTexto = 0
        }

        setTimeout(escribir, intervalo);
      }
    }
  
  setTimeout(escribir, intervalo)
}
  
let textos = [
  "SOFTWARE ENGINEER",
  "FRONTEND DEVELOPER"
]
  
maquina('text', textos, 150)