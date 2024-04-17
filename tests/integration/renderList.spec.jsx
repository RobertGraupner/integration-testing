import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { RenderList } from '../../src/components/RenderList/RenderList';

test('Properly renders loaded data', async () => {
  // mockujemy fetcha, aby zwrócił dane. W tym przypadku tablicę z dwoma obiektami
  window.fetch = jest.fn(() => {
    return {
      then: () => {
        return {
          then: (callback) => {
            return callback([
              { name: 'First item' },
              { name: 'Second item' },
            ])
          }
        }
      }
    }
  })
  render(<RenderList />);
  // sprawdzamy czy elementy zostały poprawnie wyrenderowane
  //  jest await, ponieważ funkcja findByText jest asynchroniczna
  expect(await screen.findByText('First item')).toBeInTheDocument();
  expect(await screen.findByText('Second item')).toBeInTheDocument();
});