import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

const app = express();

const port = process.env.PORT || 4000;

function getDataRenderPage(req, res, id = undefined) {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store, id) : null;
    });
    Promise.all(promises).then(() => {
        console.log('state on server changed', store.getState());
        res.send(renderer(req, store));
    });
}

// dsfsfd

app.use(express.static('build'));

app.get('/', (req, res) => {
    console.log('req', req.params);
    getDataRenderPage(req, res);
});

app.get('/movies/:id', (req, res) => {
    console.log('req', req.params);
    getDataRenderPage(req, res, req.params.id);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
