import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import User from '../../User';

describe('User', () => {
    it('Should not crash', () => {
        const index = 0;

        const user = {
            data: [
                {
                    name: 'Grilled Chees',
                    course: 'Main',
                    technique: 'Fry',
                    ingredients: ['Bread', 'Cheese', 'Butter']
                }
            ]
        };

        render(<User user={user} index={index} />);
    });
});
