function calculo() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let pular = document.getElementById("pular")


    if (inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0) {
        res.innerHTML = `Impossivel calcular faltam dados!!`
        window.alert(`ERRO - POR FAVOR VERIFIQUE OS DADOS!`)
    } else {
        let ini = Number(inicio.value)
        let fin = Number(fim.value)
        let pul = Number(pular.value)
        if (pul <= 0) {
            window.alert(`AVISO - VALOR DE PULO NÃO DEFINIDO, SERA CONSIDERADO O VALOR DE 1`)
            pul = 1
        }
        if (ini < fin) {
            //crescente
            for (let c = ini; c <= fin; c += pul) {
                res.innerHTML += `${c} \u{27A4}`
            }


        } else {
            //regressiva
            for (let c = ini; c >= fin; c -= pul) {
                res.innerHTML += `${c} \u{27A4}`
            }
        }
        res.innerHTML += `\u{2755}`
    }
}