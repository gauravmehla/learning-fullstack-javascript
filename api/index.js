import express from 'express';
import Data from '../src/testData';

const router = express.Router();
const contests = Data.contests.reduce((obj, contest)=>{
		obj[contest.id] = contest;
		return obj;
	}, {});

router.get('/contests', (req, res) => {
	res.send({ 
		contests : contests
	});
});

router.get('/contests/:contestId', (req, res) => {
	let contest = contests[req.params.contestId];
	contest.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis similique dicta dolores, vitae ea quibusdam error voluptatem, amet ipsam impedit id quidem at nobis ab dolorum fugit corrupti totam a.";
	res.send(contest);
});

export default router;