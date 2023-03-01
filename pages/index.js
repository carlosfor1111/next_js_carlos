import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Card from "@/components/card";
import { fetchCoffeeStores } from "@/lib/coffee-store";
import useTrackLocation from "@/hooks/use-track-location";
export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: { coffeeStores },
  };
} //on the server side and will show at Sources

export default function Home(props) {
  const { handleTrackLocation, latLong, locationErrMsg, isFindingLocation } =
    useTrackLocation();

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
  };

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
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="coffee-shop-people"
          />
        </div>
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
