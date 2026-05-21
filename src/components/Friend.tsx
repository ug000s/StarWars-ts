import { characters } from "../utils/constants";

interface FriendProps {
    friend: keyof typeof characters;
    pos: number;
}

const Friend = ({friend, pos}: FriendProps) => {
    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }

    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }

    return (
        <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
    )
}

export default Friend;