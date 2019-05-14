function clickPassei(materia){
    this.materia = document.getElementById(materia) 
    
    // Verde forte
    this.materia.className = "verde-forte"
    // Verde fraco
    let materiasDesbloqueio = JSON.parse(this.materia.dataset.desbloqueia)
    if (materiasDesbloqueio[0] !== "")
    for (let e in materiasDesbloqueio){
        document.getElementById(materiasDesbloqueio[e]).className = "verde-fraco"
    }
    // Voltar cores ao normal caso tenha sido antes bloqueado
    let materiasNormal = JSON.parse(this.materia.dataset.bloqueia)
    for (let e in materiasNormal){
        if ((document.getElementById(materiasNormal[e]).className !== "verde-fraco" &&
        document.getElementById(materiasNormal[e]).className !== "verde-forte")){
            // Checa se algum requisito dessa matéria já não está "perdido", ou seja, vermelho forte ou vermelho fraco
            let materiaRequisito = JSON.parse(document.getElementById(materiasNormal[e]).dataset.prerequisites)
            for (let i in materiaRequisito){
                if (document.getElementById(materiaRequisito[i]).className === "normal")
                document.getElementById(materiasNormal[e]).className = "normal"
            }
        }
    }
}

function clickPerdi(materia){
    this.materia = document.getElementById(materia)

    // Vermelho forte
    this.materia.className = "vermelho-forte"
    // Vermelho fraco
    let materiasBloqueio = JSON.parse(this.materia.dataset.bloqueia)
    for (let e in materiasBloqueio){
        document.getElementById(materiasBloqueio[e]).className = "vermelho-fraco"
    }
}