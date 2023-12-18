import { type Doc, type ApiSpaceX } from "../types/api";

export const getLatestLaunches = async () => {

  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        short: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  
  const { docs: launches } = (await res.json()) as ApiSpaceX;
  
  return launches;
}

export const getLaunchByID = async ({id}) => {

  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  
  const launch  = (await res.json()) as Doc;
  
  return launch;
}