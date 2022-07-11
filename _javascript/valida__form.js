function validar () {
	
	var name = document.getElementById("nome");
	var cpf = document.getElementById("cpf");
	var cel = document.getElementById("cel");
	var cep = document.getElementById("cep");
	var rua = document.getElementById("rua");
	var num = document.getElementById("num");
	var compl = document.getElementById("compl");
	var bairro = document.getElementById("bairro");
	var cidade = document.getElementById("cidade");
	var uf = document.getElementById("uf");
	
	
	if(name.value == "" || name.value.length < 10 || name.value.length > 80 ) {
		
		alert("O nome deve ser digitado e ter no minimo 10  e no maximo 80 caracteres.");
		document.getElementById("name").value='';
		return false;
	}
	
	if (cpf.value == "") {
		
		alert("Digite seu CPF");
		return false;
		
	}
	
	if(cel.value == "") {
		
		alert("Coloque seu número de contato, com do DD.");
		document.getElementById("cel").value='';
		return false;
		
	}
	
	if(cep.value == ""){
		
		alert("Informe seu cep");
		document.getElementById("cep").value='';
		return false;
	}
	
	if(rua.value == ""){
		
		alert("Informe sua rua");
		document.getElementById("rua").value='';
		return false;
	}
	
	if(num.value == ""){
		
		alert("Informe o número da casa");
		document.getElementById("num").value='';
		return false;
	}
	
	if(compl.value == ""){
		
		alert("Informe um complemento");
		document.getElementById("compl").value='';
		return false;
	}
	
	
	if(bairro.value == ""){
		
		alert("Informe seu bairro");
		document.getElementById("bairro").value='';
		return false;
	}
	
	if(cidade.value == ""){
		
		alert("Informe sua cidade");
		document.getElementById("cidade").value='';
		return false;
	}
	
	if(uf.value == ""){
		
		alert("Informe seu Estado");
		document.getElementById("uf").value='';
		return false;
	}
	
	
	alert("Formulário enviado");
	text_json();
}


   function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
	
function text_json () {
	
	var obj_form = {
		
		nome: "",
		cpf: "",
		cel: "",
		cep: "",
		rua: "",
		num: "",
		compl: "",
		bairro: "",
		cidade: "",
		uf: "",
	}
	
	var el_nome = document. getElementById("nome");
	var el_cpf = document.getElementById("cpf");
	var el_cel = document.getElementById("cel");
	var el_cep = document.getElementById("cep");
	var el_rua = document.getElementById("rua");
	var el_num = document.getElementById("num");
	var el_compl = document.getElementById("compl");
	var el_bairro = document.getElementById("bairro");
	var el_cidade = document.getElementById("cidade");
	var el_uf = document.getElementById("uf");
	
	obj_form.nome = el_nome.value;
	obj_form.cpf = el_cpf.value;
	obj_form.cep = el_cep.value;
	obj_form.rua = el_rua.value;
	obj_form.num = el_num.value;
	obj_form.compl = el_compl.value;
	obj_form.bairro = el_bairro.value;
	obj_form.cidade = el_cidade.value;
	obj_form.uf = el_uf.value;
	
	
	var json = JSON.stringify(obj_form);
	document.write("<h1>JSON</h1>");
	document.write(json);
	
}
	

