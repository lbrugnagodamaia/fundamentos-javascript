function tabelaIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura');

        const pesoNumero = Number(peso.value);
        const alturaNumero = Number(altura.value);

        if (!pesoNumero || Number.isNaN(pesoNumero)) {
            setResultado('Peso inválido!', false);
            return;
        }

        if (!alturaNumero || Number.isNaN(alturaNumero)) {
            setResultado('Altura inválida!', false);
            return;
        }


        const imc = getIMC(pesoNumero, alturaNumero);
        const nivelIMC = getNivelIMC(imc);
        const msg = `Seu IMC é ${imc} (${nivelIMC}).`;
        setResultado(msg, true);


    };

    form.addEventListener('submit', recebeEventoForm);

    function getIMC(pesoNumero, alturaNumero) {
        const imc = pesoNumero / (alturaNumero * alturaNumero);
        return imc.toFixed(2);
    }

    function setResultado(msg, isValid) {
        resultado.innerHTML = '';

        const p = document.createElement('p');

        if (isValid) {
            p.classList.add('paragrafo-resultado'); // cola a classe verde
        } else {
            p.classList.add('bad'); // cola a classe vermelha
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    function getNivelIMC(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) {
            return nivel[5];
        } else if (imc >= 34.9) {
            return nivel[4];
        } else if (imc >= 29.9) {
            return nivel[3];
        } else if (imc >= 24.9) {
            return nivel[2];
        } else if (imc >= 18.5) {
            return nivel[1];
        } else if (imc < 18.5) {
            return nivel[0];
        }

    }

}
tabelaIMC();