// Primeiro Semestre
const MATA01_button = document.getElementById("MATA01")
const MATA02_button = document.getElementById("MATA02")
const MATA37_button = document.getElementById("MATA37")
const MATA38_button = document.getElementById("MATA38")
const MATA39_button = document.getElementById("MATA39")
const MATA42_button = document.getElementById("MATA42")
let MATA01_status = 0
let MATA02_status = 0
let MATA37_status = 0
let MATA38_status = 0
let MATA39_status = 0
let MATA42_status = 0
// Segundo Semestre
const MATA07_button = document.getElementById("MATA07")
const MATA40_button = document.getElementById("MATA40")
const MATA48_button = document.getElementById("MATA48")
const MATA57_button = document.getElementById("MATA57")
const MATA95_button = document.getElementById("MATA95")
const MATA97_button = document.getElementById("MATA97")
let MATA07_status = 0
let MATA40_status = 0
let MATA48_status = 0
let MATA57_status = 0
let MATA95_status = 0
let MATA97_status = 0
// Terceiro Semestre
const FISA75_button = document.getElementById("FISA75")
const MAT236_button = document.getElementById("MAT236")
const MATA47_button = document.getElementById("MATA47")
const MATA49_button = document.getElementById("MATA49")
const MATA50_button = document.getElementById("MATA50")
const MATA55_button = document.getElementById("MATA55")
let FISA75_status = 0
let MAT236_status = 0
let MATA47_status = 0
let MATA49_status = 0
let MATA50_status = 0
let MATA55_status = 0
// Quarto Semestre
const FCHC45_button = document.getElementById("FCHC45")
const MATA51_button = document.getElementById("MATA51")
const MATA52_button = document.getElementById("MATA52")
const MATA58_button = document.getElementById("MATA58")
const MATA61_button = document.getElementById("MATA61")
const MATA68_button = document.getElementById("MATA68")
let FCHC45_status = 0
let MATA51_status = 0
let MATA52_status = 0
let MATA58_status = 0
let MATA61_status = 0
let MATA68_status = 0
// Quinto Semestre
const MATA53_button = document.getElementById("MATA53")
const MATA54_button = document.getElementById("MATA54")
const MATA59_button = document.getElementById("MATA59")
const MATA62_button = document.getElementById("MATA62")
const MATE12_button = document.getElementById("MATE12")
let MATA53_status = 0
let MATA54_status = 0
let MATA59_status = 0
let MATA62_status = 0
let MATE12_status = 0
// Sexto Semestre
const MATA60_button = document.getElementById("MATA60")
const MATA64_button = document.getElementById("MATA64")
const MATA65_button = document.getElementById("MATA65")
const MATA88_button = document.getElementById("MATA88")
const MATE11_button = document.getElementById("MATE11")
let MATA60_status = 0
let MATA64_status = 0
let MATA65_status = 0
let MATA88_status = 0
let MATE11_status = 0
// Sétimo Semestre
const MATA66_button = document.getElementById("MATA66")
let MATA66_status = 0
// Oitavo Semestre
const MATA67_button = document.getElementById("MATA67")
let MATA67_status = 0 

// Sem pré-requisitos
// FCHC45
FCHC45_button.className = "verde-fraco"
// MATA68
MATA68_button.className = "verde-fraco"

function clickMATA01(){
    MATA01_status++
    if (MATA01_status % 2 === 1){
        //Verde forte
        MATA01_button.className = "verde-forte"
        // Verde fraco
        MATA07_button.className = "verde-fraco"
        // Voltar para a cor original
        checkColor()
    } else {
        // Vermelho forte
        MATA01_button.className = "vermelho-forte"
        // Vermelho fraco
        MATA07_button.className = "vermelho-fraco"
        MATA95_button.className = "vermelho-fraco"
        FISA75_button.className = "vermelho-fraco"
        MAT236_button.className = "vermelho-fraco"
        MATA65_button.className = "vermelho-fraco"
    }
    check()
}

function clickMATA02(){
    MATA02_status++
    if (MATA02_status % 2 === 1){
        //Verde forte
        MATA02_button.className = "verde-forte"
        // Voltar para a cor original
        checkColor()
    } else {
        // Vermelho forte
        MATA02_button.className = "vermelho-forte"
        // Vermelho fraco
        MATA95_button.className = "vermelho-fraco"
        FISA75_button.className = "vermelho-fraco"
        MAT236_button.className = "vermelho-fraco"
        MATA65_button.className = "vermelho-fraco"
    }
    check()
}

function clickMATA37(){
    MATA37_status++
    if (MATA37_status % 2 === 1){
        // Verde forte
        MATA37_button.className = "verde-forte"
        // Verde fraco
        MATA57_button.className = "verde-fraco"
        // Voltar para a cor original
        checkColor()
    } else {
        // Vermelho forte
        MATA37_button.className = "vermelho-forte"
        // Vermelho fraco
        MATA40_button.className = "vermelho-fraco"
        MATA55_button.className = "vermelho-fraco"
        MATA62_button.className = "vermelho-fraco"
        MATE11_button.className = "vermelho-fraco"
        MATE12_button.className = "vermelho-fraco"
        MATA64_button.className = "vermelho-fraco"
        MATA57_button.className = "vermelho-fraco"
        MATA49_button.className = "vermelho-fraco"
        MATA58_button.className = "vermelho-fraco"
        MATA88_button.className = "vermelho-fraco"
        MATA59_button.className = "vermelho-fraco"
        MATA65_button.className = "vermelho-fraco"
    }
    check()
}

function clickMATA38(){
    MATA38_status++
    if (MATA38_status % 2 === 1){
        //Verde forte
        MATA38_button.className = "verde-forte"
        // Verde fraco
        MATA48_button.className = "verde-fraco"
        // Voltar para a cor original
        checkColor()
    } else {
        // Vermelho forte
        MATA38_button.className = "vermelho-forte"
        // Vermelho fraco
        MATA48_button.className = "vermelho-fraco"
        MATA49_button.className = "vermelho-fraco"
        MATA58_button.className = "vermelho-fraco"
        MATA88_button.className = "vermelho-fraco"
        MATA61_button.className = "vermelho-fraco"
        MATA59_button.className = "vermelho-fraco"
    }
    check()
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