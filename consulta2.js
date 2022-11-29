var dataRef = new Firebase('https://loja-de-moveis-larimy-default-rtdb.firebaseio.com/loja de moveis');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'produtos') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tbprodutos tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.cor}</td> +
    
                        <td>${value2.garantia}</td> +
                        
                        <td>${value2.valor}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
