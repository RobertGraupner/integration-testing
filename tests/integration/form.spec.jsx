import { render, fireEvent,screen } from '@testing-library/react';
import { Form } from '../../src/components/Form/Form';
 
test('Passes input value to a callback passed via onFormSubmit', () => {
  const text="test";
  const onFormSubmitCallback = jest.fn((inputValue) => console.log(inputValue));

  render(<Form onFormSubmit={onFormSubmitCallback} />);
  fireEvent.change(screen.getByTestId('input-form'), { target: { value: text } });

  fireEvent.submit(screen.getByRole('button'));

  expect(onFormSubmitCallback).toHaveBeenCalledWith(text);
});