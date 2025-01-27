addEventListener("DOMContentLoaded",()=>{
    const cpfrecebido = localStorage.getItem("cpf")
    document.getElementById("recebercpf").innerHTML = cpfrecebido

    const telrecebido = localStorage.getItem("telefone")
    document.getElementById("recebertel").innerHTML = telrecebido

    const nomerecebido = localStorage.getItem("nome")
    document.getElementById("recebernome").innerHTML = nomerecebido
    document.getElementById("loginAberto").innerHTML = nomerecebido

    const ceprecebido = localStorage.getItem("email")
    document.getElementById("receberemail").innerHTML = ceprecebido

    const enderecorecebido = localStorage.getItem("senha")
    document.getElementById("recebersenha").innerHTML = enderecorecebido
})
console.log(nomerecebido)

const nomeLogin = document.querySelector("#loginAberto")
nomeLogin.innerHTML = nomerecebido