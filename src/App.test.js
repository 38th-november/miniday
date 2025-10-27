import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders Add something to do button', () => {
    render(_jsx(App, {}));
    expect(screen.getByText(/Add something to do/i)).toBeInTheDocument();
});
