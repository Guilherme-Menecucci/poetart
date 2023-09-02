import Navbar from "~/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <main className="flex min-h-nav-screen flex-col items-center justify-between">
        <div className="max-w-5xl w-full p-4 pt-8 h-full">{children}</div>
      </main>
    </div>
  );
}
