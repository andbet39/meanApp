
// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Recipe = require('./models/recipe')

var routes =  require('./routes/index.js')

    module.exports = function(app) {
      
        app.get('/', routes.index);
        app.get('/views/:name', routes.partials);



        app.route('/api/recipes')

            .get(function(req, res) {
                Recipe.find(function(err, recipes) {
                    if (err)
                        res.send(err);

                    res.json(recipes);
                });
            })

            .post(function(req, res) {
            
                var recipe = new Recipe();      // create a new instance of the Bear model
                recipe.name = req.body.name;  // set the bears name (comes from the request)
                recipe.subname = req.body.subname;

                recipe.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Recipe created!' });
                });
                
            });

        app.route('/api/recipes/:recipe_id')

            // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
            .get(function(req, res) {
                Recipe.findById(req.params.recipe_id, function(err, recipe) {
                    if (err)
                        res.send(err);
                    res.json(recipe);
                });
            })


            .put(function(req, res) {

                Recipe.findById(req.params.recipe_id, function(err, recipe) {

                    if (err)
                        res.send(err);

                    recipe.name = req.body.name;  // update the bears info
                    recipe.subname = req.body.subname;  // update the bears info

                    // save the bear
                    recipe.save(function(err) {
                        if (err)
                            res.send(err);

                        res.json({ message: 'Recipe updated!' });
                    });

                });
            })
            
            .delete(function(req, res) {
                 Recipe.remove({
                    _id: req.params.recipe_id
                }, function(err, recipe) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Successfully deleted' });
                });
            });

   
        // frontend routes =========================================================
        // route to handle all angular requests

       app.get('*', routes.index);
            

    };
