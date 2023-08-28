import { useContext } from 'react'
import { OrganizeContext, type OrganizeData } from '@/contexts/OrganizeContext'

export function useOrganize() {
  return useContext(OrganizeContext) as OrganizeData
}