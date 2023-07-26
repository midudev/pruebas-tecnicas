import { Footer, Header, Container } from "@/components";
import { socialLinks } from "@/constants";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow w-full flex-col justify-between bg-slate-100">
        <Container className="my-5">
          {children}
        </Container>
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default RootLayout;
