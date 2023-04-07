import { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import useTrackLocation from "@/hooks/use-track-location";
import { ACTION_TYPES, StoreContent } from "@/store/store-context";
export async function getStaticProps() {
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: { coffeeStores },
  };
} //on the server side and will show at Sources

export default function Home(props) {
  const [coffeeStoresError, setCoffeeStoresError] = useState(null);

  const { handleTrackLocation, locationErrMsg, isFindingLocation } =
    useTrackLocation();

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
  };

  const { dispatch, state } = useContext(StoreContent);

  const { coffeeStores, latLong } = state;

  async function setCoffeeStoresByLocation() {
    if (latLong) {
      try {
        const fetchedCoffeeStores = await fetch(
          `/api/getCoffeeStoresByLocation?latLong=${latLong}&limit=30`
        );
        const coffeeStores = await fetchedCoffeeStores.json();
        dispatch({
          type: ACTION_TYPES.SET_COFFEE_STORES,
          payload: { coffeeStores },
        });
        setCoffeeStoresError("");
        //set coffee stores
      } catch (error) {
        //set error
        setCoffeeStoresError(error.message);
      }
    }
  }

  useEffect(() => {
    setCoffeeStoresByLocation();
  }, [latLong]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText={`${
            isFindingLocation ? "Locating" : "View stores nearby"
          }`}
          handleOnClick={handleOnBannerBtnClick}
        />
        {locationErrMsg && <p>something went wrong: {locationErrMsg}</p>}
        {coffeeStoresError && <p>something went wrong: {coffeeStoresError}</p>}
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="coffee-shop-people"
          />
        </div>

        {coffeeStores?.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Stores near me</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                  className={styles.card}
                />
              ))}
            </div>
          </div>
        )}
        {props.coffeeStores?.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>HsinChu stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                  className={styles.card}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
