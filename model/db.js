const db = {
  data: {
    user: {
      "<User ID>": {
        id: "<User ID>",
        name: "<User name>",
        email: "<User email>",
        phone_number: "<+5511989999999>",
        secret: "<Triple-hashed password>", //NEVER store the plain password, FOR FORK SAKE
        privacy: {
          display_name: "<Boolean:true|false>",
          display_email: "<Boolean:true|false>",
          display_phone: "<Boolean:true|false>",
        },
        projects: {
          "<Project ID>": {
            id: "<Project ID>",
            name: "<Project name>", //Reduldant for performance
            url: "<Project url>",   //Reduldant for performance
            access_type: "<blocked|view-only|full>", //The access type of this user to this project
            /* access_type:
              - soft-edit: may do changes in its own browser and make a copy for itself
                or download its JSON, but can not save/modify it on the DB
            */
            watching: { //Kind of following
              granted_notification_type_1: "Boolean:true|false",
              granted_notification_type_2: "Boolean:true|false",
              phone_call: false,
              letter: true,
              letter_elegante: true,
              telegraph: true,
              /*...*/
            }
          },
        },
      },
    },

    projects: {
      "<Project ID>": {
	owner: "<User ID of the owner>",
        users: {
          //TODO TO DO: keep it from here
        },
      }
    }
  },

  method: {}
}


const user_data = db.data.user = db.data.user || {};
user_data["user_1_id"] = {
  id: "user_1_id",
  name: "Frajolinha Furio Franco",
}

user_data['user_2_id'] = {
  id: "user_2_id",
  name: "Atheninha Furio Franco",
}












/*
//Will keep for a while, afraid it might break some things on just deleting, and I dont have saco to check it right now
db.data.products = {
  "12": {
    "id": 12,
    "name": "Pato de Borracha",
    "price": 5.99,
    "available": true
  },
  "13": {
    "id": 13,
    "name": "Creme dental Colgate Luminous ",
    "price": 7.5,
    "available": true
  },
  "14": {
    "id": 14,
    "name": "Escova de dentes generica",
    "price": 2.99,
    "available": true
  },
  "15": {
    "id": 15,
    "name": "Escova de dentes eletrica",
    "price": 52.6,
    "available": true
  },
  "16": {
    "id": 16,
    "name": "Escova para costas",
    "price": 12.4,
    "available": false
  },
  "19": {
    "id": 19,
    "name": "Pinho Sol",
    "price": 3.75,
    "available": true
  },
  "20": {
    "id": 20,
    "name": "Desengordurante Veja",
    "price": 3.5,
    "available": true
  },
  "21": {
    "id": 21,
    "name": "Desengordurante Zupp Citrus",
    "price": 3.25,
    "available": false
  },
  "23": {
    "id": 23,
    "name": "Pia Bicicleta",
    "price": 175.95,
    "available": true
  },
  "25": {
    "id": 25,
    "name": "Chuveiro Gourmet",
    "price": 258,
    "available": true
  },
  "26": {
    "id": 26,
    "name": "Mini Golfe",
    "price": 97.45,
    "available": true
  },
  "27": {
    "id": 27,
    "name": "Privada Ecologica",
    "price": 243.4,
    "available": true
  },
  "28": {
    "id": 28,
    "name": "Pato bem caro",
    "price": 99999.99,
    "available": true
  }
}

*/



//INTERNAL METHODS
function resolve(params, status, message, result, extra) {
  //Extra expects an "dictionary" object
  if(typeof extra != "object" || (extra && typeof extra.length === "number")) extra = {};
    
  return Object.assign({
    params:  params,
    message: message,
    status:  status,
    result:  result
  }, extra)
}

//METHODS

db.method.product = {
  get_by_id: function(id) {
    var prod = db.data.products[id];
      
    if(prod !== undefined) return resolve(arguments, "success", "success", prod);
    else return resolve(arguments, "fail", "product not found", {});
  },

  search_by_name: function(search_string) {
    search_string = (search_string + "").toLowerCase();
    var results = Object.values(db.data.products).filter( (prod) => {
          return prod.name.toLowerCase().indexOf(search_string) >= 0
        });

    return resolve(arguments, "success", "success", results)

  },

}




module.exports = db;
