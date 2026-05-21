import {starWarsInfo} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import Text from "./ui/Text.tsx";
import { useValidHero } from "../hooks/customHooks.ts";

const StarWars = () => {
    const {isHeroValid} = useValidHero();

    return isHeroValid ? <Text>{starWarsInfo}</Text> : <ErrorPage/>;
}

export default StarWars;