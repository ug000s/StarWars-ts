import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="text-center text-2xl col-span-3">Dream team</h2>
            {friends.map((f, i) => <Friend friend={f} pos={i + 1} key={i}/>)}
        </section>
    )
}

export default DreamTeam;