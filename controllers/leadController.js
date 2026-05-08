const Lead = require('../models/Lead');

// --- Create a New Lead ---
exports.createLead = async (req, res) => {
    try {
        console.log('📬 Incoming Lead Data:', req.body);
        const { name, phoneNumber, treatment, appointmentDate, contactMethod } = req.body;

        if (!name || !phoneNumber) {
            console.warn('⚠️ Missing name or phone in lead request');
            return res.status(400).json({ error: 'Name and phone number are required.' });
        }

        // Clean values to avoid overwriting with empty data
        const updateData = {};
        if (name) updateData.name = name;
        if (treatment && treatment.trim() !== '') updateData.treatment = treatment;
        if (appointmentDate && appointmentDate.trim() !== '') updateData.appointmentDate = appointmentDate;
        if (contactMethod && contactMethod.trim() !== '' && contactMethod !== 'None') updateData.contactMethod = contactMethod;

        // UPSERT Logic: Update if exists (by phone), create if new
        let lead = await Lead.findOne({ phoneNumber });

        if (lead) {
            // Update the lead with whatever new info we got
            Object.assign(lead, updateData);
            await lead.save();
            return res.status(200).json({ message: 'Lead updated successfully', lead });
        }

        // Create new lead if doesn't exist
        const newLead = new Lead({
            name,
            phoneNumber,
            treatment: treatment || 'Initial Inquiry',
            appointmentDate: appointmentDate || 'Not set',
            contactMethod: contactMethod || 'None'
        });
        await newLead.save();

        res.status(201).json({ message: 'Lead saved successfully', lead: newLead });
    } catch (error) {
        console.error('❌ Lead Creation Error:', error);
        res.status(500).json({ error: 'Failed to create lead' });
    }
};

// --- Get All Leads ---
exports.getAllLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        console.error('❌ Lead Fetching Error:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
};

// --- Delete a Lead ---
exports.deleteLead = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLead = await Lead.findByIdAndDelete(id);

        if (!deletedLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }

        res.json({ message: 'Lead deleted successfully' });
    } catch (error) {
        console.error('❌ Lead Deletion Error:', error);
        res.status(500).json({ error: 'Failed to delete lead' });
    }
};
