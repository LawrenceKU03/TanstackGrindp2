import type React from "react";
import TextField from "./Components/TextField";

export type Form = {
	headerText: string;
	isLogin?: boolean;
};

const index: React.FC<Form> = ({ headerText, isLogin }) => {
	return (
		<div className="h-full">
			<form className="w-[40%] bg-white rounded-lg shadow-md mx-auto my-[5%] px-8 py-12">
				<h1 className="text-black text-4xl font-bold uppercase mx-auto my-4">
					{headerText}
				</h1>
				<TextField placeholder="Username" />
				<TextField placeholder="Password" type="password" />
				{!isLogin && (
					<TextField placeholder="Confirm Password" type="password" />
				)}
				<button className="text-white cursor-pointer bg-black font-bold px-4 py-2 mt-4 rounded-[3px] cursor-pointer">
					CONTINUE
				</button>
			</form>
		</div>
	);
};

export default index;
