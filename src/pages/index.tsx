// import { GetServerSideProps } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import { SubscribeButton } from "../components/Header/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

/* Server Side Rendering - SSR
Server side generation of HTML, which makes it possible for your webapp to have
content even with js disabled in the browser, which is very good for SEO.

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1LFx5BF9tUxFI1Q14aPihaAf");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};*/

/* Static Site Generation - SSG
Same as server side rendering, but it only generates the page on server side 
once before revalidation period, it's also important to notice that the page 
should'nt have any customization per user, like a custom welcome message for
example

*/

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1LFx5BF9tUxFI1Q14aPihaAf");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
