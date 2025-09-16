
import { render, act } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders', () => {
    render(<Button width={0} height={0}/>);

    expect(true);
  });
})