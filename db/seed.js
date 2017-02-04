let sampleData = require('./sampleLocationData.json');
let Au = require('./schema/ActiveUsers.js');
let i = require('./schema/Interests.js');
let Ui = require('./schema/UserInterests.js');
let U = require('./schema/User.js');

U.destroy({truncate: true})
    .then(res => {
      Au.destroy({truncate : true})
        .then(res => {
            for (var i = 0; i < 100; i++) {
            let room = Math.floor(Math.random() * 20) + 1
            U.create({
                email: i+ "@gmail.com",
                firstname: "kan" + i,
                lastname: "adachi" + i,
                password: i
            })
            .then(res => {
                Au.create({
                    userId : res.id,
                    latitude : sampleData[i].latitude,
                    longitude : sampleData[i].longitude,
                    roomId : room
                })
            })
            };
        })
    })




let iI = [ 
  'Java', 'C', 'Node', 'Ruby', 'Javascript', 'Angular', 'React', 'Backbone', 
  'C++', "React-Native", 'Ionic', "Swift", "Express"
];

iI.forEach(int => {
  i.create({
    interest : int
  })
})


// // let id = [1,8,15,22,29,36,43,50,57,64,71,78,85,92,99,106,113,120,127,134,141,148,155,162,169,176]

// // for(let j = 0; j<100; j++){
// //  let clone = [...id];
// //  for (let i = 0; i < 6; i++) {
// //    let rand = Math.floor(Math.random()*clone.length+1);
// //    Ui.create({
// //      userId : j+100,
// //      interestId : rand
// //    });
// //    clone.splice(rand, 1);
// //  }
// // }
