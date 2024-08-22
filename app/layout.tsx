import "../styles/globals.css";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
          {children}
          
      </body>
      <Footer />
    </html>
  );
}
