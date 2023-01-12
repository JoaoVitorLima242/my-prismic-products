import type { GetStaticPropsContext } from 'next'
import { createClient } from '../prismicio'

// ...

export async function getStaticProps({
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const page = await client.getByUID('home', 'home')

  return {
    props: {
      page,
    },
  }
}