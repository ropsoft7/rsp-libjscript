const prompt = require('prompt');

/**
 * Inicializa o prompt e executa um callback com utilitários.
 * @param {Function} callback - Função a ser executada dentro do contexto do prompt.
 * @returns {Promise<void>} - Promessa que resolve após o callback.
 */
const createPrompt = async (callback) => {
  prompt.start();
  prompt.message = '';
  prompt.delimiter = '';

  /**
   * Função principal para capturar entradas com base em um esquema.
   * @param {object} schema - Esquema das entradas.
   * @returns {Promise<object>} - Promessa com os dados capturados.
   */
  const ask = (schema) =>
    new Promise((resolve, reject) => {
      prompt.get(schema, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

  /**
   * Função auxiliar para capturar uma entrada simples.
   * @param {string} question - Texto da pergunta.
   * @param {string} type - Tipo da entrada (string, number, etc.).
   * @param {boolean} [required=true] - Se a entrada é obrigatória.
   * @returns {Promise<any>} - Promessa com a entrada do usuário.
   */
  const askSimple = (question, type = 'string', required = true) =>
    ask({
      properties: {
        response: {
          description: question,
          type,
          required,
        },
      },
    }).then((result) => result.response);

  /**
   * Função auxiliar para capturar uma entrada booleana.
   * Aceita "y/s" como verdadeiro e "n/não" como falso, com padrão em "sim".
   * @param {string} question - Texto da pergunta.
   * @returns {Promise<boolean>} - Promessa com o valor booleano.
   */
  const askBoolean = async (question) => {
    const schema = {
      properties: {
        response: {
          description: `${question} (y/s/N):`,
          type: 'string',
          pattern: /^[yYsS]|[nN]?$/,
          message: 'Responda com "y/s" ou "n"',
          required: false, // Aceita vazio
        },
      },
    };

    	const result = await ask(schema);
    	const input = result.response.toLowerCase() || 'y'; // Valor padrão: 'y'
    
	return input === 'y' || input === 's';
  };

  // Passa os utilitários para o callback
  await callback({ ask, askSimple, askBoolean });
};

module.exports = createPrompt;
