import {models} from 'mongoose';

const {Artists} = models;

const getArtist = (req, res) => {

    /**
     * Find all registers of Artist collection
     */
    return Artists
        .findById(req.params._id, req.query.project)
        .populate(req.query.populate)
        .then(artist => {
            if (!artist) return res.api.send(null, res.api.codes.NOT_FOUND);

            return res.api.send(artist, res.api.codes.OK);
        })
        .catch(err => {
            return res.api.send(err, res.api.codes.INTERNAL_SERVER_ERROR);
        })
};

export default getArtist;