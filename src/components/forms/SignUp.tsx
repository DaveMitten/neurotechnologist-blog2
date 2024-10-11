'use client'

import React, { useState } from 'react'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const SignUp = ({ children }: { children: React.ReactNode }) => {
  const [submitted, setSubmitted] = useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <form action="">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Sign Up</Button>
      {submitted ? children : null}
    </form>
  )
}

export default SignUp
