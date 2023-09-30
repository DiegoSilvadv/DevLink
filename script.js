function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "https://media.licdn.com/dms/image/C4D03AQGDj4RPfF3zMQ/profile-displayphoto-shrink_200_200/0/1653668138896?e=1701302400&v=beta&t=DYYrLZy-7qloQw0Lnk087yBg6Tdy4ZLPn0CfONuB-Dw")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "https://media.licdn.com/dms/image/C4D03AQGDj4RPfF3zMQ/profile-displayphoto-shrink_200_200/0/1653668138896?e=1701302400&v=beta&t=DYYrLZy-7qloQw0Lnk087yBg6Tdy4ZLPn0CfONuB-Dw")
  }
}
