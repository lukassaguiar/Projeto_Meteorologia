const key = "1bd1935f8fbaebe89b2e982a08de8cf7"

function DadosNaTela(dados) {
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + " ºC "
  document.querySelector(".text-previsao").innerHTML =
    dados.weather[0].description
  document.querySelector(".umidade").innerHTML =
    dados.main.humidity + "% de Umidade"
  document.querySelector(".img-previsao").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json())
  DadosNaTela(dados)
}

function cliqueBotao() {
  const cidade = document.querySelector(".input-city").value

  buscarCidade(cidade)
}
