import "../styles/LandingPage.css";
import "../styles/Auth.css";
import "../styles/Components.css";
import "../styles/Home.css";
import "../styles/Dashboard.css";
import "../styles/Animations.css";
import "../styles/Profile.css";
import "../styles/Docs.css";
import '../styles/Products.css';
import '../styles/globals.css';

import { GlobalProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }) {
  return <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
}

export default MyApp
