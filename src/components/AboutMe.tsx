import {useEffect, useState} from "react";
import {periodMonth, characters} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useValidHero} from "../hooks/customHooks.ts";

const AboutMe = () => {
    const {isHeroValid, heroId} = useValidHero();
    // const params = useParams();
    // console.log(params.heroId);
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if(hero && (Date.now() - hero.timestamp < periodMonth)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!(heroId in characters)) {
            return;
        }
        if (isHeroValid && !hero) {
            // keyof typeof characters ensures we're using a valid key from the characters object
            // typeof object -> generate type of this object
            fetch(characters[heroId].url)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        Name: data.name,
                        Gender: data.gender,
                        ['Birth year']: data.birth_year,
                        Height: data.height,
                        Mass: data.mass,
                        ['Hair color']: data.hair_color,
                        ['Eye color']: data.eye_color,
                        ['Skin color']: data.skin_color,
                    };
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [heroId, hero, isHeroValid]);

    return (isHeroValid) ? (
        <>
            {(!!hero) &&
                <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => (
                        <p key={key}><span className={'text-3xl'}>{key}:</span> {hero[key]}</p>
                    ))}
                </div>
            }
        </>
    ) : <ErrorPage />
}

export default AboutMe;