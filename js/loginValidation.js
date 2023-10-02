const formulario = document.querySelector("[data-form-login]")



const campoDeErro = document.querySelector("[data-login-invalido]")




formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    campoDeErro.textContent = ""


    

    const email = document.querySelector("[data-email]").value

    const senha = document.querySelector("[data-senha]").value


    const dados = {email, senha}

    if(dados.email == "teste@gmail.com" && dados.senha == "#Teste123") {



        window.location.href = "/pages/adminPanel.html";
    } else {


        campoDeErro.textContent = "A Senha esta incorreta!"
    }


})


