import Link from "next/link";

export default props => (
  <Link href={`/movie?id=${props.id}`} as={`/post/${props.id}`}>
    {/* as는 실제로 유저가 보개 되는 것 */}
    <a>{props.title}</a>
  </Link>
);
