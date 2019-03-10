import Head from "next/head";
import Link from "next/link";

export default () => (
  <h1>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </h1>
);
