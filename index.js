
import fs from 'fs';
import chalk from 'chalk';

function tratarErro(erro){

throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'))

}

function pegaArquivo(caminhoDoArquivo){
const encondig = 'utf-8'
    
fs.readFile(caminhoDoArquivo, encondig,(erro, texto)=>{
if(erro) // se der erro no readfile - chama essa função para tratar o erro
{

    tratarErro(erro)
}
console.log(chalk.green(texto)) // Ao contrário retorna no console log
})

}
pegaArquivo('./arquivos/');