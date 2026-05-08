const ChatbotResponse = require('../models/ChatbotResponse');

// --- Get All Bot Responses ---
exports.getAllResponses = async (req, res) => {
    try {
        const responses = await ChatbotResponse.find();
        res.json(responses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bot responses' });
    }
};

// --- Update/Create Bot Response ---
exports.upsertResponse = async (req, res) => {
    try {
        const { id, keyword, description, pageLink, category } = req.body;
        let response;

        if (id) {
            // Update by ID if provided
            response = await ChatbotResponse.findByIdAndUpdate(
                id,
                { keyword, description, pageLink, category, updatedAt: Date.now() },
                { new: true }
            );
        } else {
            // Otherwise upsert by keyword
            response = await ChatbotResponse.findOneAndUpdate(
                { keyword },
                { description, pageLink, category, updatedAt: Date.now() },
                { upsert: true, new: true }
            );
        }
        res.json(response);
    } catch (error) {
        console.error("Upsert Error:", error);
        res.status(500).json({ error: 'Failed to save bot response' });
    }
};

// --- Delete Bot Response ---
exports.deleteResponse = async (req, res) => {
    try {
        await ChatbotResponse.findByIdAndDelete(req.params.id);
        res.json({ message: 'Response deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete response' });
    }
};
