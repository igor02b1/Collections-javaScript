"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var opcoes;
var estoque = [];
var _loop_1 = function () {
    console.log("(1) - Adicionar");
    console.log("(2) - Deletar um item");
    console.log("(3) - Alterar itens");
    console.log("(4) - Listar estoque");
    console.log("(5) - Sair");
    opcoes = Number(prompt('>> '));
    console.clear();
    switch (opcoes) {
        case 1:
            var nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto);
            break;
        case 2:
            var i_1 = 0;
            estoque.forEach(function (item) {
                console.log("ID: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            var id = Number(prompt('Digite o ID do produto: '));
            estoque.splice(id, 1);
            prompt('Item excluido!');
            break;
        case 3:
            i_1 = 0;
            estoque.forEach(function (item) {
                console.log("ID: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            id = Number(prompt('Digite o ID do produto: '));
            estoque.splice(id, 1);
            prompt('Item excluido! Digite o novo produto:');
            nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto);
            break;
        case 4:
            i_1 = 0;
            estoque.forEach(function (item) {
                console.log("ID: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            prompt('Itens listados!');
            break;
        case 5:
            prompt('saindo...');
            break;
        default:
            prompt('[ERROR] Digite uma opção válida!');
    }
};
do {
    _loop_1();
} while (opcoes != 5);
