import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {SWContext} from "./utils/context.ts";
import {defaultHero} from "./utils/constants.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);

    return (
        <div className={'mx-2'}>
            <SWContext.Provider value={{hero, changeHero: setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext.Provider>
        </div>
    )
}

export default App