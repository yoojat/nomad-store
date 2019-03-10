import Head from "next/head";
import { withRouter } from "next/router";
const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <a>lalalala</a>
  </div>
);

export default withRouter(Movie);
