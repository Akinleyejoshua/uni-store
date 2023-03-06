import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { HomeHeader } from "../../components/HomeHeader";
import { GlobalContext } from "../../context/GlobalContext";

export default function ProductData() {
  const router = useRouter();
  const {
    product: { products },
  } = useContext(GlobalContext);

  const { id } = router.query;
  // console.log(id);
  const [state, setState] = useState({
    item: {},
  });

  useEffect(() => {
    const filter = products.filter((item) => item._id === id);
    setState((state) => ({
      ...state,
      item: filter,
    }));
    console.log(filter);
  }, [setState]);

  return (
    <div className="product">
      <Head>
        <title>UNI-STORE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />

      <section className="product">
        <h1>{state.item[0]?.name}</h1>
      </section>
    </div>
  );
}
