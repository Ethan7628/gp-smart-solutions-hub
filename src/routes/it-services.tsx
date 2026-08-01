import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/it-services")({
  component: ITServicesLayout,
});

function ITServicesLayout() {
  return <Outlet />;
}