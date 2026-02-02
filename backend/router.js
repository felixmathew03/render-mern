import {Router} from 'express';
import * as rh from './requestHandler.js'
const router = Router()

router.route('/')
        .get(rh.getTodos)
        .post(rh.addTodo)

export default router;