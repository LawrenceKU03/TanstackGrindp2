import { createFileRoute } from "@tanstack/react-router";
import Form from "../../components/Form";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Form headerText="Login" isLogin={true} />
    </div>
  );
}
