import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import UserList from '../../UserList';

describe('UserList', () => {
    it('Should not crash', () => {
        const users = [
            {
                data: [
                    {
                        name: 'Brisket',
                        course: 'Main',
                        technique: 'Sous-Vide',
                        ingredients: ['Smoked Salt', 'Prague Powder No. 1', 'Liquid Aminos', 'Chipotle Powder', 'Molassas']
                    }
                ]
            },
            {
                data: [
                    {
                        name: 'Brisket',
                        course: 'Main',
                        technique: 'Sous-Vide',
                        ingredients: ['Smoked Salt', 'Prague Powder No. 1', 'Liquid Aminos', 'Chipotle Powder', 'Molassas']
                    }
                ]
            },
            {
                data: [
                    {
                        name: 'Brisket',
                        course: 'Main',
                        technique: 'Sous-Vide',
                        ingredients: ['Smoked Salt', 'Prague Powder No. 1', 'Liquid Aminos', 'Chipotle Powder', 'Molassas']
                    }
                ]
            }
        ];

        const comp = render(<UserList users={users} />);

        const recipes = comp.getAllByTestId('recipe');

        expect(recipes).toHaveLength(users.length);
    });
});
