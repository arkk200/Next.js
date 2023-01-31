import { ReactNode } from "react";
import NavBar from "./NavBar";

interface PropsType {
    children: ReactNode;
}

export default function LayOut({ children }: PropsType) {
    return <>
        <NavBar />
        <div>{children}</div>
    </>
}