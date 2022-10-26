import giftImage from "../../public/gift.jpg";

type GiftProps = {
    id: number,
    title: string;
    price: string;
    imageBase64: string;
    available: boolean;
    onSend: (id: number) => {};
    children: string;
}

export function Gift({id, available, title, price, imageBase64, onSend, children}: GiftProps) {
    return (
        <div 
            key={id} 
            className="gift"
            aria-disabled={!available}
        >
            <img src={imageBase64 ?? giftImage.src} alt={title} />
            <section>
                <h1>{title}</h1>
                <h3>{children}</h3>
                <h2>{price}</h2>
                <button onClick={() => onSend(id)}>
                    {available ? 'Presentear' : 'Indisponível'}
                </button>
            </section>
        </div>
    )
}