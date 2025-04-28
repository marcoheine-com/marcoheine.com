import { FilledContentRelationshipField } from '@prismicio/client'

export const filledContentRelationshipTypeGuard = <T>(
  field: any
): field is FilledContentRelationshipField<T> => {
  if (field?.link_type === 'Document') {
    return field?.url !== undefined || field?.uid !== undefined
  }

  return false
}
