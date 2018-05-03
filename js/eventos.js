//DECLARAÇÕES DE VARIÁVEIS
var jogador1, aposta1, jogador2, aposta2

var premio = 0

var jogadaPlayer1 = 0
var jogadaPlayer2 = 0
var counterLance = 0

var somaJogador1 = 0
var somaJogador2 = 0

var statusJogador1 = false
var statusJogador2 = false

var vitoriaJogador1 = 0
var vitoriaJogador2 = 0

//EVENTO INICAL
window.onload = function(){
    
	setTimeout("openRuleModal()", 2000)
	//setTimeout("openVictoryModal()", 1000)
}

//MODAL DAS REGRAS
function openRuleModal(){
        
	document.getElementById("modal-rules").style.display = 'block'
}

function closeRuleModal(){
        
	document.getElementById("modal-rules").style.display = 'none'
}

//VALIDADNDO A PARTIDA
function validaPardida(){

	jogador1 = document.getElementById("jogador1").value
	aposta1 = document.getElementById("aposta1").value
	jogador2 = document.getElementById("jogador2").value
	aposta2 = document.getElementById("aposta2").value

	premio = (parseFloat(aposta1)) + (parseFloat(aposta2))

	if(jogador1 && aposta1 && jogador2 && aposta2){

		document.getElementById("jogador1").style.border = '2px solid #6699FF'
		document.getElementById("aposta1").style.border = '2px solid #6699FF'
		document.getElementById("jogador2").style.border = '2px solid #6699FF'
		document.getElementById("aposta2").style.border = '2px solid #6699FF'

		document.getElementById("reultJogador1").innerHTML = jogador1
		document.getElementById("resultAposta1").innerHTML = aposta1
		document.getElementById("resultJogador2").innerHTML = jogador2
		document.getElementById("resultAposta2").innerHTML = aposta2

		openAddSuccessModal()
	}else{

		document.getElementById("jogador1").style.border = '2px solid #D20000'
		document.getElementById("aposta1").style.border = '2px solid #D20000'
		document.getElementById("jogador2").style.border = '2px solid #D20000'
		document.getElementById("aposta2").style.border = '2px solid #D20000'
		
		openValidationModal()
	}
}

//MODAL VALIDAÇÃO
function openValidationModal(){
	
	document.getElementById("modal-validation").style.display = 'block'
}

function closeValidationModal(){
	
	document.getElementById("modal-validation").style.display = 'none'
}

//VALIDAÇÃO DO LANÇAMENTO
function validaLancamento(){

	if(jogador1 && aposta1 && jogador2 && aposta2){

		counterLance++

		console.log('Você lançou os dados!')
		partida()
	}else{

		document.getElementById("jogador1").style.border = '2px solid #D20000'
		document.getElementById("aposta1").style.border = '2px solid #D20000'
		document.getElementById("jogador2").style.border = '2px solid #D20000'
		document.getElementById("aposta2").style.border = '2px solid #D20000'

		openValidationModal()
	}
}

//MODAL CADASTRO COM SUCESSO
function openAddSuccessModal(){
	
	document.getElementById("modal-add-sucess").style.display = 'block'
}

function closeAddSuccessModal(){
	
	document.getElementById("modal-add-sucess").style.display = 'none'

	setTimeout("openPlayer1Modal()", 2000)
}

//PARTIDA
function partida(){

	if((counterLance % 2) === 0){
		
		jogadaPlayer2++

		document.getElementById("resultJogada2").innerHTML = jogadaPlayer2

		statusJogador1 = false
		statusJogador2 = true

		sorteioDados()

		setTimeout("openPlayer1Modal()", 5000)
	}else{

		jogadaPlayer1++

		document.getElementById("resultJogada1").innerHTML = jogadaPlayer1

		statusJogador1 = true
		statusJogador2 = false

		sorteioDados()

		setTimeout("openPlayer2Modal()", 5000)
	}
}

//MODAL JOGADOR 1
function openPlayer1Modal(){
	
	document.getElementById("modal-player1").style.display = 'block'
}

function closePlayer1Modal(){
	
	document.getElementById("modal-player1").style.display = 'none'
}

//MODAL JOGADOR 2
function openPlayer2Modal(){
	
	document.getElementById("modal-player2").style.display = 'block'
}

function closePlayer2Modal(){
	
	document.getElementById("modal-player2").style.display = 'none'
}

//NOVO JOGO
function newGame(){

	window.location.reload();
	
}

