import express from 'express';
import Data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
	res.send({ contests : Data.contests });
});

export default router;