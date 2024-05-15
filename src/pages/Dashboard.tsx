import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import NFTList from "../data/NFTList.json";
import Projects from "../data/Projects.json";

export default function Dashboard() {
	return (
		<div className="flex flex-row w-full">
			<Sidebar />
			<div className="flex flex-col grow overflow-auto">
				<h1 className="text-white text-5xl font-semibold my-10 mx-20">Welcome to VeDA</h1>
				<div className="flex gap-6 snap-x h-[420px] snap-mandatory overflow-x-auto pb-4 mx-20">
					{Projects.map((value, _) => (
						<Image
							key={value.id}
							image={value.image}
							timeRemaining={value.timeRemaining}
							highestBid={value.highestBit}
						/>
					))}
				</div>
				<h3 className="text-white text-4xl font-normal mt-8 mx-20">Top Collection</h3>
				<div className="flex flex-row h-12 w-full my-8 bg-[#001A35] rounded-2xl ml-20">
					<select className="w-[250px] p-4 bg-gray-500 bg-opacity-80 rounded-2xl">
						<option>All Networks</option>
						<option>Polygon</option>
						<option>Avalanx</option>
					</select>
					<TimeFilter values={["7D", "1D", "24h", "12h", "6h", "1h"]} />
				</div>
				<table className="text-xl mx-20">
					<tr>
						<th className="text-left pb-4"># NFT Name</th>
						<th className="text-right pb-4">Attribute</th>
						<th className="text-right pb-4">Price</th>
						<th className="text-right pb-4">Volume</th>
						<th className="text-right pb-4">Top Offer</th>
						<th className="text-right pb-4">Listed</th>
					</tr>
					{NFTList.map((value, index) => (
						<NFTRow
							key={value.id}
							position={index + 1}
							image={value.image}
							name={value.name}
							attribute={value.type}
							price={value.price}
							volume={value.volume}
							topOffer={value.topOffer}
							listed={value.listed}
						/>
					))}
				</table>
			</div>
		</div>
	);
}

interface ImageProps {
	image: string;
	timeRemaining: number;
	highestBid: number;
}

function toHHMMSS(timeInSeconds: number) {
	const hours = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
	const seconds = timeInSeconds - hours * 3600 - minutes * 60;

	return (
		`${hours < 10 ? `0${hours}` : hours}h:` +
		`${minutes < 10 ? `0${minutes}` : minutes}m:` +
		`${seconds < 10 ? `0${seconds}` : seconds}s`
	);
}

const Image = ({ image, timeRemaining, highestBid }: ImageProps) => (
	<div
		style={{ backgroundImage: `url('${image}')` }}
		className={"flex flex-col p-5 justify-end snap-start shrink-0 aspect-video h-full bg-cover"}
	>
		{" "}
		<div className="flex flex-row justify-between items-end">
			<span className="text-white text-3xl font-bold">Cyberpunk Landscape</span>
			<div className="flex flex-row justify-between items-center p-4 h-[80px] w-[260px] bg-gray-900 bg-opacity-50 text-white">
				<Info value={toHHMMSS(timeRemaining)} description="Time Reamaining" />
				<Info value={`${highestBid} ETH`} description="Highest Bid" />
			</div>
		</div>
	</div>
);

interface InfoProps {
	value: string;
	description: string;
}

const Info = ({ value, description }: InfoProps) => (
	<div className="flex flex-col">
		<span className="text-lg font-medium">{value}</span>
		<span className="text-xs font-light">{description}</span>
	</div>
);

interface NFTProps {
	position: number;
	image: string;
	name: string;
	attribute: string;
	price: number;
	volume: number;
	topOffer: number;
	listed: number;
}

const NFTRow = ({ position, image, name, attribute, price, volume, topOffer, listed }: NFTProps) => (
	<tr>
		<td className="flex flex-row items-center text-left py-2">
			<span className="font-bold">{position}</span>
			<img className="w-[50px] h-[50px] mx-4" src={image} alt={name} />
			{name}
		</td>
		<td className="text-right  py-2">{attribute}</td>
		<td className="text-right  py-2">{price}</td>
		<td className="text-right  py-2">{volume} ETH</td>
		<td className="text-right  py-2">{topOffer} ETH</td>
		<td className="text-right  py-2">x{listed}</td>
	</tr>
);

interface TimeFilterProps {
	values: Array<string>;
}

function TimeFilter({ values }: TimeFilterProps) {
	const [selected, setSelection] = useState(values[0]);

	return (
		<div className="flex flex-row mx-20 w-[300x] px-2 rounded-2xl bg-gray-500 bg-opacity-80">
			{values.map((value, index) => (
				<button
					type="button"
					// biome-ignore lint: no dynamic change
					key={index}
					className={`${selected === value ? "bg-[#001A35]" : null} w-[50px] rounded-full`}
					onClick={() => setSelection(value)}
				>
					{value}
				</button>
			))}
		</div>
	);
}
