import { getCSS, tickConfig } from './common.js'

{
    Facebook: 3049;
    Youtube: 2491;
    WhatsApp: 2000;
    Intagram: 2000;
    Tiktok: 1562;
    WeChat: 1336;
}

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
}
const data = [
    {
    
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: "bar",
    marker: {
    color: getCSS('--primary-color')
    }
}
]
    const grafico = document.createElement("div")
    grafico.className = "grafico"

    document.getElementById("graficos-container").appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

quantidadeUsuarios()
const layout = {

    plot_bgcolor: getCSS("--bg-color"),
    plot_bgcolor: getCSS("--bg-color"),
    title: {
        text: "Redes sociais com mais usuários no mundo",
        x: 0,
        font: {
        color: getCSS("--primary-color"),
        family: getCSS("--font"),
        size: 30,
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
        text: "nome das redes sociais",
        font: {
        color: getCSS("--secundary-color")
        }
        }
        },
        yaxis: {
        tickfont: tickConfig,
        title: {
        text: "bilhões de usuários ativos",
        font: {
        color: getCSS("--secundary-color")
        }
        }
}
}