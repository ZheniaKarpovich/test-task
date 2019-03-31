import { createSelector } from 'reselect';

const getJogs = createSelector(
  state => state.fromDate,
  state => state.toDate,
  state => state.list,
  (fromDate, toDate, list) => {
    if (!fromDate && !toDate) {
      return list;
    }

    const result = list.filter(({ date }) => {
      const elemDate = new Date(date);

      if (fromDate <= elemDate && toDate >= elemDate) {
        return true;
      }
      return false;
    });

    return result;
  },
);

export default getJogs;
