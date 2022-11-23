import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import "@testing-library/jest-dom"

describe('Home', () => {
    it('renders a heading', async () => {
        render(<Home/>)
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /Getting ready for an Interview/i
        })

        expect(heading).toBeInTheDocument()
    })
})