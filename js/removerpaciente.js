var tabela = document.querySelector("#tabela-pacientes");

//Reduzido para uma linha
tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	}, 500)

});


//tabela.addEventListener("dblclick", function(event){
//var alvoEvento = event.target;
//var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
//paiDoAlvo.remove();
//});


//var pacientes = document.querySelectorAll(".paciente");
//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//	this.remove();	
//	});
//});