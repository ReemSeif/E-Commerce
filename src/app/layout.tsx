import Footer from "./_Components/footer/page";
import NavBar from "./_Components/navBar/page";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

import CartContext from '../context/CartContext';
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
    <CartContext>
     <main className="flex flex-col min-h-screen flex-grow">{children}</main>
      </CartContext>
      <Footer/>
      </body>
    </html>
    </ClerkProvider>
  
  );
}
