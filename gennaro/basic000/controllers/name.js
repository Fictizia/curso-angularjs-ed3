angular.module('app', []);
angular.module('app').controller('nameController', nameCtrl);
            
function nameCtrl(){
    console.log('Soy un controlador');
    var self = this;
    self.name = '';
    self.clear = function() {
        if(confirm('Quieres limpiar los datos?')){
            self.name = '';
            }
        }
                
}