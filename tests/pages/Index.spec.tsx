import { render, screen } from '@testing-library/react'
import About from '../../pages/index'

describe('<About />', () => {
  it('should render the heading', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
