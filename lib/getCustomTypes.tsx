import * as prismic from '@prismicio/client'

export const getCustomTypes = async (
  client: prismic.Client,
  locale: string | undefined
) => {
  let header = null
  let footer = null

  try {
    header = await client.getByUID('header', 'header', {
      lang: locale,
    })

    footer = await client.getByUID('footer', 'footer', {
      lang: locale,
    })
  } catch (error) {
    console.error(error)
  }

  return {
    header,
    footer,
  }
}
