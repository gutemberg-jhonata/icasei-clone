import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
            <meta charSet="UTF-8"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <link rel="shortcut icon" href="/favicon-16x16.png" type="image/png" sizes="16x16"/>
                <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" sizes="32x32"/>
            
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@500&family=Montserrat&family=Lato&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <div id="hero">
                    <img src="https://sites.icasei.com.br/images/thumb/0/1/public/0/0/0/0/0/0/0/0/j/jessivitor_1504/imagens/Itjsir2VQK7xkRSY.JPG" alt="Jéssica e Vitor"/>
                    <div id="hero-overlay"></div>
                    <section>
                        <h3>15 / 04 / 2023</h3>
                        <h1>JÉSSICA + VITOR</h1>
                    </section>
                    <svg viewBox="0 0 1280 35" fill="none" xmlns="http://www.w3.org/2000/svg" id="image-border-effect"><path fillRule="evenodd" clipRule="evenodd" d="M337.697 8.413c12.196-1.004 24.363-2.005 36.597-1.26 11.075.672 20.767-2.958 31.292.391 10.309 3.28 18.331 3.121 27.899 2.962a351.32 351.32 0 016.982-.066c25.375.066 50.813-8.617 74.462-.889 24.572 8.03 53.918-2.362 81.895-2.399 11.279-.012 22.339-.19 32.768-.14 40.441.201 81.885 7.367 122.38 3.428 14.41-1.4 28.068-4.92 41.768-8.382a254.817 254.817 0 0132.381 2.891c15.027 2.318 29.902 5.983 45.095 6.583 16.517.654 32.969-2.34 49.496-2.624 17.945-.309 35.767 2.573 53.595 4.632 25.012 2.886 59.593-6.586 84.773-6.527 77.89.18 146.39 15.93 220.92-6.667v34.651c-4.5 0-1267 .234-1280 .234v-35C12.293 2.61 25.873 9.91 38.763 9.791c3.907-.036 7.752-.073 11.478-.039 10.401.096 19.624 1.733 29.957.32 10.75-1.47 20.08-4.695 31.07-4.259 42.169 1.682 83.04 1.594 125.89 1.34 21.648-.13 43.517 1.522 65.161 2.6 2.063.102 4.13.158 6.186.175 9.783.081 19.497-.717 29.192-1.515z" fill="currentColor"></path></svg>
                </div>
        
                <main>
                    <h2 id="presents-section-title">Lista de presentes</h2>
                    <div className="divider">
                        <svg width="56" height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="2" rx="1" fill="#C5AE82"></rect></svg>
                    </div>
                    <Main />
                </main>

                <NextScript />
            </body>
        </Html>
    )
}