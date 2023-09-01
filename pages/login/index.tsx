import Login from "@components/core/login";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log In to the app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
