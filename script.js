function carregar() {
    msg = document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    msg.innerHTML 
    if (hora >= 0 && hora < 12) {
        // dia
        img.src = "fotomanha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        // tarde
        img.src = "fototarde.png"
        document.body.style.background = "#b9846f"
    } else {
        // noite
        img.src = "fotonoite.png"
        document.body.style.background = "#515154"
    }
}
