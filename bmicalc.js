let imc;
function calcIMC(){
    event.preventDefault(); // comando para que o formulario não recarregue e perca o valor 
    let altura = parseFloat(document.getElementById('altura').value); 
    let peso = parseFloat(document.getElementById('peso').value);
    //variaveis para pegar o valor do input
    imc = peso/(altura*altura) //calculo de imc
    /**apresenta o IMC na tela*/  
     document.getElementById('resultado_IMC').innerHTML = `SEU IMC é ${imc.toFixed(5)}`
     
}
// faz com que o botão ative a função
document.getElementById('send').addEventListener('click', function(){
   calcIMC();
   identificar();
})


function identificar(){
   if(imc<18){
   document.getElementById('tr1').style.backgroundColor = '#00FF00';
   document.getElementById('tr1').style.color = '#000';
   }
   else if(imc>=18 && imc <24.9){
      document.getElementById('tr2').style.backgroundColor = '#00FF00';
      document.getElementById('tr2').style.color = '#000';
   }
   else if(imc>25 && imc <29.9){
      document.getElementById('tr3').style.backgroundColor = '#00FF00';
      document.getElementById('tr3').style.color = '#000';
   }
   else if(imc>30 && imc <35){
      document.getElementById('tr4').style.backgroundColor = '#00FF00';
      document.getElementById('tr4').style.color = '#000';
   }
   else if(imc>=35 && imc <39.99){
      document.getElementById('tr5').style.backgroundColor = '#00FF00';
      document.getElementById('tr5').style.color = '#000';
   }
   else if(imc>40){
      document.getElementById('tr6').style.backgroundColor = '#FF0000';
      document.getElementById('tr6').style.color = '#fff';
   }
}
