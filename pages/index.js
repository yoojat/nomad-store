import Head from "next/head";
import Link from "next/link";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <h1>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Posts</h1>
    <ul>
      <li>
        <PostLink title={"Something"} />
      </li>
      <li>
        <PostLink title={"Someting else"} />
      </li>
    </ul>
  </h1>
);

export default withLayout(Index);
