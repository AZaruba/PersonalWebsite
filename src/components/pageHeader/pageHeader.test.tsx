
import { render, act } from '@testing-library/react';
import { PageHeader } from './pageHeader';

describe('Button', () => {
  it('renders', () => {
    render(<PageHeader width={0} height={0}/>);

    expect(true);
  });
})