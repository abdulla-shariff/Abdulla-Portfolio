const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const abdullaApp = express(); // Different name than Akash's
abdullaApp.use(express.json());
abdullaApp.use(cors());

// THIS IS THE KEY: It looks inside the 'public' folder for the site
abdullaApp.use(express.static(path.join(__dirname, 'public'))); 

// ABDULLA'S VAULT (Needs his own link!)
const vaultURI = 'mongodb+srv://25bcac02_db_user:Abdulla123@abdulla-cluster.43xqphl.mongodb.net/?appName=Abdulla-Cluster';

mongoose.connect(vaultURI)
    .then(() => console.log("Vault Status: Secure Connection Established."))
    .catch(err => console.error("Vault Error:", err));

const entrySchema = new mongoose.Schema({
    content: String,
    receivedAt: { type: Date, default: Date.now }
});
const Entry = mongoose.model('Entry', entrySchema);

// Unique Route: /api/entry
abdullaApp.post('/api/entry', async (req, res) => {
    try {
        const newEntry = new Entry({ content: req.body.textData });
        await newEntry.save();
        res.json({ status: "Success", info: "Archived." });
    } catch (err) {
        res.status(500).json({ status: "Failed" });
    }
});

const PORT = process.env.PORT || 5000; // Different port than Akash's 3000
abdullaApp.listen(PORT, () => console.log(`Abdulla's System running on ${PORT}`));