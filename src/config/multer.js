import multer from 'multer';
import { v4 } from 'uuid';

import { extname, resolve } from 'node:path';

export default {
    storage: multer.diskStorege({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) => 
            callback(null, v4() + extname(file.originalname)),
    }),
};