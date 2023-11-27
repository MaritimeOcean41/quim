var func = ['alcool','aldeido','acido carboxilico','cetona','enol','eter','ester','amida primaria', 'amida secundaria', 'amida terciaria','amina primaria', 'amina secundaria', 'amina terciaria','nitrocompostos', 'sais de acido carboxilico', 'sais quaternarios de amonio','amonio','amonia','alcool-2','eter-2','eter-3'];
var answer;
var func_copy = ['alcool','aldeido','acido carboxilico','cetona','enol','eter','ester','amida primaria', 'amida secundaria', 'amida terciaria','amina primaria', 'amina secundaria', 'amina terciaria','nitrocompostos', 'sais de acido carboxilico', 'sais quaternarios de amonio','amonio','amonia','alcool-2','eter-2','eter-3'];

// Redirecionar para a página ao clicar na lista (Página Inicial)
$('li').on("click", function(e) {
    window.location.assign(this.id);
});

// Ao clicar em começar
function start() {    
    $('.start').css('display', 'none'); // Esconder o botão para começar
    $('.question').css('display', 'block'); // Mostrar a parte da pergunta e resposta

    // Reseta tudo
    $('.answer').val('');
    $('.confirm').css('bakcground-color', '#ccc');

    // Muda a imagem da função e escolha uma nova aleatoriamente
    let img = document.getElementById('question_img');
    if(func.length > 0) {
        answer = func[Math.floor(Math.random()*func.length)];
        func.splice((func.indexOf(answer)), 1);
    } else {
        for(i in func_copy) {
            func[i] = func_copy[i];
        }
    }
    console.log(answer + '-' + func_copy);
    img.src = `../data/assets/orga/${answer}.svg`
}

// Confrimar se a resposta estiver certa
function confirm() {
    var inpVal = ($('.answer').val()).normalize().normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    var arrAns = answer.split('-');
    if(inpVal == arrAns[0]) {
        $('.confirm').css('background-color', 'green');
    } else {
        $('.confirm').css('background-color', 'red');
    }
    setTimeout(start(), 350); // Em ambos casos reseta após 350ms
}

// Se apertar 'enter' também funciona
document.addEventListener('keypress', function(e) {
    if(e.keyCode == 13) {
        confirm();
    }
});