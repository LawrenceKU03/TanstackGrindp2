import { createFileRoute } from "@tanstack/react-router";
import Form from "../../components/Form";

export const Route = createFileRoute("/_auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Form headerText="Sign Up" />
    </div>
  );
}
