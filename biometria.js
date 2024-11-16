// Simulando um banco de dados de usuários (em um sistema real, isso viria de um banco de dados backend)
const usuarios = [
    { id: 1, nome: 'João Silva', biometria: 'fingerprint123' },
    { id: 2, nome: 'Maria Oliveira', biometria: 'fingerprint456' },
    { id: 3, nome: 'Carlos Souza', biometria: 'fingerprint789' }
];

// Função para simular a coleta de biometria (para fins de demonstração)
function coletarBiometria() {
    // Aqui você chamaria a API real do dispositivo biométrico
    // Para simular, vamos retornar uma biometria aleatória da lista
    const indexAleatorio = Math.floor(Math.random() * usuarios.length);
    return usuarios[indexAleatorio].biometria;
}

// Função para registrar presença
function registrarPresenca() {
    // Coleta a biometria
    const biometriaCapturada = coletarBiometria();
    const usuario = usuarios.find(user => user.biometria === biometriaCapturada);

    if (usuario) {
        // Obtém a data e hora atual
        const horario = new Date().toLocaleString('pt-BR');

        // Adiciona o registro de presença
        const logDiv = document.getElementById('presencaLog');
        logDiv.innerHTML += `<p>Presença registrada: ${usuario.nome} às ${horario}</p>`;
        alert(`Presença registrada com sucesso para ${usuario.nome}!`);
    } else {
        alert('Biometria não reconhecida!');
    }
}

// Adiciona o evento ao botão
document.getElementById('biometriaBtn').addEventListener('click', registrarPresenca);
