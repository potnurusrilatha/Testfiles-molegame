import { render, screen } from '@testing-library/react'
import Header from '@/component/Header'

describe("Header Component Tests - Main Page Title (h1) Rendering and Styling", () => {

    it("renders the main page title", () => {
        render(<Header />)

        const pageTitle = screen.getByText(/Whack a Mole/i)
        expect(pageTitle).toBeInTheDocument()
    })

    it("renders the page title as an h1 element", () => {
        render(<Header />)

        const pageTitle = screen.getByRole('heading', {
            level: 1,
            name: /Whack a Mole/i
        })
        expect(pageTitle.textContent).toMatch(/whack a mole/i);
        expect(pageTitle).toBeInTheDocument()
    })

    it("checks the page title has the correct CSS classes", () => {
        render(<Header />)

        const pageTitle = screen.getByRole('heading', {
            level: 1,
            name: /Whack a Mole/i
        })

        expect(pageTitle).toHaveClass('text-center')
        expect(pageTitle).toHaveClass('font-bold')
    })
})