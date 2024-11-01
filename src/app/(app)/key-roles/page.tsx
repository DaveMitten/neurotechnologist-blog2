'use server'

import React from 'react'
import { getKeyRoles } from '../../actions/keyRoles'
import KeyRolesList from '../../../components/lists/KeyRolesList'
import Hero from '../../../components/sections/Hero'

const Page = async () => {
  const roles = await getKeyRoles()
  if (!roles) {
    return <div>No roles found</div>
  }
  return (
    <section className="space-y-10 min-w-full container mx-auto my-24">
      <Hero title="Key Roles" description="A list of key roles I have held in my career." />
      <KeyRolesList roles={roles} />
    </section>
  )
}

export default Page
