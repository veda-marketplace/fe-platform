import { useState } from "react";
import type { IconType } from "react-icons";
import { PiHouseSimple } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { PiCalendarDots } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { PiWrench } from "react-icons/pi";
import { PiInfo } from "react-icons/pi";

export default function Sidebar() {
	const topOptions = [
		{ name: "Home", icon: PiHouseSimple },
		{ name: "Marketplace", icon: PiBuildings },
		{ name: "Collection", icon: PiWallet },
		{ name: "Events", icon: PiCalendarDots },
		{ name: "Community", icon: PiUsersThree },
	];

	const bottomOptions = [
		{ name: "Settings", icon: PiWrench },
		{ name: "Help", icon: PiInfo },
	];

	const [selected, setSelection] = useState(topOptions[0].name);

	const getOptions = (options: Array<{ name: string; icon: IconType }>) =>
		options.map((value, index) => (
			<Option
				key={`${value.name}-${index}`}
				name={value.name}
				Icon={value.icon}
				isSelected={selected === value.name}
				onClick={() => setSelection(value.name)}
			/>
		));

	return (
		<div className="flex flex-col justify-between w-38 h-full shadow-xl px-2 py-2">
			<div className="flex flex-col">{getOptions(topOptions)}</div>
			<div className="flex flex-col">{getOptions(bottomOptions)}</div>
		</div>
	);
}

interface OptiobProps {
	name: string;
	Icon: IconType;
	isSelected: boolean;
	onClick: () => void;
}

function Option({ name, Icon, isSelected, onClick }: OptiobProps) {
	return (
		<button
			className={`flex flex-col justify-center items-center p-2 my-2 rounded-xl ${
				isSelected ? "text-amber-300" : "text-white"
			} hover:bg-amber-100 hover:bg-opacity-25 hover:text-amber-300`}
			onClick={() => onClick()}
			type="button"
		>
			<Icon className="text-3xl mb-2" />
			<span className="text-m">{name}</span>
		</button>
	);
}
