import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import { SWContext } from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";
import Text from "./ui/Text.tsx";

const StarWars = () => {
    const {changeHero} = useContext(SWContext);
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        changeHero(heroId);
    }, []);

    return (heroId in characters) ? <Text>{starWarsInfo}</Text> : <ErrorPage/>;
}

export default StarWars;