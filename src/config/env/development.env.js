module.exports = {

        /**
         * APPLICATION CONFIGS
         * All configurations for express App instance
         */
        app: {
            name   : 'MICROSERVICES BASE NODE JS - DEV',
            version: '1.0.0',
            locale : 'pt_BR'
        },


        /**
         * EXPRESS SERVER CONFIGS
         * All configurations for expressJS HTTP Server should gop here
         */
        server: {
            secure: false,
            host  : '127.0.0.1',
            port  : 3001,
            cors  : {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            ssl   : {
                // SSL Private Key path
                privateKey: '',

                // SSL Certificate path
                certificate: '',

                // Key HPKP
                hpkpKeys: []
            }
        },


        /**
         * DATABASES CONFIG
         * All configurations to connect in databases should go here
         */
        databases: {

            // Example for mongo databases
            // Support for cluster
            mongo: {
                servers: [
                    {
                        host: 'mongodb',
                        port: 27017
                    }
                ],

                replicaSet: '',
                authSource: '',
                ssl       : false,
                user      : '',
                pass      : '',
                name      : 'local',
                dialect   : 'mongodb',
                charset   : 'utf8',
                logging   : false,
                enabled   : true,
                configWith: 'mongoose'
            },

            // Example for SQL databases
            mysql: {
                host      : '127.0.0.1',
                port      : 3306,
                user      : 'root',
                pass      : 'root',
                name      : 'microservice_name',
                dialect   : 'mysql',
                charset   : 'utf8',
                logging   : false,
                enabled   : false,
                configWith: 'sequelize'
            }
        },

        apis: {
            storage: 'http://localhost:3003'
        }
    };