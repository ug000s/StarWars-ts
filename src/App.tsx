import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {

    return (
        <div className={'mx-2'}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App