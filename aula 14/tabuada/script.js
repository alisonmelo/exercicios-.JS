function tabuada() {
    let num = document.getElementById("num")
    let tab = document.getElementById("tab")

    if (num.value.length == 0) {
        window.alert(`AVISO- Digite um número!`)
    } else {
        let numero = Number(num.value)
        let calculo = 1
        tab.innerHTML = ``
        while (calculo <= 10) { //aqui abaixo me embananei todo então ta igual ao guanabara.
            let item = document.createElement("option")
            item.text = `${numero} x ${calculo} = ${numero*calculo}`
            item.value = `value${calculo}`
            tab.appendChild(item)
            calculo++
        }

    }

}