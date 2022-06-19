'use strict';

import { Router} from 'express';
import { booksController } from '../controllers/bookscontroller';

const router: Router = Router(); 

router.get('/', booksController.getBook);
router.post('/', booksController.saveBook);

export default router;