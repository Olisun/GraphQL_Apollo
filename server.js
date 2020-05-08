const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

// Allow CORS
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.use(express.static('public'));

// Redirecting routes outside of /graphql to the index.html in the public folder.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'public', 'index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));