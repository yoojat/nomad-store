import Head from "next/head";
import PostLink from "../components/PostLink";

export default () => (
  <h1>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Movies:</h1>
    <ul>
      <li>
        <PostLink title={"Something"} id={0} />
      </li>
      <li>
        <PostLink title={"Someting else"} id={1} />
      </li>
    </ul>
  </h1>
);
