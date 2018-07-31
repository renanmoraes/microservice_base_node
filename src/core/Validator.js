/* eslint-disable array-element-newline */
import 'joi-i18n';
import Joi               from 'joi';
import {defaultSettings} from '../config/joi/joi.conf';

export default class Validator {

    constructor() {
        this.setCustomRegexes();
        this.setConsts();
    }


    /**
     * Define validator locale for translate
     * @param locale
     * @param localeObject
     */
    setLocale(locale, localeObject) {

        // Add locale support
        Joi.addLocaleData(locale, localeObject);

        // Set locale
        this.locale = locale;
    }

    setConsts() {
        Joi.consts = {
            states: [
                'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
                'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'
            ]
        };
    }

    setCustomRegexes() {
        Joi.regexes = {
            objectId: /^[a-f\d]{24}$/i,
            alias   : /^[\w-]{4,50}$/,
            phone   : /^\d{10,11}$/,
            noSpace : /^[^-\s]+$/,
            cpf     : /^\d{11}$/,
            number  : /^\d+$/
        };
    }


    /**
     * Synchronize default configurations to Joi validate methods
     */
    syncSettings() {

        // Apply settings your methods
        defaultSettings.forEach(defaultSetting => {
            defaultSetting.applyTo.forEach(method => {
                Joi[method]()._settings = defaultSetting.settings;
                Joi[method]()._settings.locale = this.locale
            });
        });
    }

}