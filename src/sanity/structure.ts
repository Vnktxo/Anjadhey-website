import type { StructureResolver } from 'sanity/desk'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S: any) =>
  S.list()
    .id('root')
    .title('Content')
    .items(S.documentTypeListItems())
