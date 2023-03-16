import Head from 'next/head';

export default function HtmlHead() {
    return (
        <Head>
            <title>Off With The Head</title>
            <meta name="description" content="NextJS app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/guillotine.svg" />
        </Head>
    )
}