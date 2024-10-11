'use client'

import React from 'react'
import KeyRole from '@/components/cards/KeyRole'
import { keyRoles } from '@/data/keyRoleData'
import type { KeyRole as KeyRoleType } from '@/types/general'

const Page = ({ params }: { params: { id: string } }) => {
  console.log('params', params)
  const role: KeyRoleType | undefined = keyRoles?.find((role) => {
    if (role?.company) {
      return role?.company.replace(/\s+/g, '-').toLowerCase() === params?.id
    }
  })

  if (!role) {
    return <div>Role not found</div>
  }

  return <KeyRole role={role} />
}

export default Page
