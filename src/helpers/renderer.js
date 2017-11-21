import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

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
            <head>
                <title>SandboxProject</title>
                <link type="text/css" href="/styles.css" rel="stylesheet" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script type="text/javascript" src="/vendor.js"></script>
                <script type="text/javascript" src="/app.js"></script>
            </body>
        </html>
    `;
};
