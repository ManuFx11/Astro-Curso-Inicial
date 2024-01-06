import { type Doc, type SpaceAPIRespond } from "../types/api";

//Ejecutamos llamada API Globales
export async function getSpaceXData(){
    const respond = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method : "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    //stringify pasa un objeto a formato JSON
    body: JSON.stringify({
        query: {},
        options: {
            sort: {
                date_unix : "asc",
            },
            limit:12,
        },
    }),
});
//TypeScript añado un Type a una API
const data = await respond.json() as SpaceAPIRespond;
const {docs : launches} = data;
return launches;
}

//Ejecuto llamada API para un single
export async function getSpaceXDataByID({id} : {id:string}){
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await res.json()) as Doc;
  return launch;
}
