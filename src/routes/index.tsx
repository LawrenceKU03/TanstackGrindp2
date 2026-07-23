import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/web/Navbar";
import Form from "../components/Form";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="">
			<Navbar />
			<Form headerText="Sign Up" />
		</div>
	);
}
