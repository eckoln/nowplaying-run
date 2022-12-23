import { Outlet } from "@remix-run/react";

export default function App() {
  return (
    <main className="grid min-h-screen w-full place-items-center">
      <Outlet />
    </main>
  );
}
