import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from '../../../store/store';

const queryClient = new QueryClient();
export const AppStart = () => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <div className={'block bg-gray-100 w-full min-h-screen md:flex md:justify-center'}>
                <HashRouter>
                    <div className={'w-full block'}>
                        <div className={'bg-gray-50 block min-h-screen p-4 md:p-7'} data-test={'app-template'}>
                            <Routes>
                                <Route path={'/'} element={<p>Velkommen til DevOtta</p>} />
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
            </div>
            {
                /* <ReactQueryDevtoolsPanel /> */
            }
        </QueryClientProvider>
    </Provider>
);
