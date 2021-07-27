document.body.addEventListener('keyup', (event)=>{
    tocarSom(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{
    let som = document.querySelector('#input').value;

    if(som !== '') {
        let somLista = som.split('');
        tocarMusica(somLista);
    }
});

function tocarSom(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElemnt = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElemnt) {
        keyElemnt.classList.add('active');

        setTimeout(() => {
            keyElemnt.classList.remove('active');
        }, 300);
    }
}

function tocarMusica(somLista) {

    let aguardar = 0;

    for(let somItem of somLista) {
        setTimeout(()=>{
            tocarSom(`key${somItem}`);
        }, aguardar);

        aguardar += 250;
        
    }
}