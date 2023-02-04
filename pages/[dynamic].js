import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const DynamicRoute = () => {
  const router = useRouter();
  const query = router.query.dynamic;

  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Hi there I am a dynamic route
    </div>
  );
};

export default DynamicRoute;
