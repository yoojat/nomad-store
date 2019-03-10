import Link from "next/link";

export default props => (
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
    {/* as는 실제로 유저가 보개 되는 것 */}
    <a>
      {props.title}
      <style jsx global>{`
        body {
          background-color: red;
        }
      `}</style>
    </a>
  </Link>
);
