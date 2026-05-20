import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext);

    return <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>;
    // return (
    //     <div onClick={() => changePage(itemTitle)} className="bg-danger rounded-md px-3 text-center cursor-pointer hover:bg-red-500 hover:text-white">{itemTitle}</div>
    // )
}

export default NavItem;