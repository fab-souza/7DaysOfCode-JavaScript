Nome = prompt("Olá! Qual o seu nome?");

tagh3.innerHTML =
  "Olá " +
  Nome +
  ", seja bem-vind@ ao meu código do desafio 3 no 7 Days of Code!";

function Front() {
  resposta2.innerHTML =
    "Se você já está atuando na área, você prefere aprender React ou aprender Vue?";
  aprenderfront = prompt("Digite '1' para React ou '2' para Vue:");

  if (aprenderfront == 1) {
    aprender.innerHTML =
      "Muito bom! O React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.";
  } else if (aprenderfront == 2) {
    aprender.innerHTML =
      "Muito bem! O Vue. js possibilita criar aplicações de forma reativa. É um framework JavaScript open source para a criação de aplicações web.";
  } else {
    function fullstack()
  }
}

function Back() {
  resposta2.innerHTML =
    "Se você já está atuando na área, você prefere aprender C# ou aprender Java?";
  const aprenderback = prompt("Digite '1' para C# ou '2' para Java:");
  if (aprenderback == 1) {
    aprender.innerHTML =
      "Muito bom! C# (CSharp) é uma linguagem de programação orientada a objetos criada pela Microsoft.";
  } else if (aprenderback == 2) {
    aprender.innerHTML =
      "Muito bem! Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995. Esta linguagem é rápida, segura e confiável.";
  } else {
    fullstack = alert("Teria interesse na área Fullstack?");
    aprender.innerHTML = "Você digitou uma opção diferente. Tente novamente...";
  }
}

function fullstack() {
  aprender.innerHTML =
    "Você digitou uma opção diferente. Está pensando na área de Fullstack?";
  let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
  while (msg === "ok"){
      let novaTecnologia = prompt("Qual?");
      alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
      msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
  }
}
  

