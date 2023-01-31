import Seo from "@/components/Seo";
import { useRouter } from "next/router"

export default function Detail({params}: {params: [string]}) {
    const router = useRouter();
    const [title] = params as [string] || [];
    return <div>
        <Seo title={title} />
        <h4>{title || "Loading..."}</h4>
    </div>
}

export async function getServerSideProps({ params: {params} }: {params: {params: [string]}}) {

    return {
        props: {
            params
        }
    }
}