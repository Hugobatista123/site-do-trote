function calcular (){
    let acaoSocial = document.getElementById("acaoSocial").value

    let homenagem = document.getElementById ("homenagem").value

    let leite = document.getElementById("leite").value

    let kitavulso = document.getElementById("kitavulso").value

    let latadesup = document.getElementById("latadesup").value

    let soma = Number(acaoSocial) + Number(homenagem) + ( 2 * leite) + (30 * kitavulso) + (15 * latadesup)

    document.getElementById("soma").innerHTML = soma.toFixed(2)
  }