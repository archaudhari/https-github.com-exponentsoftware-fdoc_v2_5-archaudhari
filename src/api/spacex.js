// spacex.js

export const fetchLaunches = () => {
  return fetch(LAUNCHES_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching launches data:', error);
    });
};

export const fetchRockets = () => {
  return fetch(ROCKETS_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching rockets data:', error);
    });
};

export const fetchPayloads = () => {
  return fetch(PAYLOADS_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching payloads data:', error);
    });
};
