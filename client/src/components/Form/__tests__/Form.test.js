import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Form from '../../Form';
import App from '../../../App';

describe('Form', () => {
    it('Should not crash', () => {
        render(<Form />);
    });

    it('Should add new recipes to the list after submission', () => {
        const { getByText, getByTestId } = render(<App />);

        let button = getByTestId(/request/i);
        fireEvent.click(button);
    });
});
