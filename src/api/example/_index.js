// Joi Validate
import createValidade from './_validates/create.validate';
import updateValidade from './_validates/update.validate';

// Example Middleware
import create   from './create';
import read     from './read';
import readOne  from './readOne';
import update   from './update';

export default (route) => {

    // Route to create new artist
    route.post('/example', [
        createValidade,
        create
    ]);

    // Route to update existent artist
    route.put('/example/:_id', [
        updateValidade,
        update
    ]);

    // Route to read all artist
    route.get('/example', read);

    // Route to read specific artist
    route.get('/example/:_id', readOne);
};