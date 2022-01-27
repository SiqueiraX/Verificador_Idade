var btn = window.document.querySelector("input#btn")
    btn.addEventListener("click", verificar)
    function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = window.document.querySelector("input#txtano")
        var res = window.document.getElementById("res")

        if (fano.value.length == 0 || fano.value > ano) {
            window.alert("Pera aí bro, olha os dados dnv pq deu erro!")
        } else {
            var fsex = window.document.getElementsByName("radsex")
            var idade = ano - Number(fano.value)
            var genero = ""
            var img = window.document.createElement('img')
            img.setAttribute('id', 'foto')

            if (fsex[0].checked) {
                genero = "Homem"
                window.document.body.style.backgroundColor = "#018cec"
                if (idade >= 0 && idade < 10) {
                    //bb
                    img.setAttribute('src', 'homem_bb.png')
                } else if (idade >= 10 && idade < 20) {
                    //jovem
                    img.setAttribute('src', 'homem_jovem.png')
                } else if (idade >= 20 && idade < 65) {
                    //adulto
                    img.setAttribute('src', 'homem_adulto.png')
                } else {
                     //idoso
                    img.setAttribute('src', 'homem_idoso.png')
                }
            } else if (fsex[1].checked) {
                genero = "Mulher"
                window.document.body.style.backgroundColor = "#ed00a2"
                if (idade >= 0 && idade < 10) {
                    //bb
                    img.setAttribute("src", "mulher_bb.png")
                } else if (idade >= 10 && idade < 20) {
                    //jovem
                    img.setAttribute("src", "mulher_jovem.png")
                } else if (idade >= 20 && idade < 65) {
                    //adulto
                    img.setAttribute("src", "mulher_adulta.png")
                } else {
                    //idoso
                    img.setAttribute("src", "mulher_idosa.png")
                }
            }

            res.innerHTML = `${idade} ${genero}`
            res.appendChild(img)
        }
    }