import giftImage from "../../public/gift.jpg";

type GiftProps = {
    index: number,
    id: number,
    title: string;
    price: string;
    imageBase64: string;
    available: boolean;
    onSend: (id: number, index: number) => {};
    children: string;
}

export function Gift({index, id, available, title, price, imageBase64, onSend, children}: GiftProps) {
    return (
        <div 
            className="gift"
            aria-disabled={!available}
        >
            <img src={imageBase64 ?? giftImage.src} alt={title} />
            <section>
                <h1>{title}</h1>
                <h3>{children}</h3>
                <h2>{price}</h2>
                <button onClick={() => onSend(id, index)}>
                    {available ? 'Presentear' : 'Indisponível'}
                </button>
            </section>
        </div>
    )
}