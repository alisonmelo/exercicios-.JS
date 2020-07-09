function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Nesse exato momento é ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = `manha.png`
        document.body.style.backgroundColor = "#fdd0a1"
        msg.innerHTML += `Bom dia! ;D`
    } else if (hora >= 12 && hora < 18) {
        img.src = `tarde.png`
        document.body.style.backgroundColor = "#bcd6ed"
        msg.innerHTML += `Boa Tarde! :P`
    } else {
        img.src = `noite.png`
        document.body.style.backgroundColor = "#0b2a4c"
        msg.innerHTML += `Boa Noite! zzzZZZz`
    }


}