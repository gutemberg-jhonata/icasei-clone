import { api } from "./server/api";

type Gift = {
    title: string;
    description: string;
    price: number;
    available: boolean;
}

listGifts()

async function listGifts() {
    const productsContainer = document.getElementById("gifts")
    const result = await api.get<Gift[]>("/gift/all")
    result.data.forEach(gift => {
        const product = createGiftElement(gift)
        productsContainer.appendChild(product)
    });
}

function createGiftElement({ title, price, available }: Gift) {
    const numberFormatter = Intl.NumberFormat('pt-BR', 
        {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})

    const img = document.createElement('img')
    img.src = "https://lh3.googleusercontent.com/pnOCH2mSV2MbEn5obE7p9FMhHT8I-khGd786YXXo9ty9oVrR7AxXswEy1dFeU38vbd4piBrlNpzpEL0SyaNWhRoYZAaI-zJphfHL0tVHTU_2sA=s0"
    img.alt = title

    const h1 = document.createElement('h1')
    h1.innerText = title
    const h2 = document.createElement('h2')
    h2.innerText = 'R$ ' + numberFormatter.format(price)
    const button = document.createElement('button')
    button.innerHTML = available ? 'Presentear' : 'Xomblau!'

    const span = document.createElement('section')
    span.appendChild(h1)
    span.appendChild(h2)
    span.appendChild(button)

    const div = document.createElement('div')
    div.classList.add('gift')
    div.appendChild(img)
    div.appendChild(span)

    if (!available) {
        div.setAttribute('disabled', '')
    }

    return div
}
