import Head from "next/head"

interface PropsType {
    title: string
}

export default function Seo({title}: PropsType) {
    return <Head>
        <title>{title} | Next Movies</title>
    </Head>
}