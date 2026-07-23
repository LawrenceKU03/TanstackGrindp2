import type React from "react";
import TextField from "./Components/TextField";
import { useForm } from "@tanstack/react-form";

export type Form = {
	headerText: string;
	isLogin?: boolean;
};

export type FormValues = {
	username: string;
	password: string;
	confirm_password?: string;
};

const index: React.FC<Form> = ({ headerText, isLogin }) => {
	const Form = useForm({
		defaultValues: {
			username: "",
			password: "",
			confirm_password: "",
		} as FormValues,
		onSubmit: async ({ value }) => {
			//trigger function
			console.log(value);
		},
	});

	return (
		<div className="h-full">
			<form
				className="w-[40%] bg-white rounded-lg shadow-md mx-auto my-[5%] px-8 py-12"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					Form.handleSubmit();
				}}
			>
				<h1 className="text-black text-4xl font-bold uppercase mx-auto my-4 font-['Space_Grotesk']">
					{headerText}
				</h1>
				<TextField
					placeholder="Username"
					name={"username"}
					form={Form}
					type="text"
				/>
				<TextField
					placeholder="Password"
					type="password"
					name={"password"}
					form={Form}
				/>
				{!isLogin && (
					<TextField
						placeholder="Confirm Password"
						type="password"
						name={"confirm_password"}
						form={Form}
					/>
				)}
				<Form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => {
						return (
							<button
								type="submit"
								disabled={!canSubmit}
								className="text-white cursor-pointer bg-black font-bold px-4 py-2 mt-4 rounded-[3px] cursor-pointer"
							>
								{!isSubmitting ? "CONTINUE" : "SUBMITTING"}
							</button>
						);
					}}
				</Form.Subscribe>
			</form>
		</div>
	);
};

export default index;
