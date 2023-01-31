import NavBar from "@/components/NavBar";
import '@/styles/globals.css';
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <NavBar />
        <Component {...pageProps} />
    </>
}