/* eslint-disable camelcase */
export const pt_BR = {
    any   : {
        required : '{{key}} não foi definido',
        allowOnly: 'deve ser uma das opções: {{valids}}',
        empty    : 'não pode ser vazio'
    },
    array : {
        base                    : 'deve ser array',
        includesRequiredUnknowns: 'deve conter no mínimo {{unknownMisses}} item(s)',
        min                     : 'deve conter no mínimo {{limit}} item(s)',
        max                     : 'deve conter no máximo {{limit}} item(s)'
    },
    string: {
        base  : 'deve ser string',
        uri   : 'deve ser uma URI',
        email : 'deve ser um email',
        length: 'deve conter {{limit}} caracteres',
        min   : 'deve ter no mínimo {{limit}} caractere(s)',
        max   : 'deve ter no máximo {{limit}} caractere(s)',
        regex : {
            base: 'deve combinar com {{pattern}}'
        }
    },
    number: {
        base   : 'deve ser um número',
        integer: 'deve ser um número inteiro',
        min    : 'não pode ser menor que {{limit}}',
        max    : 'não pode ser maior que {{limit}}'
    },
    object: {
        base        : 'deve ser um objeto',
        allowUnknown: '{{child}} nāo é permitido'
    }
};