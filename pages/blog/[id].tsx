import { useRouter } from "next/router";

export async function getStaticPaths() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );

  return {
    paths: posts.map((p: { id: number }) => ({ params: { id: String(p.id) } })),
    fallback: false,
  };
}

export async function getStaticProps() {
  return { props: {} };
}

type BlogSingleType = {};
export default function BlogSingle({}: BlogSingleType) {
  const router = useRouter();

  console.log("router:", router);
  return <div>BlogSingle {router.query.id}</div>;
}
