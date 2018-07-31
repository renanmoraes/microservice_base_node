/* eslint-disable no-console */
const preSaveExample = next => {
    // Antes de salvar manda um log da acao por exemplo
    console.log('Salvando artista...');

    return next();
};

const postSaveSample = artist => {
    // Apos atualizar manda um log da acao por exemplo
    console.log('Artista ' + artist.name + ' salvo com sucesso!');
};

export default {
    collection: 'Artists',
    fields    : {
        name        : {
            type     : String,
            required : true,
            lowercase: true,
            index    : true
        },
        genres      : {
            type     : [String],
            required : true,
            index    : true,
            minlength: 1
        },
        originYear  : {
            type   : Number,
            min    : 1500,
            default: null
        },
        originLocale: {
            type     : String,
            lowercase: true,
            default  : 'unknown'
        }
    },
    options   : { // Opcional
        timestamps: true
    },
    pre       : { // Opicional
        save: preSaveExample
    },
    post      : { // Opcional
        save: postSaveSample
    },
    indexes   : [ // Opicional
        {
            fields : {
                name : 1,
                geres: 1
            },
            options: {
                unique: 'Já existe um artista com esse nome e estes gêneros'
            }
        }
    ]
};