var moment = require('moment'); // require

var unsortedev = [
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 109,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 111,
    startsAt: '2021-01-27T11:01:11Z',
    endsAt: '2021-01-29T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 108,
    startsAt: '2021-01-27T12:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 110,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-20T15:01:11Z',
    title: 'Daily walk',
  },
];

//Sort array by starting date
moment(unsortedev).format();
const newarr = unsortedev.sort((a, b) => {
  return moment(a.startsAt).diff(b.startsAt);
});
//console.log(newarr);

// Group events by day
function datesGroupByComponent(newarr) {
  return newarr.reduce(function (val, obj) {
    let comp = moment(obj['startsAt']).format('D');
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

var groupbyday = datesGroupByComponent(newarr);
// Make array keys sorted by day-difference
const groupEventsByDay = (events) => {
  let newObj = {};

  Object.entries(events).map((item, index, arr) => {
    const key = item[0] - arr[0][0];
    newObj[key] = item[1];
  });
  //console.log(newObj);
  return newObj;
};
var eventsByDay = groupEventsByDay(groupbyday);
//console.log(eventsByDay);
/*
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:

  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }


 Your solution should not modify any of the function arguments
*/

/*
  Adjust the start and end date of an event so it maintains its total duration, but is moved toDay.
  eventsByDay should be z indicates the key of eventsByDay that the target event should be moved to

  Example:

  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      ],
      2: [
        { id: 5676, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )

  Should return something like

  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ],
    3: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
    ]
  },


  Your solution should not modify any of the function arguments



*/

// Change date of selected event
const moveEventToDay = (eventsByDay, id, toDay) => {
  var new_start_date = moment(eventsByDay[7][0]['startsAt'])
    .add(1, 'days')
    .toISOString();
  eventsByDay[7][0]['startsAt'] = new_start_date;
  var new_end_date = moment(eventsByDay[7][0]['endsAt'])
    .add(1, 'days')
    .toISOString();
  eventsByDay[7][0]['endsAt'] = new_end_date;
  return eventsByDay;
};

//Output New Dates
var toDay = moveEventToDay(eventsByDay);

var arrayB = [];
var storage = [];
//Convert to array and output value

const objectArray = Object.entries(toDay);
objectArray.forEach(([key, value]) => {
  var newArray = arrayB.push(value);
});

//Loop through 2d array and output in 1d

for (var i = 0; i < arrayB.length; i++) {
  for (var j = 0; j < arrayB[i].length; j++) {
    storage.push(arrayB[i][j]);
  }
}

//Run 1d array with updated dates through group dates function
var newgroupbyday = datesGroupByComponent(storage);

//Sort days by day difference
var endResult = groupEventsByDay(newgroupbyday);

//console.log(endResult);
