// obiekt screen służy do przechowywania referencji do elementów DOM
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Button } from '../../src/components/Button/Button';

test('Properly renders passed text', () => {
  // render zawiera container, który zawiera wszystkie elementy wyrenderowane w teście
  const { container } = render(<Button>Click me</Button>);
  // sprawdzamy czy przycisk zawiera tekst 'Click me'
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
  // snapshot jest to zrzut zawartości containera, który jest porównywany z poprzednim zrzutem
  // Jeśli coś zmienimy w komponencie to snapshot się nie zgadza i test się nie powiedzie
  expect(container).toMatchSnapshot();
});

test('Calls onClick callback', () => {
  // tworzymy funkcję, która będzie nasłuchiwać na kliknięcie
  const onClick = jest.fn(() => console.log('Button clicked'));
  render(<Button onClick={onClick}>Click me</Button>);
  // klikamy na przycisk
  fireEvent.click(screen.getByRole('button'));
  // sprawdzamy czy funkcja onClick została wywołana
  expect(onClick).toHaveBeenCalled();
});
