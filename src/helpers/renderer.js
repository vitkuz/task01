import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from '../client/Routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                { renderRoutes(Routes) }
            </StaticRouter>
        </Provider>);

    return `
        <html>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = '{}';                
                </script>
                <script src="/manifest.9fd8442e9b12224fa754.js"></script>
                <script src="/vendor.9fd8442e9b12224fa754.js"></script>
                <script src="./bundle.9fd8442e9b12224fa754.js"></script>
            </body>
        </html>
    `;
};
