const utils = require('./util');

const eventListSampleTestData = [
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

describe('Sorting Array by StartDate', () => {
  test('it should sort in ascending order an array of dicts by startsAt', () => {
    const expectedResult = [
      {
        id: 110,
        startsAt: '2021-01-20T13:01:11Z',
        endsAt: '2021-01-20T15:01:11Z',
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
    ];

    //Slice array to create copy so when sorting the original copy doesn't change
    const tempCopy = eventListSampleTestData.slice();
    const actualResult = utils.sort_event_array_by_date(tempCopy);
    expect(expectedResult).toEqual(actualResult);
  });

  test('it should fail', () => {
    //Slice array to create copy so when sorting the original copy doesn't change
    const tempCopy = eventListSampleTestData.slice();
    const actualResult = utils.sort_event_array_by_date(tempCopy);
    expect(eventListSampleTestData.slice()).not.toEqual(actualResult);
  });
});

const sortedResult = [
  {
    id: 110,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-20T15:01:11Z',
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
];

describe('Grouping Events by day', () => {
  test('It should group events by day with the keys being the day of the month', () => {
    const group_expectedResult = {
      20: [
        {
          id: 110,
          startsAt: '2021-01-20T13:01:11Z',
          endsAt: '2021-01-20T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      27: [
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
          id: 107,
          startsAt: '2021-01-27T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      29: [
        {
          id: 109,
          startsAt: '2021-01-29T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    //Slice array to create copy so when sorting the original copy doesn't change
    const tempCopy = sortedResult.slice();
    const actualResult = utils.dates_GroupBy_Component(tempCopy);
    expect(group_expectedResult).toEqual(actualResult);
  });

  test('it should fail', () => {
    //Slice array to create copy so when sorting the original copy doesn't change
    const tempCopy = sortedResult.slice();
    const actualResult = utils.dates_GroupBy_Component(tempCopy);
    expect(sortedResult.slice()).not.toEqual(actualResult);
  });
});

const grouped_Result = {
  20: [
    {
      id: 110,
      startsAt: '2021-01-20T13:01:11Z',
      endsAt: '2021-01-20T15:01:11Z',
      title: 'Daily walk',
    },
  ],
  27: [
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
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
  29: [
    {
      id: 109,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

describe('groupEventsByDay - Day Difference', () => {
  test('The keys should be the day-difference to the earliest occuring event', () => {
    const day_difference_expectedResult = {
      0: [
        {
          id: 110,
          startsAt: '2021-01-20T13:01:11Z',
          endsAt: '2021-01-20T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      7: [
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
          id: 107,
          startsAt: '2021-01-27T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      9: [
        {
          id: 109,
          startsAt: '2021-01-29T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    const tempCopy = grouped_Result;
    const actualResult = utils.groupEventsByDay(tempCopy);
    expect(day_difference_expectedResult).toEqual(actualResult);
  });

  test('it should fail', () => {
    const tempCopy = grouped_Result;
    const actualResult = utils.groupEventsByDay(tempCopy);
    expect(grouped_Result).not.toEqual(actualResult);
  });
});

const move_day_Sample = {
  20: [
    {
      id: 110,
      startsAt: '2021-01-20T13:01:11Z',
      endsAt: '2021-01-20T15:01:11Z',
      title: 'Daily walk',
    },
  ],
  27: [
    {
      id: 108,
      startsAt: '2021-01-27T12:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
  28: [
    {
      id: 111,
      startsAt: '2021-01-28T11:01:11.000Z',
      endsAt: '2021-01-30T15:01:11.000Z',
      title: 'Daily walk',
    },
  ],
  29: [
    {
      id: 109,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

describe('Move event', () => {
  test('Changed date should seperate keys', () => {
    const move_expectedResult = {
      0: [
        {
          id: 110,
          startsAt: '2021-01-20T13:01:11Z',
          endsAt: '2021-01-20T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      7: [
        {
          id: 108,
          startsAt: '2021-01-27T12:01:11Z',
          endsAt: '2021-01-27T22:01:11Z',
          title: 'Dinner',
        },
        {
          id: 107,
          startsAt: '2021-01-27T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
      8: [
        {
          id: 111,
          startsAt: '2021-01-28T11:01:11.000Z',
          endsAt: '2021-01-30T15:01:11.000Z',
          title: 'Daily walk',
        },
      ],
      9: [
        {
          id: 109,
          startsAt: '2021-01-29T13:01:11Z',
          endsAt: '2021-01-27T15:01:11Z',
          title: 'Daily walk',
        },
      ],
    };

    const tempCopy = move_day_Sample;
    const actualResult = utils.groupEventsByDay(tempCopy);
    expect(move_expectedResult).toEqual(actualResult);
  });

  test('it should fail', () => {
    const tempCopy = move_day_Sample;
    const actualResult = utils.groupEventsByDay(tempCopy);
    expect(move_day_Sample).not.toEqual(actualResult);
  });
});
