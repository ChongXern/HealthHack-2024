const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost',
    credentials: true,
    optionsSuccessStatus: 200,
}

module.exports = cors(corsOptions);