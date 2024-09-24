'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectIcon,
} from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'

interface ColorSchemeSelectorProps {
  initialScheme: string
  scheme: {
    bg: string
    text: string
  }
}

export default function ColorSchemeSelector({ initialScheme, scheme }: ColorSchemeSelectorProps) {
  const [colorScheme, setColorScheme] = useState(initialScheme)
  const router = useRouter()

  useEffect(() => {
    document.cookie = `colorScheme=${colorScheme}; path=/; max-age=31536000`
    router.push(`?colorScheme=${colorScheme}`, { scroll: false })

    document.body.className = document.body.className.replace(
      /(bg-\w+-\d+|text-\w+-\d+)/g,
      (match) => {
        if (match.startsWith('bg-')) {
          return `bg-${colorScheme === 'dark' ? 'gray-900' : colorScheme === 'sepia' ? 'amber-100' : 'gray-200'}`
        } else if (match.startsWith('text-')) {
          return `text-${colorScheme === 'dark' ? 'gray-300' : colorScheme === 'sepia' ? 'amber-900' : 'gray-800'}`
        }
        return match
      },
    )
  }, [colorScheme, router])

  const handleColorSchemeChange = (value: string) => {
    setColorScheme(value)
  }

  const colorSchemeItems = ['dark', 'sepia', 'gray']

  return (
    <Select onValueChange={handleColorSchemeChange} defaultValue={colorScheme}>
      <SelectTrigger
        className={`h-[35px] inline-flex text-sm leading-none rounded-md ${scheme.bg} ${scheme.text} transition-colors duration-300 hover:bg-opacity-80 px-4 py-0.5 flex items-center capitalize`}
      >
        {colorScheme}
        <SelectValue placeholder="Select a color scheme" />
        <SelectIcon className="SelectIcon">
          <ChevronDownIcon />
        </SelectIcon>
        <SelectContent className="bg-white dark:bg-gray-800  rounded-md shadow-lg overflow-hidden px-2 py-1">
          {colorSchemeItems.map((item) => (
            <SelectItem
              key={item}
              value={item}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </Select>
  )
}
