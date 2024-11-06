// Obtendo o contexto do canvas para renderizar o gráfico
const ctx = document.getElementById('graficoViciosDigitais').getContext('2d');

// Dados fictícios sobre o tempo médio (em horas) gasto por dia em atividades digitais por faixa etária
const dadosViciosDigitais = {
    labels: ['18-24 anos', '25-34 anos', '35-44 anos', '45-54 anos', '55-64 anos', '65+ anos'], // Faixas etárias
    datasets: [{
        label: 'Tempo Médio Diário em Atividades Digitais (Horas)',
        data: [6.5, 5.8, 4.2, 3.5, 2.7, 1.8], // Dados fictícios: horas médias gastas por faixa etária
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Cor do gráfico
        borderColor: 'rgba(255, 99, 132, 1)', // Cor da borda
        borderWidth: 1
    }]
};

// Configuração do gráfico
const config = {
    type: 'bar', // Tipo de gráfico: barras
    data: dadosViciosDigitais,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, // Começar o eixo Y a partir de 0
                title: {
                    display: true,
                    text: 'Horas por Dia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Faixa Etária'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top', // Posição da legenda
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + ' horas'; // Adiciona "horas" nas tooltips
                    }
                }
            }
        }
    }
};

// Criando o gráfico
const grafico = new Chart(ctx, config);