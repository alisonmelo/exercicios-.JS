function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.Value == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] POR FAVOR VERIFIQUE SE OS DADOS ESTÃO CORRETOS E TENTE NOVAMENTE")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute("src", "menino.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "moco.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adulto-m.png")
            } else {
                //idoso
                img.setAttribute("src", "senhor.png")
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute("src", "menina.png")
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute("src", "moca.png")
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute("src", "adulto-f.png")
            } else {
                //idoso
                img.setAttribute("src", "senhora.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos que vocé é ${genero}, e sua idade é: ${idade} ano(s).`
        res.appendChild(img)
    }
}