
function salvarNome() {
    let nome = document.getElementById("nomeConvidado").value.trim();
    let confirmou = document.getElementById("confirmarPresenca").checked;
    let naoConfirmou = document.getElementById("naoConfirmar").checked;

    if (nome === "") {
        alert("Por favor, insira seu nome!");
        return;
    }

    if (!confirmou && !naoConfirmou) {
        alert("Por favor, selecione uma opção!");
        return;
    }

    let resposta = confirmou ? "Sim" : "Não";
    document.getElementById("inputNome").value = nome;
    document.getElementById("inputPresenca").value = resposta;

    let emailSubject = document.getElementById("emailSubject");
    emailSubject.value = confirmou ? "✅ Confirmação de Presença" : "❌ Não Poderá Comparecer";

    document.getElementById("parte1").style.display = "none";
    if (confirmou) {
        document.getElementById("nomeExibido").textContent = nome;
        document.getElementById("parte2").style.display = "block";
    } else {
        document.getElementById("nomeExibido2").textContent = nome;
        document.getElementById("parte3").style.display = "block";
    }

    let form = document.getElementById("formConfirmacao");
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    }).catch(() => {
        alert("Erro ao enviar a confirmação. Tente novamente.");
    });
}
