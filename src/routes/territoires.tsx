import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/territoires")({
  component: TerritoiresLayout,
});

function TerritoiresLayout() {
  return <Outlet />;
}
