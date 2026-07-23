import type React from "react";
import TextField from "./Components/TextField";

export type Form = {
	headerText?: string;
};

const index: React.FC<Form> = ({ headerText }) => {
	return (
		<div>
			<form className="w-[40%] bg-white rounded-lg shadow-md mx-auto px-8 py-12">
				<h1 className="text-black text-4xl font-bold uppercase mx-auto my-4">
					{headerText}
				</h1>
				<TextField placeholder="Username" />
				<TextField placeholder="Password" type="password" />
				<TextField placeholder="Confirm Password" type="password" />
				<button>CONTINUE</button>
			</form>
		</div>
	);
};

export default index;
