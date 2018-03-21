var faker = require("faker");

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });


app.get('/user', function(req,res){
    var data = ({
        firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
      
    });
    res.status(200).send(data);
});

app.get("/users/:num", function (req, res) {
    var users = [];
    var num = req.params.num;
 
    if (isFinite(num) && num  > 0 ) {
      for (i = 0; i <= num-1; i++) {
        users.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
         });
      }
 
      res.status(200).send(users);
     
    } else {
      res.status(400).send({ message: 'invalid number supplied' });
    }
 
  });



  app.get('/byId/:id', function(req,res){

    var Id = req.params.id;
    var obj = [{
                name:"shiva",
                id:0
            },
            {
                name:"shiva",
                id:1
            },{
                name:"shiva",
                id:2
            }
];
    if(Id >= obj.length)
        res.status(200).send('no details exist');
    else
        res.status(200).send(obj[Id]);        

    

  });



}

  module.exports = appRouter;