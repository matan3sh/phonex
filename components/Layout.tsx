import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface IProps {
  children: ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <div className="layout">
      <Head>
        <title>Phonex Store</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
