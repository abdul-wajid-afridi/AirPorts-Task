import { airports } from "./Data";

// export this to use it some where else
export const travelFinder = (start, end) => {
  let bestRoute;
  // first of all looking for the best case scenario
  const travel = airports.find(
    (airport) => airport.start === start && airport.end === end
  );

  if (!!travel) return travel.cost;

  // store all the travels that departs from end
  const startArray = airports.filter((airport) => airport.start === start);
  // find the alternate routes
  const routes = startArray.map((airport) =>
    airports.filter((route) => route.start === airport.end && route.end === end)
  );

  // find the best route in the alternate routes
  bestRoute = routes.sort((a, b) =>
    a.cost > b.cost ? 1 : b.cost > a.cost ? -1 : 0
  )[0];
  // get the previous route
  const previousRoute = airports.find(
    (route) => route.start === start && route.end === bestRoute[0].start
  );

  // return the cost of the best route
  return previousRoute?.cost + bestRoute[0].cost;
};
