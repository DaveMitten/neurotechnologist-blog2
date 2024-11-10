import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'

import { CurrentTechStack } from '../app/(app)/page'
import ReactSVG from '../components/logos/ReactSVG'
import TestingSVG from '../components/logos/ReactSVG'
import SVGContainer from '../components/elements/SVGContainer'
import ExperienceList from '../components/lists/ExperienceList'

// Add mock logos array
const mockLogos = {
  testing: { svg: <SVGContainer svg={TestingSVG} />, link: 'https://testing.dev/' },
  react: { svg: <SVGContainer svg={ReactSVG} />, link: 'https://react.dev/' },
}
// Mock the initial data
const mockData = Array(6).fill({
  title: 'Test Job',
  company: 'Test Company',
  startDate: '2023',
  endDate: '2024',
  duration: '1 year',
  location: 'Test Location',
  skills: ['Skill 1', 'Skill 2'],
})
describe('Home Page', () => {
  beforeEach(() => cleanup())

  it('should render with mock logos', () => {
    render(<CurrentTechStack logos={mockLogos} />)

    // Add assertions to verify the component rendered correctly
    expect(screen.getByText('Current Tech Stack')).toBeDefined()
    const testingLink = screen.getByRole('link', { name: /testing/i })
    const reactLink = screen.getByRole('link', { name: /react/i })

    expect(testingLink.getAttribute('href')).toBe('https://testing.dev/')
    expect(reactLink.getAttribute('href')).toBe('https://react.dev/')
  })

  it('shoulder render the experience list', () => {
    render(<ExperienceList initialData={mockData} />)

    expect(screen.getByText('Most Recent Roles')).toBeDefined()
    expect(screen.getByText('+')).toBeDefined()
    expect(screen.getByText('-')).toBeDefined()
  })
})

describe('ExperienceList', () => {
  beforeEach(() => cleanup())

  it('should render the experience list', () => {
    render(<ExperienceList initialData={mockData} />)
    expect(screen.getByText('Most Recent Roles')).toBeDefined()
    expect(screen.getByText('+')).toBeDefined()
    expect(screen.getByText('-')).toBeDefined()
  })

  it('should load more experiences when the button is clicked', () => {
    render(<ExperienceList initialData={mockData} />)

    // Get initial number of experience items
    const initialCards = screen.getAllByTestId('work-experience-card').length

    // Use fireEvent instead of direct click
    const loadMoreButton = screen.getByText('+')
    fireEvent.click(loadMoreButton)

    // Check that we now have more experiences shown
    const updatedCards = screen.getAllByTestId('work-experience-card').length
    expect(updatedCards).toBeGreaterThan(initialCards)
  })
})
