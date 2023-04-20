const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let topicos = [];

leitor.setPrompt(`Escolha uma opção:\n
1 - Cadastrar tópico\n
2 - Listar todos os tópicos\n
3 - Selecionar tópico específico digitando id\n
4 - Deletar todos os tópicos\n
5 - Listar tópicos em intervalo\n
0 - Sair\n`
);
leitor.prompt();

leitor.on('line', (opcao) => {
    if (opcao === '1') {
        leitor.question(`Digite o tópico:`, (topico) => {
            topicos.push(topico);
            console.log("Tópico cadastrado com sucesso!");
            console.log("------------------");
            leitor.prompt();
        });

    } else if (opcao === '2') {
        if (topicos.length > 0) {
            console.log('Tópicos cadastrados:');
            for (let i = 0; i < topicos.length; i++) {
                console.log(`${i + 1}) ${topicos[i]}`);
            }
            console.log("------------------");

        } else {
            console.log('Não há tópicos cadastrados.');
            console.log("------------------");
        }
        leitor.prompt();
    } else if (opcao === '3') {
        leitor.question('Digite o id do tópico que deseja selecionar:', (id) => {
            if (id > 0 && id <= topicos.length) {
                console.log(`Tópico selecionado: ${topicos[id - 1]}`);
                console.log("------------------");

            } else {
                console.log('Id inválido.');
                console.log("------------------");

            }
            leitor.prompt();
        });
    } else if (opcao === '4') {
        leitor.question('Tem certeza que deseja deletar todos os tópicos? (S - Sim / N - Não)', (confirmacao) => {
            if (confirmacao.toUpperCase() === 'S') {
                topicos = [];
                console.log('Todos os tópicos foram deletados.');
                console.log("------------------");
            } else {
                console.log('Operação cancelada.');
                console.log("------------------");
            }
            leitor.prompt();
        });
    } else if (opcao === '5') {
        leitor.question('Digite o id de início do intervalo:', (inicio) => {
            leitor.question('Digite o id de término do intervalo:', (final) => {
                if (inicio > 0 && final <= topicos.length && inicio <= final) {
                    console.log(`Tópicos no intervalo de ${inicio} a ${final}:`);
                    for (let i = inicio - 1; i < final; i++) {
                        console.log(`${i + 1}) ${topicos[i]}`);
                    }
                } else {
                    console.log('Intervalo inválido.');
                    console.log("------------------");
                }
                leitor.prompt();
            });
        });
    } else if (opcao === '0') {
        leitor.question('Tem certeza que deseja sair do sistema? (S - Sim / N - Não)', (confirmacao) => {
            if (confirmacao.toUpperCase() === 'S') {
                console.log('Saindo do sistema...');
                leitor.close();
            } else {
                console.log('Operação cancelada.');
                leitor.prompt();
            }
        });
    } else {
        console.log('Opção inválida.');
        leitor.prompt();
    }
});
