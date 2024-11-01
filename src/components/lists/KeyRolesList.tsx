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
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 max-w-screen-md">
            {roles.map((role) => (
              <Card key={role.company}>
                <CardContent className="flex flex-col gap-4 ">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="flex flex-col space-y-2 md:w-2/3 justify-center">
                      <h3>{role.company}</h3>
                      <div>{role.overview}</div>
                      <div className="md:pt-2">
                        <Button
                          onClick={() => router.push(`/key-roles/${id}`)}
                          variant="default"
                          className="w-fit hidden md:block"
                        >
                          View Role
                        </Button>
                      </div>
                    </div>
                    {/* logo */}
                    <div className="flex justify-center md:w-1/3 items-center">
                      <div className="relative w-[150px] h-[150px]">
                        <Image
                          src={onetribeLogo}
                          alt={role.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => router.push(`/key-roles/${id}`)}
                    variant="default"
                    className="w-full md:hidden block"
                  >
                    View Role
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  })
}

export default KeyRolesList
