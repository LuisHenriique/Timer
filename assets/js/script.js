function stopWatch() {
    const clock = document.querySelector('#clock');
    const startPause = document.querySelector('.startPause');
    const clear = document.querySelector('.clear');
    const body = document.querySelector('body')
    //Seleciona os elementos do html.

    function getFromSeconds(seconds) {
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        })
    }
    // função que recebe os segundos e converte em milésimos de segundos. 

    let timer;
    let seconds = 0;
    // Variaveis globais, para setar em funções.

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = getFromSeconds(seconds)

        }, 1000)
    }
    //função que inicia o cronometro, que durante o intervalo encrementa +1 na variavel "seconds", e ilustra na tela a função "getFromSeconds(seconds)" já com os segundos, no intervalo de 1 segundo. 

    function stoptTimer() {
        clearInterval(timer)
    }
    // função,para parar o cronometro.

    function getStartPause() {
        if (startPause.textContent === 'START') {
            body.classList.remove('backgroundRemove')
            body.classList.add('backgroundBody')
            startPause.textContent = 'PAUSE'
            startTimer();
        } else if (startPause.textContent === 'PAUSE') {
            clock.classList.add('stopCron')
            stoptTimer()
            startPause.textContent = 'CONTINUE'
        } else if (startPause.textContent === 'CONTINUE') {
            clock.classList.remove('stopCron')
            startPause.textContent = 'PAUSE'
            startTimer()
        }

    }

    // função de lógica para os botões start e pause, que de acordo com o texto do elemento executar uma função e alterar o texto e  adicionando as class do css ou removendo.

    function returnStart() {
        if (startPause.textContent === 'PAUSE' || startPause.textContent === 'CONTINUE') {
            startPause.textContent = 'START'
        }
    }

    // função que retorna o valor e função de start ao botão, ao clicar no botão 'clear'

    startPause.addEventListener('click', (e) => {
        clearInterval(timer)
        getStartPause()
    })
    // evento que para o intervalo, e inicia a função "getStartPause()" ao clicar. 
    clear.addEventListener('click', (e) => {
        returnStart()
        body.classList.remove('backgroundBody');
        body.classList.add('backgroundRemove')
        clock.classList.remove('stopCron');
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
    })
// evento que ao clicar no botão "clear" o valor do botão startPause, ira para start, remove e adiciona class do css e zera o timer.
}

stopWatch()
//função executa o timer.