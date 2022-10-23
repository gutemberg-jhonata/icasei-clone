import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            
                <title>Jéssica e Vitor (15/04/2023)</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}