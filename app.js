'use strict'

//Não tinhamos isso nas outras atividades, antes era um json
async function getDados(cep){ //funções aync são mais lentas por ter que esperar resposta
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    return data

    //console.log(data);
}

async function preencherFormulario (){
    // console.log('teste')
    const cep = document.getElementById('cep').value 
    const dadosCep = await getDados(cep) //Vai ir no back e trazer as informações
    
    document.getElementById('endereco').value = dadosCep.logradouro
    document.getElementById('bairro').value = dadosCep.bairro
    document.getElementById('cidade').value = dadosCep.localidade
    document.getElementById('estado').value = dadosCep.estado
    

    //Outra Forma é colocar parametro:
    //console.log(xyz) 
    
    //console.log(dadosCep);
    
}

document.getElementById('cep')
    .addEventListener('focusout', preencherFormulario) //2 parametros, 1 ação q quer capturar e a 2 oq fazer //
    //change, o sistema verificar cada digito, se coloco 1 ele vai na API e ve se tem...*
    //quem estarta preencherFormulario é o addEventListener (função CallBack)





