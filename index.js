const LAUNCHES_API_URL = 'https://api.spacexdata.com/v4/launches';
const ROCKETS_API_URL = 'https://api.spacexdata.com/v4/rockets';
const PAYLOADS_API_URL = 'https://api.spacexdata.com/v4/payloads';

// Fetch launches data
const fetchLaunches = () => {
  return fetch(LAUNCHES_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching launches data:', error);
    });
};

// Fetch rockets data
const fetchRockets = () => {
  return fetch(ROCKETS_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching rockets data:', error);
    });
};

// Fetch payloads data
const fetchPayloads = () => {
  return fetch(PAYLOADS_API_URL)
    .then(response => response.json())
    .catch(error => {
      console.log('Error fetching payloads data:', error);
    });
};

// Count successful and unsuccessful launches
const countLaunches = (launches) => {
  let successfulLaunches = 0;
