const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: false
    },
    appointmentDate: {
        type: String,
        required: false
    },
    contactMethod: {
        type: String,
        enum: ['Call', 'WhatsApp', 'No thanks', 'None'],
        default: 'None'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Lead', LeadSchema);
