const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => {
  res.send({message: 'alive'})
});

app.get('/quotes', (req, res) => {
  res.send({
    data: [
      {
      "id": "1",
      "quote": "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
      "author": "Bjarne Stroustrup"
      },
      {
      "id": "2",
      "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "author": "Martin Fowler"
      },
      {
      "id": "3",
      "quote": "First, solve the problem. Then, write the code.",
      "author": "John Johnson"
      },
      {
      "id": "4",
      "quote": "Java is to JavaScript what car is to Carpet.",
      "author": "Chris Heilmann"
      },
      {
      "id": "5",
      "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "John Woods"
      },
      {
      "id": "6",
      "quote": "I'm not a great programmer; I'm just a good programmer with great habits.",
      "author": "Kent Beck"
      },
      {
      "id": "7",
      "quote": "Truth can only be found in one place: the code.",
      "author": "Robert C. Martin"
      },
      {
      "id": "8",
      "quote": "If you have to spend effort looking at a fragment of code and figuring out what it's doing, then you should extract it into a function and name the function after the \"what\".",
      "author": "Martin Fowler"
      },
      {
      "id": "9",
      "quote": "The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.",
      "author": "Donald Knuth"
      },
      {
      "id": "10",
      "quote": "SQL, Lisp, and Haskell are the only programming languages that I’ve seen where one spends more time thinking than typing.",
      "author": "Philip Greenspun"
      }
      ],
      "meta": {
      "page": 1
      }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
