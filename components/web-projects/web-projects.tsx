import * as React from 'react'
import { useTranslation } from 'next-i18next'

// @ts-ignore
import AndersontourWebsite from '../../images/andersontour-website.webp'
// @ts-ignore
import DiedaWebsite from '../../images/dieda-website.webp'
// @ts-ignore
import AerosolallianceWebsite from '../../images/aerosolalliance-website.webp'
// @ts-ignore
import LauraheineWebsite from '../../images/lauraheine-website.webp'
// @ts-ignore
import SenelektroWebsite from '../../images/senelektro-website.webp'
// @ts-ignore
import StuttgarterKickersWebsite from '../../images/stuttgarter-kickers-website.webp'

import { CallToAction } from '../call-to-action'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Stuttgarter Kickers',
    partners: [
      {
        partnerName: 'Werk8',
        partnerLink: 'https://www.werk8.design/',
      },
    ],
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
        className="mb-32 w-full bg-slate-50 p-5 md:p-20"
        id="projects"
      >
        <section className="mx-auto flex max-w-5xl flex-col items-center">
          <h2 className="text-center">{t('web-projects.headline')}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center">
            {t('web-projects.text')}
          </p>
          <section
            className={`grid gap-y-24 md:grid-cols-1 ${showAll ? 'mb-8' : ''}`}
          >
            {projectsToShow.map((project) => (
              <React.Fragment key={project.title}>
                <section className="grid gap-y-8 gap-x-12 md:grid-cols-2 md:gap-y-16">
                  <Image
                    alt={project.imageAlt}
                    src={project.image}
                    className="rounded-lg shadow-custom transition-all hover:-translate-y-1 hover:shadow-customDark"
                  />

                  <article className="flex flex-col justify-center">
                    <h3 className="text-primaryColorOne">{project.title}</h3>

                    {project?.partners && project.partners.length > 0 ? (
                      <p>
                        <span className="mr-2">{t('home.cooperation')}</span>
                        {project.partners?.map((partner) => (
                          <a
                            key={partner.partnerName}
                            href={partner.partnerLink}
                            target="_blank"
                            rel="
                noopener noreferrer"
                          >
                            {partner.partnerName}
                          </a>
                        ))}
                      </p>
                    ) : null}

                    <p>Tools: {project.tools}</p>

                    <p className="flex gap-2">
                      <span>Link:</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel} &#8599;
                      </a>
                    </p>
                  </article>
                </section>
              </React.Fragment>
            ))}
          </section>

          {!showAll ? (
            <Link
              href="/work/#projects"
              className="mx-auto mt-10"
            >
              → {t('home.all-projects')}
            </Link>
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
