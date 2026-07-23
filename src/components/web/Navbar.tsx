import { Button } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
const index = () => {
	return (
		<div className="sticky top-0 z-50 backdrop-blur-2xl py-4 font-['Space_Grotesk'] bg-white">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
				<div className="flex h-16 max-w-6xl items-center justify-between px-4">
					<img src="logo512.png" alt="tanstack" className="w-[50px] h-[50px]" />
					<h1 className="text-lg font-semibold ml-4">Tanstack Start</h1>
				</div>
				<div className="flex items-center gap-3">
					<Link to="/login">
						<Button className="text-black bg-gray-200 font-bold px-4 py-2 rounded-[8px] cursor-pointer">
							Login
						</Button>
					</Link>
					<Link to="/signup">
						<Button className="text-white bg-red-500 font-bold px-4 py-2  rounded-[8px] cursor-pointer">
							Sign up
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default index;
