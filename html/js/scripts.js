function calcular (){
    let acaoSocial = Number(document.getElementById("acaoSocial").value)

    let homenagem = Number(document.getElementById ("homenagem").value)

    let leite = Number(document.getElementById("leite").value)

    let kit = Number(document.getElementById("kit").value)

    let equipe = (document.getElementById("equipe").value)
    let pontoskit = 0
    if (equipe == "Laranja"){
      if (Number (kit) >= 97){
        pontoskit = 5000 +((kit - 97) * 30)
         if  ((kit) >= 78){
          pontoskit = 
        }
      }
    }
    let preta = (document.getElementById("preta").value)
    let pontoskit2 = 0
    if (equipe == "Preta"){
      if (kit) >=
    }

    let latadesup = document.getElementById("latadesup").value

    let soma = Number(acaoSocial) + Number(homenagem) + ( 2 * leite) + (30 * kit) + (15 * latadesup)

    document.getElementById("soma").innerHTML = soma.toFixed(2)
  }