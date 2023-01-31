import LayOut from "@/components/Layout";
import '@/styles/globals.css';
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <LayOut>
        <Component {...pageProps} />
    </LayOut>
}