export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow w-full px-4 lg:px-6">{children}</main>

    </div>
  );
}
