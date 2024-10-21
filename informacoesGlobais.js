const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformaçõesGlibais() {
    const res =  await fetch(url)
    const dados =  await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoaNoMundo = (dados.total_pessoas_mundom / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round(dados.tempo_medio - horas) * 100
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixex(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')

    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> 
    de pessoas e que aproximadamente <span>${pessoasConectadas}</span>
     estão conectadas em alguma rede social e passam em média
    <span>${horas} horas </span> e ${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span> ${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social/.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformaçõesGlibais()