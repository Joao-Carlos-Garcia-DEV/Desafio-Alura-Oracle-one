let texto = ''
let text_cript = ''

function criptografar () {
  verifica_texto()

  if (text_cript != '') {
    return
  }

  ocultarImagem()

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a') {
      text_cript += 'ai'
    } else if (texto[i] == 'e') {
      text_cript += 'enter'
    } else if (texto[i] == 'i') {
      text_cript += 'imes'
    } else if (texto[i] == 'o') {
      text_cript += 'ober'
    } else if (texto[i] == 'u') {
      text_cript += 'ufat'
    } else text_cript += texto[i]
  }

  exibirTextoNaTela('.msg_cript', text_cript)

  mostrarBotao()
}
function descriptografar () {
  verifica_texto()

  if (text_cript != '') {
    return
  }

  ocultarImagem()

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == 'a' && texto[i + 1] == 'i') {
      text_cript += 'a'
      i++
    } else if (
      texto[i] == 'e' &&
      texto[i + 1] == 'n' &&
      texto[i + 2] == 't' &&
      texto[i + 3] == 'e' &&
      texto[i + 4] == 'r'
    ) {
      text_cript += 'e'
      i += 4
    } else if (
      texto[i] == 'i' &&
      texto[i + 1] == 'm' &&
      texto[i + 2] == 'e' &&
      texto[i + 3] == 's'
    ) {
      text_cript += 'i'
      i += 3
    } else if (
      texto[i] == 'o' &&
      texto[i + 1] == 'b' &&
      texto[i + 2] == 'e' &&
      texto[i + 3] == 'r'
    ) {
      text_cript += 'o'
      i += 3
    } else if (
      texto[i] == 'u' &&
      texto[i + 1] == 'f' &&
      texto[i + 2] == 'a' &&
      texto[i + 3] == 't'
    ) {
      text_cript += 'u'
      i += 3
    } else {
      text_cript += texto[i]
    }
  }

  exibirTextoNaTela('.msg_cript', text_cript)

  mostrarBotao()
}

function verifica_texto () {
  exibirTextoNaTela('h3', '')

  text_cript = ''

  texto = document.getElementById('textarea1').value

  if (verificarMaiusculas(texto)) {
    text_cript = 'NNNNNNN'
    exibirTextoNaTela('h3', 'Atenção ! Apenas letras minúsculas e sem acento')
  }

  if (verificarAcentosOuEspeciais(texto)) {
    text_cript = 'NNNNNNN'
    exibirTextoNaTela('h3', 'Atenção ! Apenas letras minúsculas e sem acento')
  }
}

function verificarMaiusculas (text1) {
  return /[A-Z]/.test(text1)
}

function verificarAcentosOuEspeciais (text1) {
  return /[áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    text1
  )
}

function exibirTextoNaTela (tag, msg_error) {
  let campo = document.querySelector(tag)
  campo.innerHTML = msg_error
}

function mostrarBotao () {
  var botao = document.getElementById('copiar')
  botao.style.display = 'block'
  document.getElementById('copiar').disabled = false
}

function ocultarBotao () {
  var botao = document.getElementById('copiar')
  botao.style.display = 'none' // Altera a propriedade 'display' para 'none' para tornar o botão invisível
}

function copiar () {
  navigator.clipboard
    .writeText(text_cript)
    .then(function () {})
    .catch(function (error) {})

  exibirTextoNaTela('.msg_cript', '')
  ocultarBotao()
  exibirImagem()
}

function ocultarImagem () {
  var imagem = document.getElementById('img')
  imagem.style.display = 'none'
}

function exibirImagem () {
  var imagem = document.getElementById('img')
  imagem.style.display = 'block'
}

function tela_inicial() {
  exibirImagem()
  ocultarBotao()
  exibirTextoNaTela('.msg_cript', "")

}