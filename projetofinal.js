$(document).ready(function () {
	// Método para pular campos teclando ENTER
	$('.pula').on('keypress', function(e){
		var tecla = (e.keyCode?e.keyCode:e.which);

		if(tecla == 13){
			campo = $('.pula');
			indice = campo.index(this);

			if(campo[indice+1] != null){
				proximo = campo[indice + 1];
				proximo.focus();
				e.preventDefault(e);
			}
		}
	});

	 // Inseri máscara no CEP
	$("#cep").inputmask({
		mask: ["99999-999",],
		keepStatic: true
	});

	 // Método para consultar o CEP
	$('#cep').on('blur', function(){

		if($.trim($("#cep").val()) != ""){

			$("#mensagem").html('(Aguarde, consultando CEP ...)');
			$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#cep").val(), function(){

				  if(resultadoCEP["resultado"]){
					$("#rua").val(unescape(resultadoCEP["tipo_logradouro"])+" "+unescape(resultadoCEP["logradouro"]));
					$("#bairro").val(unescape(resultadoCEP["bairro"]));
					$("#cidade").val(unescape(resultadoCEP["cidade"]));
					$("#uf").val(unescape(resultadoCEP["uf"]));
				}

				$("#mensagem").html('');
			});				
		}			
	});
});	
function login(){
    var user ="vanessamw2001@hotmail.com"
    var code = 12345;

    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;


    if ((user == email) && (senha == code)){
        alert('Você está logado');
    }else{
        alert('erro no login');
    }
}
function respostaVapo(){
	var executamo = document.getElementsByName('vapo');
	for(i=0;i<executamo.length;i++){
		if(executamo[i].checked){
			var respostaexecutamo = executamo[i].value;
			if(respostaexecutamo == "Gerson"){
				alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
			}
		}
	}
}

function respostaCampe(){
	var campeao = document.getElementsByName('campe');
	for(i=0;i<campeao.length;i++){
		if(campeao[i].checked){
			var respostacampeao = campeao[i].value;
			if(respostacampeao == 1948){
				alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
			}
		}
	}
}

function respostaArt(){
	var artilheiro = document.getElementsByName('art');
	for(i=0;i<artilheiro.length;i++){
		if(artilheiro[i].checked){
			var respostartilheiro = artilheiro[i].value;
			if(respostartilheiro == "Gabigol"){
				alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
			}
		}
	}
}

function respostaFund(){
	var fundacao = document.getElementsByName('fund');
	for (i=0;i<fundacao.length;i++){
		if(fundacao[i].checked){
			var respostafundacao= fundacao[i].value;
				if(respostafundacao==1898){
					alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
				}
		}
	}
}

function respostaLib(){
	var libertadores = document.getElementsByName('lib');
	for (i=0;i<libertadores.length;i++){
		if(libertadores[i].checked){
			var respostalibertadores= libertadores[i].value;
				if(respostalibertadores=="Libertadores"){
					alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
				}
		}
	}
}

function respostaCopabr(){
	var copa = document.getElementsByName('copabr');
	for (i=0;i<copa.length;i++){
		if(copa[i].checked){
			var respostacopa= copa[i].value;
				if(respostacopa=="Coritiba"){
					alert("Parabéns! Você acertou");
				}else{
					alert("Você errou! Tente novamente");
				}
		}
	}
}

	