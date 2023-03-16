import HtmlHead from 'src/components/HtmlHead'
import { useRouter } from 'next/router'
// import Image from 'next/image'

export default function Post() {
  const router = useRouter();
  console.log({router})
  return (
    <>
      <HtmlHead />
      <main className="">
        
        Post page {router.query.id}
        
      </main>
    </>
  )
}
