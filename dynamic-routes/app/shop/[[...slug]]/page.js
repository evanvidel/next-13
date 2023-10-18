export default function Page({params}) {
  console.log(params.slug);
  return (
    <>Dados dinâmicos: {params.slug}</>
  )
}

export async function generateMetadata({params}) {
  return{
    title: `Página de: ${params.slug}`,
    description:`Página de ${params.slug}`,
  }
}