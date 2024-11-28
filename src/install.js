const exec = require('./exec.js'),
        fs = require("fs");

// Lê o arquivo JSON
const extensoesFile = "./extensoes.json";

if (!fs.existsSync(extensoesFile)) {
  console.error(`Arquivo ${extensoesFile} não encontrado!`);
  process.exit(1);
}

const { extensoes } = JSON.parse(fs.readFileSync(extensoesFile, "utf8"));

if (!Array.isArray(extensoes) || extensoes.length === 0) {
  console.error("Nenhuma extensão encontrada no arquivo JSON!");
  process.exit(1);
}

console.log("Instalando extensões do VS Code...");

extensoes.forEach((extensao) => {
  console.log(`Instalando: ${extensao}`);
  const result = shell.exec(`code --install-extension ${extensao}`, { silent: true });

  if (result.code === 0) {
    console.log(`✅ Sucesso: ${extensao}`);
  } else {
    console.error(`❌ Erro ao instalar ${extensao}:`, result.stderr);
  }
});

console.log("Instalação finalizada.");
