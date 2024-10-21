import { getCSS } from "./common.js"

async function quantidadeUsuarios() {

    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.values(dados)
   

    const data = [
      {
         x: nomeDasRedes,
         y: quantidadeUsuarios,
         type: 'bar',
         marker: {
          color: getCSS('--primary-color')
         }
      }
    ]
 
      const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
          text: 'redes sociais com mais usuários no mundo',
          x: 0,
          font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
          }
        },
        xaxis: {
          tickfont: {
            color: getCSS('--primary-color')
          },
          size: {
            size: 16,
            family: getCSS('--font')
          },
          title: {
            text: 'nome das redes sociais',
            font: {
              color: getCSS('--secondary-color')
            }
          }
        },
        yaxis: {
          title: {
            text: 'bilões de usuarios ativos',
            font: {
              color: getCSS('--secondary-color')
            }
          }
        }
      }
      const grafico = document.createElement('div')
      grafico.className = 'grafico'
      document.getElementById('graficos-container').appendChild(grafico)
      Plotly.newPlot(grafico,data, layout)
  }