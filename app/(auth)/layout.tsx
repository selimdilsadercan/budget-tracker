import Logo from "@/components/global/Logo";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Logo type="normal" />
      <div className="mt-12">{children}</div>
    </div>
  );
}

export default Layout;
