import Button from "./ui/Button";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-gray-700/60 h-20 grid grid-cols-9 items-center">
            {/* <div className="bg-danger rounded-md px-3 text-center cursor-pointer hover:bg-red-500 hover:text-white col-start-3">Send me email</div> */}
            <Button className="col-start-3">Send me email</Button>
        </footer>
    )
}

export default Footer;