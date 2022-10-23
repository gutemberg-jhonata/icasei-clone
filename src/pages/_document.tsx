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
                <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@500&family=Montserrat&family=Lato&family=Great+Vibes&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
