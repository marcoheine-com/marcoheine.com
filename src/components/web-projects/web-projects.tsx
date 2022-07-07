import { useI18next } from 'gatsby-plugin-react-i18next'
import * as React from 'react'

// @ts-ignore
import AndersontourWebsite from '../../images/andersontour-website.webp'
// @ts-ignore
import DiedaWebsite from '../../images/dieda-website.webp'
// @ts-ignore
import AerosolallianceWebsite from '../../images/aerosolalliance-website.webp'
// @ts-ignore
import LauraheineWebsite from '../../images/lauraheine-website.webp'

const projects = [
  {
    title: 'Dieda',
    description: 'Website Relaunch, technische Umsetzung, CMS Integration',
    tools:
      'React, Typescript, Next.js, TailwindCSS, Vercel, Algolia, Prismic, FormSpree',
    url: 'dieda.de',
    image: DiedaWebsite,
    imageAlt: 'screenshot of dieda website',
  },
  {
    title: 'Andersontour',
    description: 'Technische Umsetzung und Integration in CMS',
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    url: 'andersontour.de',
    image: AndersontourWebsite,
    imageAlt: 'screenshot of andersontour website',
  },
  {
    title: 'Aerosol Alliance',
    description: 'Technische Umsetzung',
    tools: 'React, Typescript, Next.js, TailwindCSS, Firebase, Vercel, Prismic',
    url: 'aerosolalliance.com',
    image: AerosolallianceWebsite,
    imageAlt: 'screenshot of aerosol alliance website',
  },
  {
    title: 'finding the little things illustrations',
    description: 'Technische Umsetzung',
    tools: 'React, Typescript, Gatsby, TailwindCSS, Netlify, Prismic',
    url: 'lauraheine.com',
    image: LauraheineWebsite,
    imageAlt: 'screenshot of findingthelittlethings illustrations website',
  },
]

export const WebProjects: React.FC = () => {
  const { t } = useI18next()

  return (
    <>
      <section className="w-full mb-32 bg-slate-50 p-5 md:p-20">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-center">{t('web-projects.headline')}</h2>
          <p className="mb-10 text-center mx-auto max-w-2xl">
            {t('web-projects.text')}
          </p>
          <section className="grid md:grid-cols-2 gap-y-8 gap-x-12 md:gap-y-16">
            {projects.map((project) => (
              <React.Fragment key={project.title}>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="
            noopener noreferrer"
                >
                  <img
                    alt={project.imageAlt}
                    src={project.image}
                    className="md:mb-10 shadow-custom rounded-lg transition-all hover:-translate-y-1 hover:shadow-customDark"
                    placeholder="blurred"
                  />
                </a>
                <article className="flex flex-col justify-center">
                  <h3>{project.title}</h3>
                  <p>Tools: {project.tools}</p>
                  <span className="flex gap-2">
                    Link:
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="
              noopener noreferrer"
                    >
                      {project.url}
                    </a>
                  </span>
                </article>
              </React.Fragment>
            ))}
          </section>
        </section>
      </section>
    </>
  )
}
