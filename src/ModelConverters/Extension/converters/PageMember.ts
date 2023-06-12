import { ZettelTypes } from '@zettelooo/api-types'
import { Model } from '../../../Model'

export namespace PageMember {
  export function toPublic(pageMember: Model.PageMember): ZettelTypes.Extension.Model.PageMember {
    return {
      type: ZettelTypes.Extension.Model.Type.PageMember,
      id: pageMember.id,
      createdAt: pageMember.createdAt,
      updatedAt: pageMember.updatedAt,
      version: pageMember.version,
      isDeleted: pageMember.isDeleted,
      pageId: pageMember.pageId,
      userId: pageMember.userId,
      role: pageMember.role ?? ZettelTypes.Extension.Model.PageMember.Role.Viewer, // TODO: We require a more proper conversion here in the future
    }
  }

  export function fromPublic(pageMember: ZettelTypes.Extension.Model.PageMember): Model.PageMember {
    return {
      type: Model.Type.PageMember,
      id: pageMember.id,
      createdAt: pageMember.createdAt,
      updatedAt: pageMember.updatedAt,
      version: pageMember.version,
      isDeleted: pageMember.isDeleted,
      pageId: pageMember.pageId,
      userId: pageMember.userId,
      role: pageMember.role, // TODO: We require a more proper conversion here in the future
    }
  }
}