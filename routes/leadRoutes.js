const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
// const authMiddleware = require('../middleware/authMiddleware'); // Optional, if we want to protect lead viewing

// --- Lead Creation (Public for Chatbot) ---
router.post('/create', leadController.createLead);

// --- Lead Reading and Deletion (Protected or for Admin) ---
router.get('/', leadController.getAllLeads);
router.delete('/:id', leadController.deleteLead);

module.exports = router;
