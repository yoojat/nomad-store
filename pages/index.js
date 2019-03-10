import Head from "next/head";
import Link from "next/link";
import withLayout from "../lib/withLayout";

const Index = () => (
  <h1>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Hello from the index</h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </h1>
);

export default withLayout(Index);
