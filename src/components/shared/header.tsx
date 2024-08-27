import { ModeSwitch } from "./dark-mode-switch";

export default function Header(){
    return (
        <div className="h-20 min-w-full min-h-full shadow-md rounded-md md:flex md:justify-between px-10 py-3 md:items-center flex justify-center items-center">
            <div>

            </div>
            <div>
                <ModeSwitch />
            </div>
        </div>
    )
}