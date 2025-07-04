import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { Open_Sans, Poppins, Roboto } from 'next/font/google';



export const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-poppins'
});
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-roboto'
});
export const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--open_sans'
});

const Layout = ({children, pageTitle}) => {
  return (
    <>
      <Head>
        <title> {pageTitle ?? ""} | Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className} ${roboto.className} ${opensans.variable}`}>
        <Navbar/>
            <section>
                {children}
            </section>
        <Footer/>
      </main>
    </>
  )
};

export default Layout;
