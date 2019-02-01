let  {sequelize} = require('../../model');

sequelize.sync({force:false}).then(()=>{

}).catch(()=>{

});
