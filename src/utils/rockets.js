// rockets.js

export const countRocketIDs = (launches, rockets) => {
  const rocketCounts = {};

  launches.forEach(launch => {
    const rocketID = launch.rocket;

    if (rocketCounts[rocketID]) {
      rocketCounts[rocketID]++;
    } else {
      rocketCounts[rocketID] = 1;
    }
  });

  return rocketCounts;
};

export const fetchRocketNames = (rocketIDs) => {
  return Promise.all(rocketIDs.map(id =>
    fetch(`${ROCKETS_API_URL}/${id}`)
      .then(response => response.json())
      .then(data => data.name)
  ));
};
