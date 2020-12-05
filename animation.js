 // FIRST CONTENT

 new Waypoint({

    element: document.querySelector('.firstcontent-1'),
    handler: function (direction) {
        document.querySelector('.firstcontent-1').classList.add('animate__animated', 'animate__fadeInLeft');
    },
    offset: 500

})

new Waypoint({
element: document.querySelector('.firstcontent-2'),
    handler: function (direction) {
        document.querySelector('.firstcontent-2').classList.add('animate__animated', 'animate__fadeInUp');
    },
    offset: 500
    
})

// SECOND CONTENT

new Waypoint({
element: document.querySelector('.secondcontent-1'),
    handler: function (direction) {
        document.querySelector('.secondcontent-1').classList.add('animate__animated', 'animate__fadeInUp');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.secondcontent-card1'),
    handler: function (direction) {
        document.querySelector('.secondcontent-card1').classList.add('animate__animated', 'animate__flip');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.secondcontent-card2'),
    handler: function (direction) {
        document.querySelector('.secondcontent-card2').classList.add('animate__animated', 'animate__flip');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.secondcontent-card3'),
    handler: function (direction) {
        document.querySelector('.secondcontent-card3').classList.add('animate__animated', 'animate__flip');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.secondcontent-card4'),
    handler: function (direction) {
        document.querySelector('.secondcontent-card4').classList.add('animate__animated', 'animate__flip');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.secondcontent-card5'),
    handler: function (direction) {
        document.querySelector('.secondcontent-card5').classList.add('animate__animated', 'animate__flip');
    },
    offset: 400
    
})

// THIRD CONTENT

new Waypoint({
element: document.querySelector('.thirdcontent-1'),
    handler: function (direction) {
        document.querySelector('.thirdcontent-1').classList.add('animate__animated', 'animate__zoomIn');
    },
    offset: 400
    
})

new Waypoint({
element: document.querySelector('.thirdcontent-2'),
    handler: function (direction) {
        document.querySelector('.thirdcontent-2').classList.add('animate__animated', 'animate__fadeInRight');
    },
    offset: 400
    
})

// FOURTH CONTENT
new Waypoint({
element: document.querySelector('.fourthcontent-1'),
    handler: function (direction) {
        document.querySelector('.fourthcontent-1').classList.add('animate__animated', 'animate__zoomIn');
    },
    offset: 300
    
})

// FIFTH CONTENT

new Waypoint({
element: document.querySelector('.fifthcontent-1'),
    handler: function (direction) {
        document.querySelector('.fifthcontent-1').classList.add('animate__animated', 'animate__fadeInDown');
    },
    offset: 300
    
})

