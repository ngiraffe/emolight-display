var NORMAL_EYE = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var NORMAL_MOUTH = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

/************************************* SMILE *************************************/

var SMILE_EYE0 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,8,8,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SMILE_EYE1 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,8,8,8,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SMILE_EYE2 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,8,8,8,8,8,1,1,0,
    1,1,1,8,1,1,1,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SMILE_EYE3 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,8,1,1,1,0,0,
    0,1,1,8,8,1,8,8,1,1,0,
    1,1,8,1,1,1,1,1,8,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];


var SMILE_EYE4 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,8,8,8,1,1,0,0,
    0,1,1,8,1,1,8,8,1,1,0,
    1,1,8,1,1,1,1,8,8,1,0,
    1,1,1,1,1,1,1,1,8,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SMILE_MOUTH0 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SMILE_MOUTH1 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SMILE_MOUTH2 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,1,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SMILE_MOUTH3 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,1,1,1,1,1,1,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SMILE_MOUTH4 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,1,1,1,1,8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

/************************************* SURPRISE *************************************/

<<<<<<< Updated upstream
var SAD_EYE0 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,8,8,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,0,
=======
var SURPRISE_EYE0 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,8,1,1,1,1,0,
>>>>>>> Stashed changes
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

<<<<<<< Updated upstream
var SAD_EYE1 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,8,8,8,1,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
=======
var SURPRISE_EYE1 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,1,8,1,1,1,1,0,
    1,1,1,1,8,8,8,1,1,1,0,
    1,1,1,1,1,8,1,1,1,1,1,
>>>>>>> Stashed changes
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

<<<<<<< Updated upstream
var SAD_EYE2 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,8,1,1,1,1,1,1,0,0,
    0,1,1,8,8,8,8,1,8,1,0,
    1,1,1,1,1,1,1,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SAD_EYE3 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,8,1,1,1,1,1,1,0,0,
    0,1,8,8,8,8,8,8,8,1,0,
    1,1,1,1,1,1,8,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
=======
var SURPRISE_EYE2 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,1,1,1,1,1,0,0,
    0,1,1,1,8,8,8,1,1,1,0,
    1,1,1,1,8,8,8,1,1,1,0,
    1,1,1,1,8,8,8,1,1,1,1,
>>>>>>> Stashed changes
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

<<<<<<< Updated upstream
var SAD_EYE4 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,8,8,1,1,1,1,1,1,0,0,
    0,1,8,8,8,1,1,8,8,1,0,
    1,1,1,1,8,8,8,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SAD_EYE5 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,8,8,1,1,1,1,1,1,0,0,
    0,1,8,8,8,1,1,8,8,1,0,
    1,1,1,1,8,8,8,8,1,1,0,
    1,1,1,1,1,1,8,8,1,1,1,
    0,1,1,1,1,1,1,8,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SAD_EYE6 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,8,8,1,1,1,1,1,1,0,0,
    0,1,8,8,8,1,1,8,8,1,0,
    1,1,1,1,8,8,8,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,8,8,1,1,1,
    0,0,0,0,0,0,0,8,1,1,1,
];

var SAD_EYE7 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,8,8,1,1,1,1,1,1,0,0,
    0,1,8,8,8,1,1,8,8,1,0,
    1,1,1,1,8,8,8,8,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,8,1,1,1,
];

var SAD_MOUTH0 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
=======
var SURPRISE_EYE3 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,1,8,8,8,1,1,0,0,
    0,1,1,8,8,8,8,8,1,1,0,
    1,1,1,8,8,8,8,8,1,1,0,
    1,1,1,8,8,8,8,8,1,1,1,
    0,1,1,1,8,8,8,1,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SURPRISE_EYE4 = 
[
    0,0,0,1,1,1,1,0,0,0,0,
    0,1,1,8,8,8,8,8,1,0,0,
    0,1,1,8,8,8,8,8,1,1,0,
    1,1,1,8,8,8,8,8,1,1,0,
    1,1,1,8,8,8,8,8,1,1,1,
    0,1,1,8,8,8,8,8,1,1,1,
    0,0,0,0,0,0,0,1,1,1,1,
];

var SURPRISE_MOUTH0 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SURPRISE_MOUTH1 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
>>>>>>> Stashed changes
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

<<<<<<< Updated upstream
var SAD_MOUTH1 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
=======
var SURPRISE_MOUTH2 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
>>>>>>> Stashed changes
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

<<<<<<< Updated upstream
var SAD_MOUTH2 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SAD_MOUTH3 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,8,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];
=======
var SURPRISE_MOUTH3 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];

var SURPRISE_MOUTH4 = 
[
    0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
    0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,
];


>>>>>>> Stashed changes
