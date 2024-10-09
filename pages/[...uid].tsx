import { createClient } from '@/prismicio'
import { GetStaticPropsContext } from 'next'
import * as prismic from '@prismicio/client'
import { BasicPageProps } from '@/types/basicpageprops'
import Error from 'next/error'
import { getCustomTypes } from '@/lib/getCustomTypes'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import Layout from '@/components/layout'
import { PageDocument } from '@/prismicio-types'
import { getLocales } from '@/types/getLocales'
import { Trans, useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import SEO from '@/components/seo'
import PageHeader from '@/components/pageheader'
import { CallToAction } from '@/components/call-to-action'
import { CustomLink } from '@/components/customlink'
import { WebProjects } from '@/components/web-projects'

type PageParams = { uid: string }

export async function getStaticProps({
  params,
  previewData,
  locale,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })

  let page: PageDocument | null = null
  let errorCode = null

  try {
    const uid = params?.uid[params?.uid.length - 1]

    page = await client.getByUID('page', uid || '', {
      lang: locale,
    })
  } catch (error) {
    if (!(error as any).response) {
      errorCode = '404'
    }
  }

  const { header, footer } = await getCustomTypes(client, locale)
  const locales = await getLocales(page, client)

  return {
    props: { page, header, footer, locales, errorCode },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page', { lang: '*' })

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  }
}

interface ContentPageProps extends BasicPageProps {
  page: PageDocument
}

export default function Contentpage({
  page,
  header,
  footer,
  locales,
  errorCode,
}: ContentPageProps) {
  const { t } = useTranslation()
  const location = useRouter()

  if (errorCode) {
    return <Error statusCode={404} />
  }

  const yearsOfExperience = new Date().getFullYear() - 2016

  return (
    <Layout
      maxWidth="max-w-[1920px]"
      locales={locales}
      header={header}
      footer={footer}
    >
      <SEO
        title={page.data.meta_title}
        ogImage={page.data.meta_image.url}
        ogImageAlt={page.data.meta_image.alt}
        description={page.data.meta_description}
        location={location.asPath}
      />

      <SliceZone
        slices={page.data.slices}
        components={components}
      />
      <section className="flex w-full flex-col items-center">
        <PageHeader title="Work with me" />
        <section className="flex w-full flex-col items-center gap-24">
          <article className="max-w-2xl">
            <h2 className="mb-4">{t('work.headline-two')}</h2>
            <section className="mb-10">
              <a href="#web-development">
                <h3>🛠 {t('work.subline-one')}</h3>
              </a>
              <p>{t('work.text-one')}</p>
              <ul className="ml-8 mb-4 flex list-disc flex-col gap-2">
                <li>
                  <Trans i18nKey={'work.service-one'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-two'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-three'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-four'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-five'} />
                </li>
                <li>
                  <Trans i18nKey={'work.service-six'} />
                </li>
              </ul>
              <p>{t('work.text-two')}</p>
            </section>
            <section className="mb-10">
              <h4>{t('work.tech-stack')}</h4>
              <p>
                {t('work.tech-stack-text-one')}
                <CustomLink href="https://jamstack.org/">
                  Jamstack
                </CustomLink>. {t('work.tech-stack-text-two')}
              </p>
              <ul className="flex list-none flex-wrap gap-x-4 gap-y-2 text-xl">
                <li className="mb-0">HTML & CSS</li>
                <li>JavaScript</li>
                <li className="mb-0">TypeScript</li>
                <li className="mb-0">
                  <CustomLink href="https://reactjs.org/">React</CustomLink>
                </li>
                <li>
                  <CustomLink href="https://vuejs.org/">Vue</CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://nextjs.org/">NextJS</CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://www.gatsbyjs.com/">
                    Gatsby
                  </CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://tailwindcss.com/">
                    TailwindCSS
                  </CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://prismic.io/">Prismic</CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://sanity.io/">Sanity</CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://www.netlify.com/">
                    Netlify
                  </CustomLink>
                </li>
                <li className="mb-0">
                  <CustomLink href="https://vercel.com/">Vercel</CustomLink>
                </li>
              </ul>
            </section>
            <section
              className="mb-10"
              id="seo"
            >
              <a href="#seo">
                <h3>🔎 SEO</h3>
              </a>
              <p>
                <Trans i18nKey={'work.seo-one'} />
              </p>
              <h4>On-Site Check</h4>
              <p>
                <Trans i18nKey={'work.seo-two'} />
              </p>
              <h4>Content Check</h4>
              <p>
                <Trans i18nKey={'work.seo-three'} />
              </p>
            </section>
            <section className="mb-10">
              <a href="#web-design">
                <h3>🎨 {t('work.subline-two')}</h3>
              </a>
              <p>
                <Trans i18nKey={'work.web-design-one'} />
              </p>
              <p>
                <Trans i18nKey={'work.web-design-two'} />
              </p>
            </section>
            <section>
              <a href="#technical-writing">
                <h3>📄 Technical Writing</h3>
              </a>
              <p>
                <Trans i18nKey={'work.technical-writing-one'} />
              </p>
              <p>
                <Trans i18nKey={'work.technical-writing-two'} />
              </p>
              <CallToAction href="mailto:hello@marcoheine.com">
                {t('work.technical-writing-cta')}
              </CallToAction>
            </section>
          </article>

          <WebProjects showAll />
        </section>
      </section>
    </Layout>
  )
}
