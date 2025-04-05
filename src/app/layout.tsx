import Footer from "./_Components/footer/page";
import NavBar from "./_Components/navBar/page";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
    
      <NavBar/>
    
      {children}
      <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
