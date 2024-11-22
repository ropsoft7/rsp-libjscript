module.exports = (message, options = {}) => {

  const defaultOptions = {
    prefix: '[MyLibrary]', // Prefixo padrão
    color: '\x1b[34m',     // Cor azul (ANSI)
    background: '',        // Sem fundo por padrão
    reset: '\x1b[0m'       // Reset para estilo padrão
  };

  // Mesclar opções do usuário com as padrão
  const { prefix, color, background, reset } = { ...defaultOptions, ...options };

  // Log formatado
  console.log(`${color}${background}${prefix} ${message}${reset}`);
}