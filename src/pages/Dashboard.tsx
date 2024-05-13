import Sidebar from "../components/sidebar/Sidebar";

export default function Dashboard() {
	return (
		<div className="flex flex-row w-full">
			<Sidebar />
			<div className="flex flex-col grow overflow-auto mx-20">
				<h1 className="text-white text-4xl font-semibold my-10">Welcome to VeDA</h1>
				<div className="flex gap-6 snap-x h-[420px] snap-mandatory overflow-x-auto pb-4">
					<Image url="src/assets/cyber.jpg" />
					<Image url="src/assets/cyber.jpg" />
					<Image url="src/assets/cyber.jpg" />
					<Image url="src/assets/cyber.jpg" />
				</div>
			</div>
		</div>
	);
}

interface ImageProps {
	url: string;
}

const Image = ({ url }: ImageProps) => (
	<div
		style={{ backgroundImage: `url('${url}')` }}
		className={"flex flex-col p-5 justify-end snap-start shrink-0 aspect-video h-full bg-cover"}
	>
		{" "}
		<div className="flex flex-row justify-between items-end">
			<span className="text-white text-3xl font-bold">Cyberpunk Landscape</span>
			<div className="flex flex-row justify-between items-center p-4 h-[80px] w-[260px] bg-gray-900 bg-opacity-50 text-white">
				<Info value="18h:17m:29s" description="Time Reamaining" />
				<Info value="17.53 ETH" description="Highest Bid" />
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
