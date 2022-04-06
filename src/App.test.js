import { render, screen } from '@testing-library/react';
import App from './App';
// commeted out to completed other parts of the test
//import renderer from 'react-test-renderer'

//test('renders a snapshot', () => {
//const tree = renderer.create(<App/>).toJSON()
//  expect(tree).toMatchSnapshot()
//})

// Profile picture test//


test('renders text Bertha Zhao', () => {
  render(<App />)
  const nameElement = screen.getByText(/Bertha Zhao/i)
  expect(nameElement).toBeInTheDocument()
});