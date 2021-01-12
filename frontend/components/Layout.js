import Head from "next/head";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    <div className="container">{children}</div>
    <Footer />
    <ToastContainer />
  </>
);

export default Layout;
