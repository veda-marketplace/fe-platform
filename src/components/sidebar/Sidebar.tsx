import { useState } from "react";
import { IconType } from "react-icons";
import { PiHouseSimple } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { PiWrench } from "react-icons/pi";
import { PiInfo } from "react-icons/pi";

export default function Sidebar() {

    const [selected, setSelection] = useState("Home")

    const getOptions = (options: Array<{ name: string, icon: IconType }>) => options.map((value) => <Option name={value.name} Icon={value.icon} isSelected={selected == value.name} onClick={() => setSelection(value.name)} />)

    return (<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-38 h-screen shadow-xl" aria-label="Sidebar">
        <ul className="flex flex-col justify-between h-full px-2 py-2">
            <div className="flex flex-col">
                {getOptions([{ name: "Home", icon: PiHouseSimple }, { name: "Marketplace", icon: PiBuildings }, { name: "Collection", icon: PiWallet }, { name: "Events", icon: PiCalendarDots }, { name: "Community", icon: PiUsersThree }])}
            </div>
            <div className="flex flex-col">
                {getOptions([{ name: "Settings", icon: PiWrench }, { name: "Help", icon: PiInfo }])}
            </div>
        </ul>
    </aside>)

}

interface OptiobProps {
    name: string,
    Icon: IconType,
    isSelected: boolean,
    onClick: () => void,
}

function Option({ name, Icon, isSelected, onClick }: OptiobProps) {
    return (
        <li className="p-2">
            <a className={`flex flex-col justify-center items-center p-2 rounded-xl ${isSelected ? "text-amber-300" : "text-white"} hover:bg-amber-100 hover:bg-opacity-25 hover:text-amber-300`} onClick={() => onClick()}>
                <Icon className="text-3xl mb-2" />
                <span className="text-m">{name}</span>
            </a>
        </li>
    )
}