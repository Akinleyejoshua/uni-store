import Head from "next/head";
// import Image from "next/image";
import { Hero } from "../components/Hero";
import { HomeHeader } from "../components/HomeHeader";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { HomeFooter } from "../components/HomeFooter";

export default function Contact() {
  return (
    <div className="landingpage">
      <Head>
        <title>UNI-STORE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />
      <Hero />
      <div className="space-1"></div>

      <section className="contact">
        <div className="center flex col text-center heading">
          <h1>Stay In Touch with Our Updates</h1>
          <p>connect with us through our social media handles</p>
          <div className="space-1"></div>
          <div className="flex center">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="flex col">
          <div className="items- text-left flex col center">
            <div className="input-bar">
              <small>Full name</small>
              <div className="input">
                <input placeholder="Full name" />
              </div>
            </div>
            
          <div className="space-1"></div>

            <div className="input-bar">
              <small>Email</small>
              <div className="input">
                <input placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="space-1"></div>
          <button className="center">Join now</button>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}
