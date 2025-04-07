function calcular (){

    let acaoSocial = Number(document.getElementById("acaoSocial").value)

    let homenagem = Number(document.getElementById ("homenagem").value)

    let leite = Number(document.getElementById("leite").value)

    let kit = Number(document.getElementById("kit").value)

    let latadesup = Number(document.getElementById("latadesup").value)

    let sangue = Number(document.getElementById("sangue").value)

    let equipe = (document.getElementById("equipe").value)
    
    let pontoskit = 0

    if (equipe == "Laranja"){

    if (kit >= 97 && latadesup >= 49) {

      kit = 5000 + ((kit - 97) * 30) + ((latadesup- 49) * 15)
  }
  else if (kit >= 78 && latadesup >= 39){
      kit =  4000 + ((kit - 78) * 30) + ((latadesup - 39) * 15)
  }
  else if (kit >= 49 && latadesup >= 25) {
      kit = 2500 + ((kit - 49) * 30) + ((latadesup - 25) * 15)
  }
  else if (kit >= 19 && latadesup >= 10){
      kit = 1000 + ((kit - 19) * 30) + ((latadesup - 10) * 15)
  }
  if (equipe == "Preta"){
      let pontoskit1 = 0
    if (kit >= 103 && latadesup >= 52) {
      kit = 5000 + ((kit - 103) * 30) + ((latadesup - 52) * 15)
  }
  else if (kit >= 82 && latadesup >= 42){
      kit =  4000 + ((kit - 82) * 30) + ((latadesup - 42) * 15)
  }
  else if (kit >= 52 && latadesup >= 26) {
      kit = 2500 + ((kit - 52) * 30) + ((latadesup - 26) * 15)
  }
  else if (kit >= 21 && latadesup >= 10){
      kit = 1000 + ((kit - 21) * 30) + ((latadesup - 10) * 15)
  }
}
    }
    if (equipe == "Roxa"){
  let pontoskit2 = 0
if (equipe == "Roxa")
  if (kit >= 102 && latadesup >= 51) {
    kit = 5000 + ((kit - 102) * 30) + ((latadesup - 51) * 15)
}
else if (kit >= 82 && latadesup >= 41){
    kit =  4000 + ((kit - 82) * 30) + ((latadesup - 41) * 15)
}
else if (kit >= 51 && latadesup >= 26) {
    kit = 2500 + ((kit - 51) * 30) + ((latadesup - 26) * 15)
}
else if (kit >= 20 && latadesup >= 10){
    kit = 1000 + ((kit - 20) * 30) + ((latadesup - 10) * 15)
}
  }
    if (equipe == "Verde"){
      let pontoskit3 = 0
      if (kit >= 88 && latadesup >= 44) {
        kit = 5000 + ((kit - 88) * 30) + ((latadesup - 44) * 15)
    }
    else if (kit >= 70 && latadesup >= 35){
        kit =  4000 + ((kit - 70) * 30) + ((latadesup - 35) * 15)
    }
    else if (kit >= 44 && latadesup >= 22) {
        kit = 2500 + ((kit - 44) * 30) + ((latadesup - 22) * 15)
    }
    else if (kit >= 18 && latadesup >= 9){
        kit = 1000 + ((kit - 18) * 30) + ((latadesup - 9) * 15)
    }
    
    document.getElementById("soma").innerHTML = soma.toFixed(2)

    let soma = Number(acaoSocial) + Number(homenagem) + ( 2 * leite) + (30 * kit) + (15 * latadesup)
  }
}