//MATEMATICA
function sorteioDados(){

	var dado1 = 1 + Math.floor(Math.random() * 6)
	var dado2 = 1 + Math.floor(Math.random() * 6)
	var soma = dado1 + dado2
	console.log('dado1: ', dado1)
	console.log('dado2: ', dado2)

	switch (dado1) {
		case 1:
			document.getElementById("dado1").src = "img/dado1.png"		
			break
		case 2:
			document.getElementById("dado1").src = "img/dado2.png"		
			break
		case 3:
			document.getElementById("dado1").src = "img/dado3.png"		
			break
		case 4:
			document.getElementById("dado1").src = "img/dado4.png"		
			break
		case 5:
			document.getElementById("dado1").src = "img/dado5.png"		
			break
		case 6:
			document.getElementById("dado1").src = "img/dado6.png"		
			break
	
		default:
			break
	}

	switch (dado2) {
		case 1:
			document.getElementById("dado2").src = "img/dado1.png"		
			break
		case 2:
			document.getElementById("dado2").src = "img/dado2.png"		
			break
		case 3:
			document.getElementById("dado2").src = "img/dado3.png"		
			break
		case 4:
			document.getElementById("dado2").src = "img/dado4.png"		
			break
		case 5:
			document.getElementById("dado2").src = "img/dado5.png"		
			break
		case 6:
			document.getElementById("dado2").src = "img/dado6.png"		
			break
	
		default:
			break
	}

	if(statusJogador1){

		somaJogador1 = soma
		console.log('Soma Jogador 1: ', somaJogador1)

		document.getElementById("soma-dados").innerHTML = soma
		setTimeout("openSomaModal()", 2000)
	}else if(statusJogador2){

		somaJogador2 = soma
		console.log('Soma Jogador 2: ', somaJogador2)

		document.getElementById("soma-dados").innerHTML = soma
		setTimeout("openSomaModal()", 2000)
	}

	resultadoPartida()
}

//RESULTADO DA PARTIDA
function resultadoPartida(){

	if(vitoriaJogador1 === 3){

		document.getElementById("vitorioso").innerHTML = jogador1
		openVictoryModal()
	}else if(vitoriaJogador2 === 3){

		document.getElementById("vitorioso").innerHTML = jogador2
		openVictoryModal()
	}else{
		if(jogadaPlayer1 === jogadaPlayer2){

			if(somaJogador1 === somaJogador2){

				console.log('Empate!')
				openTiedModal()
			}else if(somaJogador1 > somaJogador2){
				
				vitoriaJogador1++
				console.log('Jogador 1 Ganhou!')

				openPlayer1WinModal()

				switch(vitoriaJogador1){
					case 1:
						document.getElementById("star1-a").style.display = 'block'
						break
					case 2:
						document.getElementById("star2-a").style.display = 'block'
						break
					case 3:
						document.getElementById("star3-a").style.display = 'block'
						break
					default:
						break
				}

			}else if(somaJogador1 < somaJogador2){
				
				vitoriaJogador2++
				console.log('Jogador 2 Ganhou!')

				openPlayer2WinModal()

				switch(vitoriaJogador2){
					case 1:
						document.getElementById("star1-b").style.display = 'block'
						break
					case 2:
						document.getElementById("star2-b").style.display = 'block'
						break
					case 3:
						document.getElementById("star3-b").style.display = 'block'
						break
					default:
						break
				}
			}
		}
	}
}

//MODAL JOGADOR 1 GANHOU
function openPlayer1WinModal(){
	
	document.getElementById("modal-player1-win").style.display = 'block'
}

function closePlayer1WinModal(){
	
	document.getElementById("modal-player1-win").style.display = 'none'
}

//MODAL JOGADOR 2 GANHOU
function openPlayer2WinModal(){
	
	document.getElementById("modal-player2-win").style.display = 'block'
}

function closePlayer2WinModal(){
	
	document.getElementById("modal-player2-win").style.display = 'none'
}

//MODAL DE EMPATE
function openTiedModal(){
	
	document.getElementById("modal-tied").style.display = 'block'
}

function closeTiedModal(){
	
	document.getElementById("modal-tied").style.display = 'none'
}

//MODAL SOMA DOS DADOS
function openSomaModal(){
	
	document.getElementById("modal-soma").style.display = 'block'
}

function closeSomaModal(){
	
	document.getElementById("modal-soma").style.display = 'none'
}

//MODAL VITORIA
function openVictoryModal(){
	
	document.getElementById("premio").innerHTML = premio
	document.getElementById("modal-victory").style.display = 'block'
}

function closeVictoryModal(){
	
	document.getElementById("modal-victory").style.display = 'none'
	newGame()
}