// **1. Cálculo da variável SOMA**
function calcularSoma() {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    console.log(`1. Valor de SOMA: ${SOMA}`);
}

// **2. Verificação de número na sequência de Fibonacci**
function verificarFibonacci(numero) {
    let a = 0, b = 1, temp;

    if (numero === 0 || numero === 1) {
        console.log(`2. ${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    while (b < numero) {
        temp = a + b;
        a = b;
        b = temp;
    }

    if (b === numero) {
        console.log(`2. ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`2. ${numero} não pertence à sequência de Fibonacci.`);
    }
}

// **3. Análise de faturamento diário**
function analisarFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);
    const mediaMensal =
        diasComFaturamento.reduce((acc, curr) => acc + curr, 0) /
        diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(
        valor => valor > mediaMensal
    ).length;

    console.log("3. Menor faturamento:", menorFaturamento);
    console.log("3. Maior faturamento:", maiorFaturamento);
    console.log("3. Dias acima da média:", diasAcimaDaMedia);
}

// **4. Percentual de representação por estado**
function calcularPercentual(faturamentoMensal) {
    const totalFaturamento = Object.values(faturamentoMensal).reduce(
        (acc, curr) => acc + curr,
        0
    );

    console.log("4. Percentual de representação por estado:");
    for (const [estado, valor] of Object.entries(faturamentoMensal)) {
        const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
        console.log(`${estado}: ${percentual}%`);
    }
}

// **5. Inversão de caracteres de uma string**
function inverterString(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    console.log("5. Texto original:", texto);
    console.log("5. Texto invertido:", invertida);
}

// **Chamada das funções para teste**
calcularSoma();

verificarFibonacci(21); // Substitua 21 pelo número desejado

analisarFaturamento([
    0, 150, 200, 0, 300, 0, 500, // Exemplo de dados (substituir pelos dados reais)
    100, 400, 0, 0, 250, 0, 450,
]);

calcularPercentual({
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
});

inverterString("ParaVocê"); // Substitua pelo texto desejado
