import Feed from "@components/core/feed";
import Head from "next/head";
import styles from "./FeedPage.module.scss";

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="View your feed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Feed />
      </div>
    </>
  );
};

export default FeedPage;
