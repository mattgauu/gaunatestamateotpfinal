
fetch("../data/productos.json")
    .then((resp) => resp.json())
    .then((data) => {
        mostrarProductos(data);
    });

let postsContainer = document.querySelector("#posts");

function mostrarProductos(productos) {
    productos.forEach(producto => {
        let div = document.createElement("div");
        div.id = producto.id;
        div.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <a href="./vermas.html?id=${producto.id}">Ver más</a>
            <hr>
        `;
        postsContainer.appendChild(div);
    });
}