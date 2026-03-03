import { Post } from "@/types/Post";
import Link from "next/link";

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  console.log("posts: ", posts);
  return { props: { posts } };
}

type BlogType = {
  posts: Post[];
};

export default function Blog({ posts }: BlogType) {
  console.log("posts:", posts);
  return (
    <div>
      <Link href="/">Page accueil</Link>
      {posts.map((p, i) => (
        <div key={`post-${i}`}>
          <Link href={`/blog/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </div>
  );
}
