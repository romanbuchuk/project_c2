import React from 'react';

import App from './App';

describe('<App />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<App />);
        cy.getByTestId('app').should('exist').and('be.visible');
    });
});
