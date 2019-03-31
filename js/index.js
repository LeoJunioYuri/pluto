var frases = [
   'Evite parcelar suas compras no cartão de crédito.', 'Monitore seu orçamento ao longo do mês.', 'Prefira pagar à vista, assim você evitas dívidas.', 'Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor', 'Faça uma lista antes de ir ao mercado, e evite compras desnecessárias.', 'Defina prioridades.', 'Estabeleça objetivos financeiros.', 'Lembre sempre de fazer uma poupança.','Tenha disciplina.', 'Aprenda a usar o dinheiro.', 'Evite o crédito fácil.', 'Elabore um orçamento mensal.', 'Invista em uma renda fixa.', 'Use uma ferramentas que te ajude no gerenciamento financeiro.' ];

function novafrase() {
//Muda a frase sempre que a função é chamada
var aleatorio = Math.floor(Math.random() * (frases.length));
document.getElementById('frase').innerHTML = frases[aleatorio];
}




//* Botão de ir ao topo */
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando clicar no butao, volta para o topo
function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

$(window).scroll(
  {
    previousTop: 0
  },
  function() {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
      $(".sidebar em").text("Up"); /* optional for demo */
      $(".header").show();
    } else {
      $(".sidebar em").text("Down");
      $(".header").hide();
    }
    this.previousTop = currentTop;
  }
);

$(window).scroll(function() {
  $("#myTopNav").css({ top: $(window).scrollTop() + "px" });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {

    var target = $(this.hash);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 500);
      return false;
    }

  });
});