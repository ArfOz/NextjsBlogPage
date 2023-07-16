const path = require('path');
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr'],
        localePath: path.resolve('./locales'),
        localeDetection: false,
    },
};
