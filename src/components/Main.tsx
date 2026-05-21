import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {
    const {page} = useContext(SWContext);

    return (
    <Routes>
        {/* порядок не имеет значения, но лучше начинать с базового пути */}
        {[`/`, `/${navItems[0]}`].map((path) => (
            <Route key={path} path={path} element={<Home/>}/>
        ))}
        {/* <Route path={`/`} element={<Home/>}/> */}
        {/* <Route path={`/${navItems[0]}`} element={<Home/>}/> */}
        {[`/${navItems[1]}`, `/${navItems[1]}/:heroId`].map((path) => (
            <Route key={path} path={path} element={<AboutMe/>}/>
        ))}
        <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
        <Route path={`/${navItems[3]}`} element={<Contact/>}/>
        <Route path={`/*`} element={<ErrorPage/>}/>
    </Routes>)
}

export default Main;