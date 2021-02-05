var moment = require('moment'); // require

function sort_event_array_by_date(eventsArray) {
  return eventsArray.sort(function (a, b) {
    const c = new Date(a.startsAt);
    const d = new Date(b.startsAt);
    return c - d;
  });
}

function dates_GroupBy_Component(array) {
  return array.reduce(function (val, obj) {
    let comp = moment(obj['startsAt']).format('D');
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

const groupEventsByDay = (events) => {
  let newObj = {};

  Object.entries(events).map((item, index, arr) => {
    const key = item[0] - arr[0][0];
    newObj[key] = item[1];
  });
  //console.log(newObj);
  return newObj;
};

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

module.exports = {
  sort_event_array_by_date: sort_event_array_by_date,
  dates_GroupBy_Component: dates_GroupBy_Component,
  groupEventsByDay: groupEventsByDay,
  moveEventToDay: moveEventToDay,
};
