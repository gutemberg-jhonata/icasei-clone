import { useEffect, useState } from "react"
import { Gift } from "../components/Gift";
import { api } from "../server/api";

import { useToast } from "../hooks/useToast";
import { Divider } from "../components/Divider";

type Gift = {
    _id: number,
    title: string;
    description: string;
    price: number;
    priceFormatted: string;
    available: boolean;
    imageBase64: string;
}

export default function Home() {
    const [ gifts, setGifts ] = useState<Gift[]>([])
    const [ isLoading, setIsLoading ] = useState(true)
    const { toastSuccess, toastError, toastInfo, ToastContainer } = useToast()

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
            setIsLoading(false)
        }

        getGifts()
    }, [])

    async function sendGift(id: number, index: number) {
        toastInfo("Enviando presente...")
        
        const result = await api.patch(`/gift/${id}/send`)
        
        if (result.status !== 200) {
            toastError("Ops, algum erro ocorreu no servidor.")
            toastInfo("Tente novamente em alguns instantes.")
            
            return
        }

        toastSuccess("Presente enviado com sucesso!")
        
        const previousGifts = gifts.slice(0, index)
        const selectedGift = gifts.slice(index, index + 1)
        selectedGift[0].available = false
        const nextGifts = gifts.slice(index + 1, gifts.length)

        setGifts([
            ...previousGifts,
            ...selectedGift,
            ...nextGifts
        ])
    }

    return (
        <>
            <div id="hero">
                <img src="https://sites.icasei.com.br/images/thumb/0/1/public/0/0/0/0/0/0/0/0/j/jessivitor_1504/imagens/Itjsir2VQK7xkRSY.JPG" alt="J??ssica e Vitor"/>
                <div id="hero-overlay"></div>
                <section>
                    <h3>15 / 04 / 2023</h3>
                    <h1>J??ssica & Vitor</h1>
                </section>
                <svg viewBox="0 0 1280 35" fill="none" xmlns="http://www.w3.org/2000/svg" id="image-border-effect"><path fillRule="evenodd" clipRule="evenodd" d="M337.697 8.413c12.196-1.004 24.363-2.005 36.597-1.26 11.075.672 20.767-2.958 31.292.391 10.309 3.28 18.331 3.121 27.899 2.962a351.32 351.32 0 016.982-.066c25.375.066 50.813-8.617 74.462-.889 24.572 8.03 53.918-2.362 81.895-2.399 11.279-.012 22.339-.19 32.768-.14 40.441.201 81.885 7.367 122.38 3.428 14.41-1.4 28.068-4.92 41.768-8.382a254.817 254.817 0 0132.381 2.891c15.027 2.318 29.902 5.983 45.095 6.583 16.517.654 32.969-2.34 49.496-2.624 17.945-.309 35.767 2.573 53.595 4.632 25.012 2.886 59.593-6.586 84.773-6.527 77.89.18 146.39 15.93 220.92-6.667v34.651c-4.5 0-1267 .234-1280 .234v-35C12.293 2.61 25.873 9.91 38.763 9.791c3.907-.036 7.752-.073 11.478-.039 10.401.096 19.624 1.733 29.957.32 10.75-1.47 20.08-4.695 31.07-4.259 42.169 1.682 83.04 1.594 125.89 1.34 21.648-.13 43.517 1.522 65.161 2.6 2.063.102 4.13.158 6.186.175 9.783.081 19.497-.717 29.192-1.515z" fill="currentColor"></path></svg>
            </div>

            <section className="message-section">
                <h2 className="section-title">Mensagem</h2> 
                <p>
                    Nosso grande dia est?? chegando!! Fizemos este site para dar sugest??es de presentes. Fiquem a vontade, essa lista ?? apenas para sugest??o, podem presentear com algo que n??o esteja aqui. Ao escolher o presente nesse site outra pessoa n??o poder?? escolher-lo.
                </p>
                <p>
                    Aguardamos voc??s no nosso grande dia! E para que seja ainda mais especial, contamos com a   sua presen??a, afinal, nada melhor que compartilhar os melhores momentos de nossas vidas na    companhia de familiares e amigos t??o queridos.
                </p>
            </section>

            <Divider />

            <section className="address-section">
                <h2 className="section-title">Nosso endere??o</h2> 
                <p>Rua Professor Monteiro Fonseca 510 A</p>
                <p>Apt 101</p>
                <p>Vila Bras??lia</p>
            </section>

            <Divider />

            <main>
                <h2 className="section-title">Lista de presentes</h2>
                <Divider />
                
                {
                    isLoading ? <section className="gift-list-empty">
                        <h3>Buscando presentes... ????</h3>
                    </section> : 
                    gifts.length ? (
                        <div className="gifts">
                            {
                                gifts.map(({_id, title, available, priceFormatted, description, imageBase64}, index) => 
                                    <Gift 
                                        index={index}
                                        key={_id}
                                        id={_id} 
                                        title={title}
                                        available={available}
                                        price={priceFormatted}
                                        imageBase64={imageBase64}
                                        onSend={sendGift}
                                    >
                                        {description}
                                    </Gift>
                                )
                            }
                        </div>
                    ) : (
                        <section className="gift-list-empty">
                            <h3>
                                Nenhum presente encontrado... ????
                            </h3>
                            <h3>
                                <span>Adicione um novo presente a lista atrav??s do </span>
                                <a href="/painel">painel.</a>
                            </h3>
                        </section>
                    )
                }
            </main>

            <ToastContainer />
        </>
    )
}
