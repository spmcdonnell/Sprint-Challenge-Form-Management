import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import testFunction from './testFunction';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should return the combined length of two strings', () => {
    const str1 = 'hello';
    const str2 = 'world';

    const combinedLength = str1.length + str2.length;

    expect(testFunction(str1, str2)).toBe(combinedLength);
});
