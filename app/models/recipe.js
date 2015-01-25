var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecipeSchema   = new Schema({
    name: String,
    subname:String,
    text :String
});

module.exports = mongoose.model('Recipe', RecipeSchema);