const fs = require('fs')
const path = require('path')

module.exports = function (caminhoArquivo, stringAntiga, stringNova) {
    
    try {
        
        let conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
        let novoConteudo = conteudo.replace(stringAntiga, stringNova);
        
        fs.writeFileSync(caminhoArquivo, novoConteudo, 'utf8');

        console.log(`Substituição concluída: "${stringAntiga}" por "${stringNova}" no arquivo ${caminhoArquivo}`);
    
    } catch (erro) {
        console.error(`Erro ao processar o arquivo: ${erro.message}`);
    }
}