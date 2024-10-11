'use server'

import React from 'react'
import { getKeyRoles } from '../../actions/keyRoles'
import KeyRolesList from '../../../components/lists/KeyRolesList'

const Page = async () => {
  const roles = await getKeyRoles()
  if (!roles) {
    return <div>No roles found</div>
  }
  return (
    <section className="space-y-10 min-w-full">
      <h1>Projects</h1>
      <KeyRolesList roles={roles} />
    </section>
  )
}

export default Page
