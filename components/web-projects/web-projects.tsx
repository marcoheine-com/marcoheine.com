import * as React from 'react'
import { Trans, useTranslation } from 'next-i18next'

import AndersontourWebsite from '../../public/images/andersontour-website.webp'
import DiedaWebsite from '../../public/images/dieda-website.webp'
import AerosolallianceWebsite from '../../public/images/aerosolalliance-website.webp'
import LauraheineWebsite from '../../public/images/lauraheine-website.webp'
import SenelektroWebsite from '../../public/images/senelektro-website.webp'
import StuttgarterKickersWebsite from '../../public/images/stuttgarter-kickers-website.webp'
import DHLBrandHubWebsite from '../../public/images/dhl-brand-hub-website.png'
import AbaufdiewieWebsite from '../../public/images/abaufdiewiese-website.png'
import CoachCollectiveWebsite from '../../public/images/coach-collective-website.png'

import { CallToAction } from '../call-to-action'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { CustomLink } from '@/components/customlink'

interface Project {
  title: string
  description?: string
  clients?: {
    clientName: string
    clientLink: string
  }[]
  partners?: {
    partnerName: string
    partnerLink: string
  }[]
  tools: string
  linkLabel: string
  link: string
  image: StaticImageData
  imageAlt: string
}

const projects: Project[] = [
  {
    title: 'DHL Brand Hub',
    clients: [
      {
        clientName: 'STRICHPUNKT Design',
        clientLink: 'https://www.strichpunkt-design.de/',
      },
    ],
    description: 'web-projects.dhlbrandhub.description',
    tools: 'React, Typescript, Nest.js, Vue.js, Microsoft Azure, Node.js',
    linkLabel: 'https://www.dpdhl-brands.com/',
    link: 'https://www.dpdhl-brands.com/',
    image: DHLBrandHubWebsite,
    imageAlt: 'screenshot of the dpdhl-brands website website',
  },
  {
    title: 'Stuttgarter Kickers',
    partners: [
      {
        partnerName: 'Werk8',
        partnerLink: 'https://www.werk8.design/',
      },
    ],
    description: 'web-projects.stuttgarterkickers.description',
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    linkLabel: 'stuttgarter-kickers.de',
    link: 'https://www.stuttgarter-kickers.de',
    image: StuttgarterKickersWebsite,
    imageAlt: 'screenshot of stuttgarter kickers website',
  },
  {
    title: 'Dieda',
    description: 'Website Relaunch, technische Umsetzung, CMS Integration',
    partners: [
      { partnerName: 'Werk8', partnerLink: 'https://www.werk8.design/' },
    ],
    tools:
      'React, Typescript, Next.js, TailwindCSS, Vercel, Algolia, Prismic, FormSpree',
    linkLabel: 'dieda.de',
    link: 'https://www.dieda.de',
    image: DiedaWebsite,
    imageAlt: 'screenshot of dieda website',
  },
  {
    title: 'Ab auf die Wiese',
    clients: [
      {
        clientName: 'Katharina Jäger',
        clientLink: 'https://kjphotography.de',
      },
    ],
    description: 'Technische Umsetzung',
    tools: 'Remix, Shopify, React, Typescript, TailwindCSS, Sanity',
    linkLabel: 'abaufdiewiese.de',
    link: 'https://abaufdiewiese.de',
    image: AbaufdiewieWebsite,
    imageAlt: 'screenshot of the dpdhl-brands website website',
  },
  {
    title: 'Coach Collective',
    partners: [
      {
        partnerName: 'Werk8',
        partnerLink: 'https://www.werk8.design/',
      },
    ],
    description: 'Technische Umsetzung',
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    linkLabel: 'coach-collective.de',
    link: 'https://www.coach-collective.de',
    image: CoachCollectiveWebsite,
    imageAlt: 'screenshot of the dpdhl-brands website website',
  },
  {
    title: 'Aerosol Alliance',
    description: 'Technische Umsetzung',
    partners: [
      {
        partnerName: 'Studio Vierkant',
        partnerLink: 'https://studiovierkant.de/',
      },
    ],
    tools: 'React, Typescript, Next.js, TailwindCSS, Firebase, Vercel, Prismic',
    linkLabel: 'aerosolalliance.com',
    link: 'https://aerosolalliance.com',
    image: AerosolallianceWebsite,
    imageAlt: 'screenshot of aerosol alliance website',
  },
  {
    title: 'Andersontour',
    description: 'Technische Umsetzung und Integration in CMS',
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    linkLabel: 'andersontour.de',
    link: 'https://www.andersontour.de',
    image: AndersontourWebsite,
    imageAlt: 'screenshot of andersontour website',
  },
  {
    title: 'finding the little things illustrations',
    description: 'Technische Umsetzung',
    tools: 'React, Typescript, Gatsby, TailwindCSS, Netlify, Prismic',
    linkLabel: 'lauraheine.com',
    link: 'https://lauraheine.com',
    image: LauraheineWebsite,
    imageAlt: 'screenshot of findingthelittlethings illustrations website',
  },
  {
    title: 'Sen Elektro',
    partners: [
      {
        partnerName: 'Werk8',
        partnerLink: 'https://www.werk8.design/',
      },
    ],
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    linkLabel: 'senelektro.de',
    link: 'https://senelektro.de',
    image: SenelektroWebsite,
    imageAlt: 'screenshot of sen elektro website',
  },
]

