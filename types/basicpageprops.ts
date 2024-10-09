import { FooterDocument, HeaderDocument } from '@/prismicio-types'
import * as prismic from '@prismicio/types'

export interface BasicPageProps {
  header: HeaderDocument
  footer: FooterDocument
  errorCode?: string
  locales: prismic.Language[]
}
