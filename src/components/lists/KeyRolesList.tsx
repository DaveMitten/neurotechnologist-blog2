'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import onetribeLogo from '@/public/images/onetribelogo.png'
import type { KeyRole } from '@/types/general'

type KeyRolesListProps = {
  roles: KeyRole[]
}

const KeyRolesList = ({ roles }: KeyRolesListProps) => {
  const router = useRouter()

  return roles.map((role) => {
    const id = role.company.replace(/\s+/g, '-').toLowerCase()
    return (
      <section key={role.title} className="mx-auto min-w-[350px] max-w-screen-md">
        <h2 className="mb-8 text-center transition-colors duration-300">Key Roles</h2>

        <div className="flex justify-center">
          <div className="flex flex-col gap-4 max-w-screen-md">
            {roles.map((role) => (
              <Card key={role.company}>
                <div className="flex flex-col gap-2">
                  <CardContent>
                    <div className="grid grid-cols-5">
                      <div className="flex flex-col gap-2 col-span-3">
                        <h3>{role.company}</h3>
                        <div>{role.overview}</div>
                      </div>
                      <div className="relative w-[200px] h-[200px] col-span-2 justify-self-center">
                        <Image
                          src={onetribeLogo}
                          alt={role.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <Button onClick={() => router.push(`/key-roles/${id}`)} variant="default">
                      View Role
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  })
}

export default KeyRolesList