interface Props {
  showAll?: boolean
}

export const WebProjects: React.FC<Props> = ({ showAll = false }) => {
  const projectsToShow = showAll ? projects : projects.slice(0, 3)
  const { t } = useTranslation()

  return (
    <>
      <section
        className="mb-32 w-full"
        id="projects"
      >
        <section className="mx-auto flex max-w-5xl flex-col items-center">
          <h2 className="text-center">{t('web-projects.headline')}</h2>
          <p className="mx-auto mb-10 max-w-2xl">{t('web-projects.text')}</p>
          <p className="mb-20 max-w-2xl">{t('web-projects.text-two')}</p>
          <section
            className={`grid gap-y-32 md:grid-cols-1 ${showAll ? 'mb-8' : ''}`}
          >
            {projectsToShow.map((project, index) => (
              <React.Fragment key={project.title}>
                <section className="grid gap-y-8 gap-x-12 bg-gradient-to-l md:grid-cols-2 md:gap-y-16">
                  <a
                    href={project.link}
                    className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
                  >
                    <Image
                      alt={project.imageAlt}
                      src={project.image}
                      className={`rounded-lg shadow-custom transition-all hover:-translate-y-1 hover:shadow-customDark`}
                      sizes="(min-width: 768px) 100vw, (min-width: 1024px) 50vw, 100vw"
                    />
                  </a>

                  <article className="flex flex-col justify-center">
                    <h3 className="text-primaryColorOne">{project.title}</h3>
                    {project.description ? (
                      <p className="mb-4">
                        <Trans i18nKey={`${project.description}`} />
                      </p>
                    ) : null}

                    {project?.clients && project.clients.length > 0 ? (
                      <p>
                        <span className="mr-2">{t('home.client')}</span>
                        {project.clients?.map((client) => (
                          <CustomLink
                            key={client.clientName}
                            href={client.clientLink}
                          >
                            {client.clientName}
                          </CustomLink>
                        ))}
                      </p>
                    ) : null}
                    {project?.partners && project.partners.length > 0 ? (
                      <p>
                        <span className="mr-2">{t('home.cooperation')}</span>
                        {project.partners?.map((partner) => (
                          <CustomLink
                            key={partner.partnerName}
                            href={partner.partnerLink}
                          >
                            {partner.partnerName}
                          </CustomLink>
                        ))}
                      </p>
                    ) : null}

                    <p>Tools: {project.tools}</p>

                    <p className="flex items-start gap-2">
                      <span>Link:</span>
                      <CustomLink href={project.link}>
                        {project.linkLabel}
                      </CustomLink>
                    </p>
                  </article>
                </section>
              </React.Fragment>
            ))}
          </section>

          {!showAll ? (
            <CustomLink
              href="/work/#projects"
              className="mx-auto mt-10"
            >
              → {t('home.all-projects')}
            </CustomLink>
          ) : null}
          {showAll ? (
            <CallToAction href="mailto:hello@marcoheine.com">
              {t('work.call-to-action-2')}
            </CallToAction>
          ) : null}
        </section>
      </section>
    </>
  )
}
