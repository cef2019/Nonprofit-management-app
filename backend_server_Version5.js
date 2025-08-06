const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const financeRoutes = require('./finance');
const hrRoutes = require('./hr');
const supplyChainRoutes = require('./supplyChain');
const projectRoutes = require('./project');
const authRoutes = require('./auth');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/nonprofit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/finance', financeRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/supply-chain', supplyChainRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));