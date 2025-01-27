const modal = document.querySelector("#modal");
const fundoPreto = document.querySelector("#tela")
const body = document.body

function abrirFechar() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("modal-open");

    fundoPreto.classList.toggle("fundoPreto")
    body.classList.toggle("travarRolagem")

    

    ajusteFundo();
}

function ajusteFundo() {
    if(fundoPreto.classList.contains('fundoPreto')){
        fundoPreto.classList.remove("fundoPreto")
        body.classList.remove("travarRolagem")
    } else{
        fundoPreto.classList.add("fundoPreto")
        body.classList.add("travarRolagem")
    }
}

document.querySelector("#grid-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !telefone || !cpf || !senha) {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        window.alert("Seu cadastro foi realizado com sucesso!")
        abrirFechar();
    }
});


const form = document.getElementById("grid-form");
form.addEventListener("submit", validarFormulario);

function nomeDigitado(){
    var nome_formatado = document.getElementById("nome").value
    localStorage.setItem("nome", nome_formatado)
}

function emailDigitado(){
    var email_formatado = document.getElementById("email").value
    localStorage.setItem("email", email_formatado)
}

function senhaDigitado(){
    var senha_formatado = document.getElementById("senha").value
    localStorage.setItem("senha", email_formatado)
}

function mascara_telefone()
{    
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
    localStorage.setItem("telefone", tel_formatado)
}

function mascara_cpf()
{ var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3]!=".")
    {
        if (cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7]!=".")
    {
        if (cpf_formatado[7]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11]!="-")
    {
        if(cpf_formatado[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,11) + "-" + cpf_formatado[11]
        }
    }
    localStorage.setItem("cpf", cpf_formatado)
}




function abrirMenu() {
    let menu = document.querySelector('#header_mobile');
    
    menu.classList.remove('menu-close')
    menu.classList.add('menu-open')
    fundoPreto.classList.add("fundoPreto")
    body.classList.add("travarRolagem")
}

function fecharMenu() {
    let menu = document.querySelector('#header_mobile');

    menu.classList.add('menu-close')
    menu.classList.remove('menu-open')
    fundoPreto.classList.remove("fundoPreto")
    body.classList.remove("travarRolagem")

    modal.classList.remove("modal-open")
}