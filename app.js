function clickPassei(materia){
    this.materia = document.getElementById(materia) 
    
    // Verde forte
    this.materia.className = "verde-forte"
    // Verde fraco
    let materiasDesbloqueio = JSON.parse(this.materia.dataset.desbloqueia)
    for (let e in materiasDesbloqueio){
        document.getElementById(materiasDesbloqueio[e]).className = "verde-fraco"
    }
    check()
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

function check(){
    // Desbloquear MATA95
    if (MATA01_button.className === "verde-forte" &&
        MATA02_button.className === "verde-forte"){
        MATA95_button.className = "verde-fraco"
    }

    // Desbloquear MATA40
    if (MATA37_button.className === "verde-forte" &&
        MATA42_button.className === "verde-forte"){
        MATA40_button.className === "verde-fraco"
    }

    // Desbloquear MAT236
    if (MATA42_button.className === "verde-forte" &&
        MATA95_button.className === "verde-forte"){
        MAT236_button.className === "verde-fraco"
    }

    // Desbloquear MATA49
    if (MATA40_button.className === "verde-forte" &&
        MATA48_button.className === "verde-forte" &&
        MATA57_button.className === "verde-forte"){
        MATA49_button.className === "verde-fraco"
    }

    // Desbloquear MATA51
    if (MATA47_button.className === "verde-forte" &&
        MATA50_button.className === "verde-forte"){
        MATA51_button.className === "verde-fraco"
    }

    // Desbloquear MATA61
    if (MATA49_button.className === "verde-forte" &&
        MATA50_button.className === "verde-forte"){
        MATA61_button.className === "verde-fraco"
    }

    // Desbloquear MATA64
    if (MATA47_button.className === "verde-forte" &&
        MATA53_button.className === "verde-forte" &&
        MATE12_button.className === "verde-forte"){
        MATA64_button.className === "verde-fraco" 
    }

    // Desbloquear MATA65
    if (MATA07_button.className === "verde-forte" &&
        MATA57_button.className === "verde-forte" &&
        MATA95_button.className === "verde-forte"){
        MATA65_button.className === "verde-fraco" 
    }

    // Desbloquear MATA88
    if (MATA58_button.className === "verde-forte" &&
        MATA59_button.className === "verde-forte"){
        MATA88_button.className === "verde-fraco"
    }
}

function checkColor(){
    // MATA40
    if (!(MATA37_button.className === "vermelho-forte") &&
        !(MATA37_button.className === "vermelho-fraco") &&
        !(MATA42_button.className === "vermelho-forte") &&
        !(MATA42_button.className === "vermelho-fraco")){
        MATA40_button.className = "normal"
    }

    // MATA48
    if (!(MATA38_button.className === "vermelho-forte") &&
        !(MATA38_button.className === "vermelho-fraco")){
        MATA48_button.className = "normal"
    }

    // MATA57
    if (!(MATA37_button.className === "vermelho-forte") &&
        !(MATA37_button.className === "vermelho-fraco")){
        MATA57_button.className = "normal"
    }

    // MATA95
    if (!(MATA01_button.className === "vermelho-forte") &&
        !(MATA01_button.className === "vermelho-fraco") &&
        !(MATA02_button.className === "vermelho-forte") &&
        !(MATA02_button.className === "vermelho-fraco")){
        MATA95_button.className = "normal"
    }

    // MATA97
    if (!(MATA42_button.className === "vermelho-forte") &&
        !(MATA42_button.className === "vermelho-fraco")){
        MATA97_button.className = "normal"
    }

    // FISA75
    if (!(MATA95_button.className === "vermelho-forte") &&
        !(MATA95_button.className === "vermelho-fraco")){
        FISA75_button.className = "normal"
    }

    // MAT236
    if (!(MATA42_button.className === "vermelho-forte") &&
        !(MATA42_button.className === "vermelho-fraco") &&
        !(MATA95_button.className === "vermelho-forte") &&
        !(MATA95_button.className === "vermelho-fraco")){
        MAT236_button.className = "normal"
    }

    // MATA47
    if (!(MATA97_button.className === "vermelho-forte") &&
        !(MATA97_button.className === "vermelho-fraco")){
        MATA47_button.className = "normal"
    }

    // MATA49
    if (!(MATA40_button.className === "vermelho-forte") && 
        !(MATA40_button.className === "vermelho-fraco") && 
        !(MATA48_button.className === "vermelho-forte") &&
        !(MATA48_button.className === "vermelho-fraco") &&
        !(MATA57_button.className === "vermelho-forte") &&
        !(MATA57_button.className === "vermelho-fraco")){
        MATA49_button.className = "normal"
    }

    // MATA50
    if (!(MATA42_button.className === "vermelho-forte") &&
        !(MATA42_button.className === "vermelho-fraco")){
        MATA50_button.className = "normal"
    }
    
    // MATA55 && MATA52
    if (!(MATA40_button.className === "vermelho-forte") &&
        !(MATA40_button.className === "vermelho-fraco")){
        MATA55_button.className = "normal"
        MATA52_button.className = "normal"
    }

    // MATA51
    if (!(MATA47_button.className === "vermelho-forte") &&
        !(MATA47_button.className === "vermelho-fraco") &&
        !(MATA50_button.className === "vermelho-forte") &&
        !(MATA50_button.className === "vermelho-fraco")){
        MATA51_button.className = "normal"
    }
    
    // MATA58 && MATA59
    if (!(MATA49_button.className === "vermelho-forte") &&
        !(MATA49_button.className === "vermelho-fraco")){
        MATA58_button.className = "normal"
        MATA59_button.className = "normal"
    }

    // MATA61
    if (!(MATA49_button.className === "vermelho-forte") &&
        !(MATA49_button.className === "vermelho-fraco") &&
        !(MATA50_button.className === "vermelho-forte") &&
        !(MATA50_button.className === "vermelho-fraco")){
        MATA61_button.className = "normal"
    }

    // MATA53 && MATA54
    if (!(MATA42_button.className === "vermelho-forte") &&
        !(MATA42_button.className === "vermelho-fraco")){
        MATA53_button.className = "normal"
        MATA54_button.className = "normal"
    }

    // MATA62 && MATA12
    if (!(MATA55_button.className === "vermelho-forte") &&
        !(MATA55_button.className === "vermelho-fraco")){
        MATA62_button.className = "normal"
        MATE12_button.className = "normal"
    }

    // MATA60
    if (!(MATA54_button.className === "vermelho-forte") &&
        !(MATA54_button.className === "vermelho-fraco")){
        MATA60_button.className = "normal"
    }

    // MATA64
    if (!(MATA47_button.className === "vermelho-forte") && 
        !(MATA47_button.className === "vermelho-fraco") && 
        !(MATA53_button.className === "vermelho-forte") &&
        !(MATA53_button.className === "vermelho-fraco") &&
        !(MATE12_button.className === "vermelho-forte") &&
        !(MATE12_button.className === "vermelho-fraco")){
        MATA64_button.className = "normal"
    }

    // MATA65
    if (!(MATA07_button.className === "vermelho-forte") && 
        !(MATA07_button.className === "vermelho-fraco") && 
        !(MATA57_button.className === "vermelho-forte") &&
        !(MATA57_button.className === "vermelho-fraco") &&
        !(MATA95_button.className === "vermelho-forte") &&
        !(MATA95_button.className === "vermelho-fraco")){
        MATA65_button.className = "normal"
    }

    // MATA88
    if (!(MATA58_button.className === "vermelho-forte") &&
        !(MATA59_button.className === "vermelho-fraco")){
        MATA88_button.className = "normal"
    }

    // MATE11
    if (!(MATA62_button.className === "vermelho-forte") &&
        !(MATA62_button.className === "vermelho-fraco")){
        MATE11_button.className = "normal"
    }

    // MATA66
    if (!(FCHC45_button.className === "vermelho-forte") &&
        !(FCHC45_button.className === "vermelho-fraco")){
        MATA66_button.className = "normal"
    }

    // MATA67
    if (!(MATA66_button.className === "vermelho-forte") &&
        !(MATA66_button.className === "vermelho-fraco")){
        MATA67_button.className = "normal"
    }
}