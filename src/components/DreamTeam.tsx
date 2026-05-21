import { useContext } from "react";
import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import { SWContext } from "../utils/context.ts";

const DreamTeam = () => {
    const {hero} = useContext(SWContext);
    
    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="text-center text-2xl col-span-3">Dream team</h2>
            {friends.filter(f => f !== hero).map((f, i) => <Friend friend={f} pos={i + 1} key={i}/>)}
        </section>
    )
}

export default DreamTeam;