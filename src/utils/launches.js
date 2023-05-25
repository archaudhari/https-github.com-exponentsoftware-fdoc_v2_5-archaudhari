// launches.js

export const countLaunches = (launches, status) => {
  return launches.filter(launch => launch.success === status).length;
};
