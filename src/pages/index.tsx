import { useEffect, useState } from "react"
import { api } from "../server/api";

type Gift = {
    id: number,
    title: string;
    description: string;
    price: number;
    priceFormatted: string
    available: boolean;
}

export default function Home() {
    const [ gifts, setGifts ] = useState<Gift[]>([])

    useEffect(() => {
        async function getGifts() {
            const result = await api.get<Gift[]>("/gift/all")
            const data = result.data.map(gift => {
                const numberFormatter = Intl.NumberFormat('pt-BR', {
                    currency: 'BRL', 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2
                })

                const priceFormatted = `R$ ${numberFormatter.format(gift.price)}`

                return {
                    priceFormatted,
                    ...gift
                }
            })
            setGifts(data)
        }

        getGifts()
    }, [])

    async function sendGift(id: number) {
        const result = await api.patch(`/gift/${id}/send`)
        console.log(result.status)
        
        const previousGifts = gifts.slice(0, id - 1)
        const selectedGift = gifts.slice(id - 1, id)
        selectedGift[0].available = false
        const nextGifts = gifts.slice(id, gifts.length)

        setGifts([
            ...previousGifts,
            ...selectedGift,
            ...nextGifts
        ])
    }

    return (
        <div className="gifts">
            { gifts.map(({ id, available, title, priceFormatted }) => (
                <div 
                    key={id} 
                    className="gift"
                    aria-disabled={!available}
                >
                    <img src="https://lh3.googleusercontent.com/pnOCH2mSV2MbEn5obE7p9FMhHT8I-khGd786YXXo9ty9oVrR7AxXswEy1dFeU38vbd4piBrlNpzpEL0SyaNWhRoYZAaI-zJphfHL0tVHTU_2sA=s0" alt={title} />
                    <section>
                        <h1>{title}</h1>
                        <h2>{priceFormatted}</h2>
                        <button onClick={() => sendGift(id)}>
                            {available ? 'Presentear' : 'Indisponível'}
                        </button>
                    </section>
                </div>
            )) }
        </div>
    )
}
