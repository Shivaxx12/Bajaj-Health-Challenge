const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;  // Use environment variable for port

// Replace with your actual user ID and details (optional)
const userId = "john_doe_17091999";
const email = "john@xyz.com";
const rollNumber = "ABCD123";

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      } else if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else {
        throw new Error('Invalid data type in input array');
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, message: error.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
