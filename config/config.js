require('dotenv').config();
const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:66rsft57PJzcqzUd@clusterapi.bli3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senhafacil123',
                jwt_expires_in: '1d'
        }

        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:66rsft57PJzcqzUd@clusterapi.bli3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: '+!)0c#XbLx^tHE',
                jwt_expires_in: '7d'
        }

        case 'prod':
            return {
                bd_string: 'mongodb+srv://usuario_admin:66rsft57PJzcqzUd@clusterapi.bli3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'qjaRYHkH?FhBa1]iw4txX7UZeeQE.L:^9iK:^9b+Nt!N',
                jwt_expires_in: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();