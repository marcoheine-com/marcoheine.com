import * as prismic from '@prismicio/client'

export const filledLinkTypeGuard = (
  field: any
): field is prismic.FilledLinkToMediaField | prismic.FilledLinkToWebField => {
  if (field.link_type === 'Document') {
    return field?.uid !== undefined
  }
  return field?.url !== undefined
}
