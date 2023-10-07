function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', 'imagens/avatar-light.jpeg')
    img.setAttribute('alt', 'Foto de um Homem de óculos escuros e fundo azul')
  } else {
    img.setAttribute('src', 'imagens/avatar.jpeg')
    img.setAttribute('alt', 'Foto de um Homem de óculos de grau e fundo azul')
  }
  
}