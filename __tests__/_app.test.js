import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import MyApp from '../pages/_app';

describe('MyApp', () => {
  it('renders the app', () => {

    const {container} = render(<MyApp Component={() => <div />} pageProps={{}} />);

    expect(container).toBeInTheDocument();
  });
});