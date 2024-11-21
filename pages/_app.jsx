import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import useSWR from 'swr'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
