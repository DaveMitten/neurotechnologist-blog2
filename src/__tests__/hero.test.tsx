import { describe, it, expect, beforeEach } from 'vitest'
import Hero from '../components/sections/Hero'
import { render, screen, cleanup } from '@testing-library/react'

describe('Hero component', () => {
  beforeEach(() => {
    cleanup()
  })
  it('takes a arg of title and description and renders it correctly', () => {
    render(
      <Hero
        title="Imagine | Create | Adapt"
        description="Transforming ideas into robust, scalable solutions."
      />,
    )
    expect(screen.getByText('Imagine | Create | Adapt')).toBeDefined()
    expect(screen.getByText('Transforming ideas into robust, scalable solutions.')).toBeDefined()
  })
})
