import React from "react";
import type { ReactFormExtendedApi } from "@tanstack/react-form";

export type Input = {
	name: string;
	placeholder: string;
	type: string;
	form: ReactFormExtendedApi<T>;
};

const index: React.FC<Input> = ({ name, placeholder, type, form }) => {
	return (
		<form.Field name={name}>
			{(field: any) => (
				<input
					value={field.state.value}
					type={type}
					onChange={(e) => field.handleChange(e.target.value)}
					placeholder={placeholder}
					className="w-[100%] px-4 py-2 rounded-md border-none text-indent-2 bg-gray-100 my-2 font-['Space_Grotesk']"
				/>
			)}
		</form.Field>
	);
};

export default index;
