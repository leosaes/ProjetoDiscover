function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', 'imagens/avatar-light.png')
    img.setAttribute('alt', 'Foto de um Homem de óculos escuros e fundo azul')
  } else {
    img.setAttribute('src', 'imagens/avatar.png')
    img.setAttribute('alt', 'Foto de um Homem de óculos de grau e fundo azul')
  }
  
}