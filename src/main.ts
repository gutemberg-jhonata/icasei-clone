import axios from "axios";
import { api } from "./server/api";

type Gift = {
    id: number,
    title: string;
    description: string;
    price: number;
    available: boolean;
}

listGifts()

async function listGifts() {
    const productsContainer = document.getElementById("gifts")
    productsContainer.innerHTML = ""

    const result = await api.get<Gift[]>("/gift/all")
    result.data.forEach(gift => {
        const product = createGiftElement(gift)
        productsContainer.appendChild(product)
    });
}

function createGiftElement({ id, title, price, available }: Gift) {
    const numberFormatter = Intl.NumberFormat('pt-BR', 
        {currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2})

    const div = document.createElement('div')
    div.classList.add('gift')
    if (!available) {
        div.setAttribute('disabled', '')
    }

    const img = document.createElement('img')
    img.src = "https://lh3.googleusercontent.com/pnOCH2mSV2MbEn5obE7p9FMhHT8I-khGd786YXXo9ty9oVrR7AxXswEy1dFeU38vbd4piBrlNpzpEL0SyaNWhRoYZAaI-zJphfHL0tVHTU_2sA=s0"
    img.alt = title

    const h1 = document.createElement('h1')
    h1.innerText = title
    const h2 = document.createElement('h2')
    h2.innerText = 'R$ ' + numberFormatter.format(price)
    const button = document.createElement('button')
    button.innerHTML = available ? 'Presentear' : 'Indisponível'
    button.onclick = () => sendGift(id, div, button)

    const span = document.createElement('section')
    span.appendChild(h1)
    span.appendChild(h2)
    span.appendChild(button)
    
    div.appendChild(img)
    div.appendChild(span)

    return div
}

async function sendGift(id: number, div: HTMLDivElement, button: HTMLButtonElement) {
    const result = await api.patch(`/gift/${id}/send`)
    console.log(result.status)
    div.setAttribute('disabled', '')
    button.innerText = 'Indisponível'
}