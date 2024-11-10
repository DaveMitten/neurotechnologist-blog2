import { render, cleanup } from '@testing-library/react'
import { describe, it, beforeEach } from 'vitest'
import { Card } from '@/components/ui/card'

describe('Card', () => {
  beforeEach(() => cleanup())
  it('should render', () => {
    render(<Card />)
  })
})
