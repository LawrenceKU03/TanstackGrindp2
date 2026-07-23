import React from "react";

export type Input = {
	placeholder: string;
	type: string;
};

const index: React.FC<Input> = ({ placeholder, type }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="w-[100%] px-4 py-2 rounded-md border-none text-indent-2 bg-gray-100 my-2 font-['Space_Grotesk']"
		/>
	);
};

export default index;
