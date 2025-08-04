const input = document.getElementById('input');
const output = document.getElementById('output');

const commands = {
  help: `Comandos disponibles:<br>help, about, projects, contact, clear, cv`,
  about: `Soy Zeba, artista autodidacta, dibujante, músico y explorador digital.<br>
Escribí <span style="color:#00ffff;">cv</span> para ver más sobre mis habilidades.`,
  cv: `📄 <b>Mi CV extendido:</b><br>
- Diseño gráfico (Photoshop, GIMP, Canva)<br>
- IA, HTML, CSS y JavaScript básico<br>
- Linux (Zorin, Ubuntu), terminal básica, manejo de Escritorios GUI<br>
- Windows (instalación de software y reparación, redes básicas)<br>
- GitHub: manejo básico de repositorios<br>
- Tatuajes, Graffiti y muralismo a pedidos<br>
- Ilustración digital y retratos (a lápiz o digital)<br>
- Edición de audio (Audacity)<br>
- Informática general: desbloqueo de celulares, ADB, redes básicas<br>
- Resolutivo, autodidacta, paciente y perseverante.`,
  projects: ` Informática:<br>- Portafolio HTML<br>- Terminal web cv interactivo local<br>- Chatbot IA local<br>- Editor JS simple<br>(¡más en camino!)`,
  contact: `Email: sebasebasemexpiex@gmail.com<br>GitHub: github.com/sebasemexpiex<br>LinkedIn: linkedin.com/in/sebastian-pazos-23670a377/`,
};

function printOutput(text) {
  output.innerHTML += `<div>${text}</div>`;
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    printOutput(`> ${command}`);
    if (commands[command]) {
      printOutput(commands[command]);
    } else if (command === 'clear') {
      output.innerHTML = '';
    } else {
      printOutput(`Comando no reconocido. Escribí 'help'`);
    }
    input.value = '';
  }
});
  }
});

