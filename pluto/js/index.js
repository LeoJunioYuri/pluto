var frases = [
   'Vencedores nunca desistem e quem desiste nunca vence – Vince Lombardi, treinador de futebol americano',
   'Preço é oque você paga. Valor é oque você recebe- Warren Buffet,emprendendor',
     'Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor',
      'Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor',
       'Falhe sete vezes. Levante-se oito – provérbio japonês',
      'Ações não valem menos por não serem elogiadas. - Aragorn (Senhor dos anéis)',
      'Você tem inimigos? Bom. Significa que você brigou por algo, alguma vez na vida. - Winston Churchill ',
      'Um pouco de filosofia inclina a mente humana para o ateísmo, mas o aprofundamento na filosofia reaproxima a mente humana da religião - Francis Bacon',
      'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir. - Walt Disney',
      'Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ela vai gastar toda a sua vida acreditando que ele é estúpido. - Albert Einstein'

];

function novafrase() {
//Muda a frase sempre que a função é chamada
var aleatorio = Math.floor(Math.random() * (frases.length));
document.getElementById('frase').innerHTML = frases[aleatorio];
}