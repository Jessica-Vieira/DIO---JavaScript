function getAdmins(map){
    let admins = [];
    for([key , value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Ana','Admin');
usuarios.set('Maria','Admin');
usuarios.set('João','User');
usuarios.set('Luis','Admin');

console.log(getAdmins(usuarios));