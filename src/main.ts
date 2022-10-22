import { api } from "./server/api";

listGifts()

async function listGifts() {
    const productsContainer = document.getElementById("products")
    const result = await api.get("/gift/all")
    result.data.forEach(gift => {
        const product = createProduct()
        productsContainer.appendChild(product)
    });
}

function createProduct() {
    const img = document.createElement('img')
    img.src = "https://lh3.googleusercontent.com/pnOCH2mSV2MbEn5obE7p9FMhHT8I-khGd786YXXo9ty9oVrR7AxXswEy1dFeU38vbd4piBrlNpzpEL0SyaNWhRoYZAaI-zJphfHL0tVHTU_2sA=s0"
    img.alt = "Produto 1"

    const h1 = document.createElement('h1')
    h1.innerText = 'Produto 1'
    const h2 = document.createElement('h2')
    h2.innerText = 'R$ 250,00'
    const button = document.createElement('button')
    button.innerHTML = 'Presentear'

    const span = document.createElement('span')
    span.appendChild(h1)
    span.appendChild(h2)
    span.appendChild(button)

    const div = document.createElement('div')
    div.classList.add('product')
    div.appendChild(img)
    div.appendChild(span)

    return div
}
