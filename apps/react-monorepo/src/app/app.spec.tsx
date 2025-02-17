import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(  <BrowserRouter> <App /> </BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });

  it('should have a home as the title', () => {
    const { getByText } = render(<BrowserRouter> <App /> </BrowserRouter>);
    expect(getByText(new RegExp('Home', 'gi'))).toBeTruthy();
  });
});
