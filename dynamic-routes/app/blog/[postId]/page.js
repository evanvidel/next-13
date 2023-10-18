export default function Page({params}) {
  return <>Meu Post: {params.postId}</>;
}

export async function generateMetadata({params}) {
  return{
    title: `Post ${params.slug}`,
    description:`Página do Post ${params.slug}`,
  }
}

export async function generateStaticParams(){
  const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await request.json()

  return posts.map((post) =>({
    postId: String(post.id),
  }))
}
