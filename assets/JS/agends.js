const select = document.getElementById('opSelect');
    // Adiciona um ouvinte de evento que dispara sempre que a opção selecionada mudar
select.addEventListener('change', () => {
    // Pega o valor da opção selecionada
    const valor = select.value;

    // Seleciona todas as divs com a classe 'sala' (salas individuais)
    const salas = document.querySelectorAll('.sala');

    // Seleciona todas as divs com a classe 'sala-reunioes' (salas de reuniões)
    const reunioes = document.querySelectorAll('.sala-reunioes');

    if (valor === 'Todas') {
        salas.forEach(div => div.style.display = 'block');
        reunioes.forEach(div => div.style.display = 'block');
    } else if (valor === 'Sala Individual') {
        salas.forEach(div => div.style.display = 'block');
        reunioes.forEach(div => div.style.display = 'none');
    } else if (valor === 'Sala de Reunioes') {
        salas.forEach(div => div.style.display = 'none');
        reunioes.forEach(div => div.style.display = 'block');
    }
});
