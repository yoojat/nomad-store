import Head from "next/head";
import { withRouter } from "next/router";
const Movie = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    <h1>{props.title}</h1>
    <a>lalalala</a>
  </div>
);

Movie.getInitialProps = async () => {
  return {
    movie: "loaremdfpoi"
  };
};

export default withRouter(Movie);
