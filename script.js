const vueApp = new Vue({
    el: '#app',  //meng get data mendefinisikan sebuah element
    data: function(){
        return {
            appName : "User Management",
            author  : "Rifus cord",
            users : [{
                    "id": 1,
                    "name": "Benn Iddison",
                    "email": "biddison0@un.org",
                    "gender": "Male"
                  }, {
                    "id": 2,
                    "name": "Deane MacGahy",
                    "email": "dmacgahy1@oracle.com",
                    "gender": "Female"
                  }, {
                    "id": 3,
                    "name": "Elfreda Philippson",
                    "email": "ephilippson2@moonfruit.com",
                    "gender": "Female"
                  }, {
                    "id": 4,
                    "name": "Dominique Cracie",
                    "email": "dcracie3@cnbc.com",
                    "gender": "Female"
                  }, {
                    "id": 5,
                    "name": "Yolanthe Yancey",
                    "email": "yyancey4@newsvine.com",
                    "gender": "Female"
                  }, {
                    "id": 6,
                    "name": "Meaghan Glew",
                    "email": "mglew5@dmoz.org",
                    "gender": "Female"
                  }, {
                    "id": 7,
                    "name": "Cami Shingler",
                    "email": "cshingler6@e-recht24.de",
                    "gender": "Female"
                  }, {
                    "id": 8,
                    "name": "Libbi Nisuis",
                    "email": "lnisuis7@goo.ne.jp",
                    "gender": "Female"
                  }],
            userUpdate: {},
            gender: [
              'Male', 'Female'
            ]
        }
    },
    computed: { // berisi fungsi mereturn data secara langsung
        appTitle: function(){ //function 
            return this.appName + ' by ' + this.author
        }
    },
    methods: { // button click
        edit: function(aa){ //get data edit(parameter bebas)
            this.userUpdate = aa
        },
        remove: function(indexUser){
            if(true){
              this.users.splice(indexUser, 1)
            }
        }
    }


})