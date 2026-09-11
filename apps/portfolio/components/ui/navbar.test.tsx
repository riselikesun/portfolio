import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from './navbar'

describe('Navbar components', () => {
  it('renders correctly', () => {
    render(
      <Navbar>
        <NavbarBrand>Brand Logo</NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
        </NavbarContent>
      </Navbar>
    )

    expect(screen.getByText('Brand Logo')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('applies sticky variant to Navbar', () => {
    const { container } = render(<Navbar variant="sticky">Nav</Navbar>)
    const nav = container.firstChild as HTMLElement
    expect(nav.className).toContain('sticky')
  })

  it('applies floating variant to Navbar', () => {
    const { container } = render(<Navbar variant="floating">Nav</Navbar>)
    const nav = container.firstChild as HTMLElement
    expect(nav.className).toContain('fixed')
    expect(nav.className).toContain('rounded-full')
  })

  it('applies justify classes to NavbarContent', () => {
    const { container: container1 } = render(<NavbarContent justify="start">Start</NavbarContent>)
    expect((container1.firstChild as HTMLElement).className).toContain('mr-auto')

    const { container: container2 } = render(<NavbarContent justify="end">End</NavbarContent>)
    expect((container2.firstChild as HTMLElement).className).toContain('ml-auto')
  })
})
