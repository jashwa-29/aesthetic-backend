const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

router.get('/', chatbotController.getAllResponses);
router.post('/upsert', chatbotController.upsertResponse);
router.delete('/:id', chatbotController.deleteResponse);

module.exports = router;
