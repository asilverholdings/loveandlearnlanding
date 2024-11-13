require('dotenv').config();
const MONDAY_AUTH_TOKEN = process.env.MONDAY_AUTH_TOKEN;
const MONDAY_API_VERSION = process.env.MONDAY_API_VERSION;

// GET
const getBoardIds = () => {
    const query = `
      query {
        boards (limit: 100) {
          id
          name
        }
      }
    `;
  
    return fetch("http://localhost:3000/api/proxy", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_AUTH_TOKEN,
        'API-Version': MONDAY_API_VERSION
      },
      body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.boards) {
        const boardMap = {};
        res.data.boards.forEach(board => {
          boardMap[board.name] = board.id;
        });
        console.log('Board IDs fetched successfully:', boardMap);
        return boardMap;
      } else {
        console.error('Error fetching board IDs:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error fetching board IDs:', err);
      return null;
    });
}

// GET by ID
const getBoardIdByName = (searchName) => {
    const query = `
      query {
        boards (limit: 100) {
          id
          name
        }
      }
    `;
  
    return fetch("http://localhost:3000/api/proxy", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_AUTH_TOKEN,
        'API-Version': MONDAY_API_VERSION
      },
      body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.boards) {
        const boards = res.data.boards;
        
        const exactMatch = boards.find(board => 
          board.name.toLowerCase() === searchName.toLowerCase()
        );
        
        if (exactMatch) {
         // console.log(`Name: ${exactMatch.name}, ID: ${exactMatch.id}`);
          return exactMatch.id;
        } else {
          const partialMatches = boards.filter(board => 
            board.name.toLowerCase().includes(searchName.toLowerCase())
          );
          
          if (partialMatches.length > 0) {
            // console.log(partialMatches.map(b => `${b.name} (${b.id})`));
            return partialMatches[0].id;
          } else {
            console.log(`No matches for board "${searchName}" found`);
            return null;
          }
        }
      } else {
        console.error('Error fetching boards:', res.errors);
        return null;
      }
    })
    .catch(err => {
      console.error('Error fetching boards:', err);
      return null;
    });
  }

// CREATE
const createBoard = (name) => {
    let mutation = `
    mutation createBoard($name: String!) {
        create_board (board_name: $name, board_kind: public) {
            id
        }
    }`;

    return fetch("http://localhost:3000/api/proxy", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': MONDAY_AUTH_TOKEN,
            'API-Version': MONDAY_API_VERSION
        },
        body: JSON.stringify({
            query: mutation,
            variables: { name: name }
        })
    })
    .then(res => res.json())
    .then(res => {
        if (res.data && res.data.create_board) {
            console.log('Board created with ID:', res.data.create_board.id);
            return res.data.create_board.id;
        } else {
            console.error('Error creating board:', res.errors);
            return null;
        }
    })
    .catch(err => {
        console.error('Error creating board:', err);
        return null;
    });
}

module.exports = { getBoardIds, getBoardIdByName, createBoard };