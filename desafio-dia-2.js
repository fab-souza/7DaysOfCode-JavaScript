Nome=prompt("Olá! Qual o seu nome?")

Idade=prompt("Qual a sua idade?")

Linguagem=prompt("Qual linguagem de programação você está estudando?")

tagh3.innerHTML= "Olá "+Nome+", você tem "+Idade+" anos e já está aprendendo "+Linguagem+"!"

pergunta=prompt("Você gosta de estudar "+Linguagem+"? Responda com o número 1 para SIM ou 2 para NÃO.")

if (pergunta==1) {
   tagresposta.innerHTML= "Muito bom! Continue estudando e você terá muito sucesso."
} else {
   tagresposta.innerHTML= "Ahh que pena... Já tentou aprender outras linguagens?"
}
