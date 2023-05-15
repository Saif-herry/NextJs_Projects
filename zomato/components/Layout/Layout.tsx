import { FC, ReactNode } from "react"
import Header from "../Header/Header";

interface LayoutProps{
    children:ReactNode;
}

const Layout:FC<LayoutProps> = (props) => {
    const {children} = props;
    return (
        <>
        <Header/>
        <main className="min-h-screen px-4 m-auto mt-4 bg-primary-gradient">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
            Copyright @ 2023 Myntra
        </footer>
        </>
    )
}

export default Layout