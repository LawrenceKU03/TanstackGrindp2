import { TextField } from "@radix-ui/themes";

const index = () => {
	return (
		<div>
			<form className="w-[40%] bg-white rounded-md shadow-md mx-auto">
				<TextField.Root placeholder="Username" />
				<TextField.Root placeholder="Password" />
				<TextField.Root placeholder="Confirm Password" type="password" />
			</form>
		</div>
	);
};

export default index;
