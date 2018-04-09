let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let app = express();


MongoClient.connect('mongodb://user1:password@ds131687.mlab.com:31687/students', (err,client) =>{
if(err) return console.log(err)
  let db= client.db('students')
  app.listen(8000, function(){
    console.log('running on a server')
  });

  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(express.static('public'))
  app.use(bodyParser.json())


  app.get('/', (req,res)=>{
    var cursor = db.collection('students').find()
    cursor.toArray(function(err, results){
      if(err) return console.log (err)
      res.render('index.ejs', {students: results})
       console.log(results)
   })
});


    app.post('/students', (req,res) =>{
      db.collection('students').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
      });
    });



      app.get('/api/students', function(req, res) {

   db.collection('students').find().toArray((err, result) => {

     if (err) return console.log(err)

     res.json(result)

    })
})
});
