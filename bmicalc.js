function calcIMC(){
    event.preventDefault(); // comando para que o formulario não recarregue e perca o valor 
    let altura = parseFloat(document.getElementById('altura').value); 
    let peso = parseFloat(document.getElementById('peso').value);
    //variaveis para pegar o valor do input
    let imc = peso/(altura*altura) //calculo de imc
    /**apresenta o IMC na tela*/  
     document.getElementById('resultado_IMC').innerHTML = `SEU IMC é ${imc.toFixed(5)}`
}
// faz com que o botão ative a função
document.getElementById('send').addEventListener('click', calcIMC)