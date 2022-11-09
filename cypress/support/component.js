// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import React from 'react';
// eslint-disable-next-line
import '../../src/tailwind.css';
import { mount } from 'cypress/react';
import { Provider as RuntimeProvider } from '@dhis2/app-runtime';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../../src/store/store';

Cypress.Commands.add('mount', (component, options = {}) => {
    const queryClient = new QueryClient();
    const {
        routerProps = { initialEntries: ['/'] },
        reduxStore = store,
        ...mountOptions
    } = options;

    const wrapped = (
        <div className={'p-5'}>
            <RuntimeProvider
                config={{ baseUrl: 'http://localhost:8080', apiVersion: 37 }}
            >
                <QueryClientProvider client={queryClient}>
                    <Provider store={reduxStore}>
                        <HashRouter
                            {...routerProps}
                        >
                            {component}
                        </HashRouter>
                    </Provider>
                </QueryClientProvider>
            </RuntimeProvider>
        </div>
    );

    return mount(wrapped, mountOptions);
});
