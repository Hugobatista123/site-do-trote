function calcular() {
    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    let homenagem = Number(document.getElementById("homenagem").value);
    let leite = Number(document.getElementById("leite").value);
    let kit = Number(document.getElementById("kit").value);
    let latadesup = Number(document.getElementById("latadesup").value);
    let sangue = Number(document.getElementById("sangue").value);
    let equipe = document.getElementById("equipe").value;
    let arroz = Number(document.getElementById("arroz").value);
    let arroz1 = Number(document.getElementById("arroz 1").value);
    let feijao = Number(document.getElementById("feijao").value);
    let feijao1 = Number(document.getElementById("feijao1").value);
    let macarrao = Number(document.getElementById("macarrao").value);
    let oleo = Number(document.getElementById("oleo").value);
    let pontosKit = 0;
    let pontosSangue = 0;
    // Cálculo dos pontos do kit e lata de suplemento
    if (equipe == "Laranja") {
        if (kit >= 97 && latadesup >= 49) {
            pontosKit = 5000 + ((kit - 97) * 30) + ((latadesup - 49) * 15);
        } else if (kit >= 78 && latadesup >= 39) {
            pontosKit = 4000 + ((kit - 78) * 30) + ((latadesup - 39) * 15);
        } else if (kit >= 49 && latadesup >= 25) {
            pontosKit = 2500 + ((kit - 49) * 30) + ((latadesup - 25) * 15);
        } else if (kit >= 19 && latadesup >= 10) {
            pontosKit = 1000 + ((kit - 19) * 30) + ((latadesup - 10) * 15);
        }
    } else if (equipe == "Preta") {
        if (kit >= 103 && latadesup >= 52) {
            pontosKit = 5000 + ((kit - 103) * 30) + ((latadesup - 52) * 15);
        } else if (kit >= 82 && latadesup >= 42) {
            pontosKit = 4000 + ((kit - 82) * 30) + ((latadesup - 42) * 15);
        } else if (kit >= 52 && latadesup >= 26) {
            pontosKit = 2500 + ((kit - 52) * 30) + ((latadesup - 26) * 15);
        } else if (kit >= 21 && latadesup >= 10) {
            pontosKit = 1000 + ((kit - 21) * 30) + ((latadesup - 10) * 15);
        }
    } else if (equipe == "Roxa") {
        if (kit >= 102 && latadesup >= 51) {
            pontosKit = 5000 + ((kit - 102) * 30) + ((latadesup - 51) * 15);
        } else if (kit >= 82 && latadesup >= 41) {
            pontosKit = 4000 + ((kit - 82) * 30) + ((latadesup - 41) * 15);
        } else if (kit >= 51 && latadesup >= 26) {
            pontosKit = 2500 + ((kit - 51) * 30) + ((latadesup - 26) * 15);
        } else if (kit >= 20 && latadesup >= 10) {
            pontosKit = 1000 + ((kit - 20) * 30) + ((latadesup - 10) * 15);
        }
    } else if (equipe == "Verde") {
        if (kit >= 88 && latadesup >= 44) {
            pontosKit = 5000 + ((kit - 88) * 30) + ((latadesup - 44) * 15);
        } else if (kit >= 70 && latadesup >= 35) {
            pontosKit = 4000 + ((kit - 70) * 30) + ((latadesup - 35) * 15);
        } else if (kit >= 44 && latadesup >= 22) {
            pontosKit = 2500 + ((kit - 44) * 30) + ((latadesup - 22) * 15);
        } else if (kit >= 18 && latadesup >= 9) {
            pontosKit = 1000 + ((kit - 18) * 30) + ((latadesup - 9) * 15);
        }
    } else { // Vermelha
        if (kit >= 97 && latadesup >= 49) { // Assumindo os mesmos valores que Laranja
            pontosKit = 5000 + ((kit - 97) * 30) + ((latadesup - 49) * 15);
        } else if (kit >= 78 && latadesup >= 39) {
            pontosKit = 4000 + ((kit - 78) * 30) + ((latadesup - 39) * 15);
        } else if (kit >= 49 && latadesup >= 25) {
            pontosKit = 2500 + ((kit - 49) * 30) + ((latadesup - 25) * 15);
        } else if (kit >= 19 && latadesup >= 10) {
            pontosKit = 1000 + ((kit - 19) * 30) + ((latadesup - 10) * 15);
        }
    }
    
    // Cálculo dos pontos de doação de sangue
    if (equipe == "Laranja") {
        pontosSangue = (sangue >= 49) ? 2500 + (sangue - 49) * 20 : sangue * 20;
    } else if (equipe == "Preta") {
        pontosSangue = (sangue >= 52) ? 2500 + (sangue - 52) * 20 : sangue * 20;
    } else if (equipe == "Roxa") {
        pontosSangue = (sangue >= 51) ? 2500 + (sangue - 51) * 20 : sangue * 20;
    } else if (equipe == "Verde") {
        pontosSangue = (sangue >= 44) ? 2500 + (sangue - 44) * 20 : sangue * 20;
    } else { // Vermelha
        pontosSangue = (sangue >= 47) ? 2500 + (sangue - 47) * 20 : sangue * 20;
    }
    
    // Cálculo da soma total
    let soma = Number(acaoSocial) + Number(homenagem) + (2 * leite) + (pontosKit) + (15 * latadesup) + (5 * arroz) + Number(arroz1) + (2 * feijao) + Number(feijao1) + Number(0.5 * macarrao) + Number(oleo) + Number(pontosSangue)
    // devolve o resultado para o HTML
    
    // Exibição do resultado
    document.getElementById("soma").innerHTML = soma.toFixed(2);
}