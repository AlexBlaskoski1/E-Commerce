function comprarProduto(id) {
    var produtos = [
        {
            id: 1,
            nome: "Live Baroes Reaction",
            preco: "R$15.99",
            descricao: "Wip",
            imagem: "assets/image.png"
        },
        {
            id: 2,
            nome: "Switch Preto",
            preco: "R$120.99",
            descricao: "Wip",
            imagem: "assets/imagem_2023-02-28_204554209-removebg-preview.png"
        },
        {
            id: 3,
            nome: "Produto teste",
            preco: "R$150.99",
            descricao: "Wip",
            imagem: "assets/imagem_2023-02-28_205417977-removebg-preview.png"
        }
        // Add more products here
    ];

    var produto = produtos.find(function(item) {
        return item.id === id;
    });

    if (produto) {
        var url = "produto.html?id=" + produto.id + "&nome=" + produto.nome + "&preco=" + produto.preco + "&descricao=" + produto.descricao + "&imagem=" + produto.imagem;
        window.open(url, "_blank");
    }
}