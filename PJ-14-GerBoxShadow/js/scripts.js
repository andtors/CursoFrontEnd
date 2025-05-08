class BoxShadowGenerator {
    constructor(
        horizontal, 
        horizontalRef,
        vertical, 
        verticalRef, 
        blur, 
        blurRef,
        spread,
        spreadRef,
        rgb,
        opacity,
        opacityRef,
        inset,
        previewBox,
        rule,
        webKitRule,
        mozRule
    ){
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef 
        this.vertical = vertical
        this.verticalRef = verticalRef 
        this.blur = blur
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.rgb = rgb
        this.opacity = opacity
        this.opacityRef = opacityRef
        this.inset = inset
        this.insetRef = inset.checked
        this.previewBox = previewBox
        this.rule = rule
        this.webKitRule = webKitRule
        this.mozRule = mozRule   
    }
    
    initialize(){

        const randomizedObjects =  this.randomize()
       
        this.horizontal.value = randomizedObjects.horizontalRandom
        this.vertical.value = randomizedObjects.verticalRandom
        this.blur.value = randomizedObjects.blurRandom
        this.spread.value = randomizedObjects.spreadRandom
        this.opacity.value = randomizedObjects.opacityRandom

        this.horizontalRef.value = randomizedObjects.horizontalRandom 
        this.verticalRef.value = randomizedObjects.verticalRandom
        this.blurRef.value = randomizedObjects.blurRandom
        this.spreadRef.value = randomizedObjects.spreadRandom
        this.opacityRef.value = randomizedObjects.opacityRandom

        const rgbValue = this.hexToRgb(randomizedObjects.randomizedColor)
        
        this.rgb = rgbValue

        this.applyRule()
        this.showRule()
    }

    applyRule() {
        
        const shadowRule = `${this.insetRef ? "inset" : ""} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.opacityRef.value})` 
        this.previewBox.style.boxShadow = shadowRule
        this.currentRule = shadowRule
    }

    showRule() {
        this.rule.innerText = this.currentRule
        this.webKitRule.innerText = this.currentRule
        this.mozRule.innerText = this.currentRule
    }

    hexToRgb(hex) {
      
        // Suporta formato curto (#abc)
        if (hex.length === 3) {
          hex = hex.split('').map(c => c + c).join('');
        }
    
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
      
        const rgba = {
            r,
            g,
            b
        }

        return rgba;
      }

    randomize() {
        const horizontalRandom = Math.floor(Math.random() * 100)
        const verticalRandom = Math.floor(Math.random() * 100)
        const blurRandom = Math.floor(Math.random() * 10)
        const spreadRandom = Math.floor(Math.random() * 100)
        const randomizedColor = Math.floor(Math.random() * 999999) 
        const opacityRandom =  (Math.random() * 1).toFixed(2)


        const randomizedObjects = {
            horizontalRandom,
            verticalRandom,
            blurRandom,
            spreadRandom,
            randomizedColor,
            opacityRandom
        }

        return randomizedObjects
    }

    updateValue(type, value){
        switch(type){
            case "horizontal":
                this.horizontalRef.value = value
                break;
            case "vertical":
                this.verticalRef.value = value
                break;
            case "blur":
                this.blurRef.value = value
                break;
            case "spread":
                this.spreadRef.value = value
                break;
            case "rgb":
                const rgbValue = this.hexToRgb(value)
                this.rgb = rgbValue
                break;
            case "opacity":
                this.opacityRef.value = value
                break;
            case "inset":
                this.insetRef = value
                break;
        }

        this.applyRule()
        this.showRule()
    }
    
}

const horizontal = document.querySelector("#horizontal")
const horizontalRef = document.querySelector("#horizontal-value")
const vertical = document.querySelector("#vertical")
const verticalRef= document.querySelector("#vertical-value")
const blur = document.querySelector("#blur")
const blurRef = document.querySelector("#blur-value")
const spread = document.querySelector("#spread")
const spreadRef = document.querySelector("#spread-value")
const rgb = document.querySelector("#rgb-value")
const opacity = document.querySelector("#opacity")
const opacityRef = document.querySelector("#opacity-value")
const inset = document.querySelector("#inset")
const previewBox = document.querySelector("#box")
const rule = document.querySelector("#rule span")
const webKitRule = document.querySelector("#webkit-rule span")
const mozRule = document.querySelector("#moz-rule span")
const randomBtn = document.querySelector("#random-btn")

const boxShadow = new BoxShadowGenerator (
    horizontal, 
    horizontalRef,
    vertical, 
    verticalRef, 
    blur, 
    blurRef,
    spread,
    spreadRef,
    rgb,
    opacity,
    opacityRef,
    inset,
    previewBox,
    rule,
    webKitRule,
    mozRule
) 

boxShadow.initialize()

boxShadow.randomize()

randomBtn.addEventListener("click", () => {
    boxShadow.initialize()
})

rgb.addEventListener("keyup", (e) => {
    let value = e.target.value
    boxShadow.updateValue("rgb", value)
})

horizontal.addEventListener("input", (e) =>{
    const value = e.target.value
    boxShadow.updateValue("horizontal", value)
})

vertical.addEventListener("input", (e) =>{
    const value = e.target.value
    boxShadow.updateValue("vertical", value)
})

blur.addEventListener("input", (e) =>{
    const value = e.target.value
    boxShadow.updateValue("blur", value)
})

spread.addEventListener("input", (e) =>{
    const value = e.target.value
    boxShadow.updateValue("spread", value)
})

opacity.addEventListener("input", (e) =>{
    const value = e.target.value
    boxShadow.updateValue("opacity", value)
})

inset.addEventListener("input", (e) =>{
    const value = e.target.checked
    boxShadow.updateValue("inset", value)
})

const rulesArea = document.querySelector("#rules-area")
const copyInstructions = document.querySelector("#copy-instructions")

rulesArea.addEventListener("click", () => {
    const rules = rulesArea.innerText.replace(/^\s*\n/gm, "")

    navigator.clipboard.writeText(rules).then(() => {
        copyInstructions.innerText = "Regra copiado com sucesso!"

        setTimeout(() => {
            copyInstructions.innerText = "Clique no quadro acima para copiar as regras"
        }, 2000);
    })
})