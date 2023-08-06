import NextNProgress from "nextjs-progressbar";
import { ToastContainer, toast } from "react-toastify";

import "../styles/globals.scss";
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D" />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
