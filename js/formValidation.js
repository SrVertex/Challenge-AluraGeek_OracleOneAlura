const camposDoFormulario = document.querySelectorAll("[required]")
const botaoEnviarMensagem = document.querySelector("[send-mensage]")
const botaoEntrar = document.querySelector("[data-entrar]")


if(window.location.pathname == "/pages/login.html") {
    botaoEntrar.classList.add('formulario__submit-desabilitado')
}

botaoEnviarMensagem.classList.add('formulario__submit-desabilitado')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () =>  validaCampo(campo))
})

function validaCampo(campo) {
    let formularioContatoValido = true
    let formularioLoginValido = true

    const campoDeErro = campo.nextElementSibling
    campoDeErro.textContent = ""
    
    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            campoDeErro.textContent = mensagens[campo.name][erro]
        }
    })

    camposDoFormulario.forEach(campo => {
        tiposDeErro.forEach((erro) => {
            if (!(campo.name == "email" || campo.name == "senha"))
            {
                if (campo.validity[erro]){
                    formularioContatoValido = false;
                }
            }
            if (campo.name == "email" || campo.name == "senha")
            {
                if (campo.validity[erro]){
                    formularioLoginValido = false;
                }
            }
        })
    })
    
    if(window.location.pathname == "/pages/login.html") {
        verificaFormulario(botaoEntrar, formularioLoginValido)
    }
    verificaFormulario(botaoEnviarMensagem, formularioContatoValido)
}















function verificaFormulario(botao, formulario) {
    if (formulario == true) {
        botao.classList.remove('formulario__submit-desabilitado')
        botao.classList.add('formulario__submit-habilitado')
        botao.disabled = false
    } else {
        botao.classList.remove('formulario__submit-habilitado')
        botao.classList.add('formulario__submit-desabilitado')
        botao.disabled = true
    }
}

const tiposDeErro = [
    'valueMissing',
    'tooLong',
    'tooShort',
    'typeMismatch'
]









const mensagens = {
    mensagem: {
        valueMissing: 'Este Campo nao pode ficar em branco.',

        tooLong: "Excedeu o limite de caracteres.",

        tooShort: "Nao contem caracteres suficientes.",

    },


    email: {
        valueMissing: "Este Campo nao pode ficar em branco.",

        tooShort: "Insira um Email valido.",

        typeMismatch: "Insira um Email valido",
    },

    nome: {
        valueMissing: "Este Campo nao pode ficar em branco.",

        tooLong: "Esse nome esta grande demais.",

        tooShort: "Coloque um nome valido.",

    },

    senha: {
        valueMissing: 'Este Campo nao pode ficar em branco.',

        tooShort: "A senha esta curta demais, o minimo permitido sao 4 digitos.",
        
    },


}