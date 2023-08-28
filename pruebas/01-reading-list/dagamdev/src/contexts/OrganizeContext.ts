import { createContext } from 'react'
import type { Organize } from '@/utils/types'

export interface OrganizeData {
  organize: Organize | undefined
  updateOrganize: (updatedOrganize: Organize | undefined) => void
}

export const OrganizeContext = createContext<OrganizeData | undefined>(undefined)