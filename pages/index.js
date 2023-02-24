import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=coffee&ll=24.809365315472824%2C121.04167441459744&limit=6",
    options
  );

  const data = await response.json();

  return {
    props: { coffeeStores: data.results },
  };
} //on the server side and will show at Sources

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner component");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="coffee-shop-people"
          />
        </div>
        {props.coffeeStores?.length > 0 && (
          <>
            <h2 className={styles.heading2}>HsinChu stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.fsq_id}
                  name={coffeeStore.name}
                  imgUrl={
                    coffeeStore.imgUrl ||
                    "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
                  }
                  href={`/coffee-store/${coffeeStore.fsq_id}`}
                  className={styles.card}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
