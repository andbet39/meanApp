exports.index = function(req, res){
  console.log('index render' );
  res.render('../public/index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  console.log("partials render "+ name);

  res.render('../public/views/' + name);
};