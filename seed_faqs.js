const http = require('http');

const defaultFaqs = [
    {
        keyword: 'Where is Aesthetic Studio located?',
        description: 'We are located at Number 8, Heritage Vijayendra Nagar phase 2, Telephone Nagar Main Road, Perungudi, Chennai 96.',
        category: 'FAQ'
    },
    {
        keyword: 'Who is the lead doctor?',
        description: 'Dr. Bharathi Rajasridhar is our senior female plastic surgeon with years of experience in cosmetic and reconstructive surgery.',
        category: 'FAQ'
    },
    {
        keyword: 'What are your clinic timings?',
        description: 'Aesthetic Studio is open Monday to Saturday, from 10:00 AM to 7:00 PM. We recommend booking an appointment in advance.',
        category: 'FAQ'
    },
    {
        keyword: 'How do I book a consultation?',
        description: 'You can book a consultation directly through this chatbot by clicking "Book Consultation" or call us at +91-9361228737.',
        category: 'FAQ'
    }
];

function postFAQ(faq) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(faq);
        const options = {
            hostname: 'localhost',
            port: 5000,
            path: '/api/chatbot-settings/upsert',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(body);
                } else {
                    reject(new Error(`Status ${res.statusCode}: ${body}`));
                }
            });
        });

        req.on('error', (err) => reject(err));
        req.write(data);
        req.end();
    });
}

async function seed() {
    console.log('🌱 Seeding FAQ data via HTTP...');
    for (const faq of defaultFaqs) {
        try {
            await postFAQ(faq);
            console.log(`✅ Added FAQ: ${faq.keyword}`);
        } catch (error) {
            console.error(`❌ Failed to add FAQ: ${faq.keyword}`, error.message);
        }
    }
    console.log('✨ Seeding complete!');
}

seed();
