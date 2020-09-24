const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json(), cors()); 


// MySQL
const connection = mysql.createConnection({
    host: 'location1.ct87odxbf2xp.us-east-1.rds.amazonaws.com',
    user:'root',
    password:'secretroot',
    database:'db1'
});

// Route
app.get('/', (req, res)=>{
    res.send('Welcome to my API!')
});

// all locations
app.get('/api/locations',(req,res) =>{
    const sql = 'SELECT * FROM location';

    connection.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    });
});

app.get('/api/locations/:id',(req,res) =>{
    const {id } = req.params
    const sql = `SELECT * FROM location WHERE id_location = ${id}`;

    connection.query(sql, (error, results) =>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    });

});

app.post('/api/add', (req, res) =>{
    
    const sql = 'INSERT INTO location SET ?';

    const empObj = {
        name: req.body.name,
        area_m2: req.body.area_m2
    };

    connection.query(sql, empObj, error =>{
        if(error) throw error;
        res.send('Location created! ');
    });

});

app.put('/api/update/:id', (req, res) =>{
    
    const {id } = req.params;
    const {name, area_m2} = req.body;
    const sql = `UPDATE location SET name = '${name}', area_m2 = '${area_m2}' WHERE id_location = ${id}`;
    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Location update! ');
    });

});

app.delete('/api/delete/:id', (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM location WHERE id_location = ${id}`;
    connection.query(sql, error =>{
        if(error) throw error;
        res.send('Delete location!');
    });
})


//Check connect
connection.connect(error =>{
    if(error) throw error;
    console.log('Database server running');
})

module.exports = app;