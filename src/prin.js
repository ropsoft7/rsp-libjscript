module.exports = (message, options = {}) => {

  const defaultOptions = {
    prefix: '   →', // Prefixo padrão
    color: '\x1b[34m',     // Cor azul (ANSI) padrão
    background: '',        // Sem fundo por padrão
    reset: '\x1b[0m'       // Reset para estilo padrão
  };

  // Cores e prefixos específicos para "error" e "warning"
  const typeOptions = {
    error: {
      prefix: '   → ERROR: ',
      color: '\x1b[31m', // Vermelho
      background: '\x1b[41m' // Fundo vermelho
    },
    warning: {
      prefix: '   → WARNING: ',
      color: '\x1b[33m', // Amarelo
      background: '\x1b[43m' // Fundo amarelo
    }
  };

  // Mesclar opções do usuário com as padrão
  const { type } = options;
  const { prefix, color, background, reset } = {
    ...defaultOptions,
    ...(type && typeOptions[type] ? typeOptions[type] : {}),
    ...options
  };

  // Log formatado
  //console.log(`${color}${background}${prefix} ${message}${reset}`);
  console.log(`${color}${prefix} ${message}${reset}`);

}
