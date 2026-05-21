export interface SWContextValue {
    hero: string;
    changeHero: (hero: string) => void;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

// export interface Characters {[key: string]: Hero;}
// тоже самое что и строка выше
// export type Characters = Record<string, Hero>