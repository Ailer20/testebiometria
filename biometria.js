window.onload = function () {
    // Simulando um banco de dados de usuários
    const usuarios = [
        { id: 1, nome: 'João Silva', biometria: 'fingerprint123' },
        { id: 2, nome: 'Maria Oliveira', biometria: 'fingerprint456' },
        { id: 3, nome: 'Carlos Souza', biometria: 'fingerprint789' }
    ];

    // Função para simular a coleta de biometria
    function coletarBiometria() {
        const indexAleatorio = Math.floor(Math.random() * usuarios.length);
        return usuarios[indexAleatorio].biometria;
    }

    // Função para registrar presença
    function registrarPresenca() {
        const biometriaCapturada = coletarBiometria();
        const usuario = usuarios.find(user => user.biometria === biometriaCapturada);

        if (usuario) {
            const horario = new Date().toLocaleString('pt-BR');
            const logDiv = document.getElementById('presencaLog');
            logDiv.innerHTML += `<p>Presença registrada: ${usuario.nome} às ${horario}</p>`;
            alert(`Presença registrada com sucesso para ${usuario.nome}!`);
        } else {
            alert('Biometria não reconhecida!');
        }
    }

    // Adiciona o evento ao botão
    document.getElementById('biometriaBtn').addEventListener('click', registrarPresenca);
};
