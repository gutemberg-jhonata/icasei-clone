type GiftProps = {
    id: number,
    title: string;
    price: string
    available: boolean;
    onSend: (id: number) => {}
}

export function Gift({id, available, title, price, onSend}: GiftProps) {
    return (
        <div 
            key={id} 
            className="gift"
            aria-disabled={!available}
        >
            <img src="https://lh3.googleusercontent.com/pnOCH2mSV2MbEn5obE7p9FMhHT8I-khGd786YXXo9ty9oVrR7AxXswEy1dFeU38vbd4piBrlNpzpEL0SyaNWhRoYZAaI-zJphfHL0tVHTU_2sA=s0" alt={title} />
            <section>
                <h1>{title}</h1>
                <h2>{price}</h2>
                <button onClick={() => onSend(id)}>
                    {available ? 'Presentear' : 'Indisponível'}
                </button>
            </section>
        </div>
    )
}