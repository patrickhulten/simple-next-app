import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getSortedList(){
  // get filepath to json file
  const filePath = path.join(dataDir, 'dogs.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

  //sort json array by name propery
  jsonObj.sort(
    function(a,b){
      return a.name.localeCompare(b.name);
    }
  );

  return jsonObj.map(
    function(item){
      return {
        id: item.id.toString(),
        name: item.name
       };
      }
    );
  
}

export function getSortedCats(){
  // get filepath to json file
  const filePath = path.join(dataDir, 'cats.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

  //sort json array by name propery
  jsonObj.sort(
    function(a,b){
      return a.name.localeCompare(b.name);
    }
  );

  return jsonObj.map(
    function(item){
      return {
        id: item.id.toString(),
        name: item.name
       };
      }
    );
  
}

export function getAllIds(){

    // get filepath to json file
  const filePath = path.join(dataDir, 'dogs.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

    return jsonObj.map(
    function(item){
      return {
        params: {
        id: item.id.toString()
        }
       };
      }
    );
  
}

export function getCatIds(){

    // get filepath to json file
  const filePath = path.join(dataDir, 'cats.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

    return jsonObj.map(
    function(item){
      return {
        params: {
        id: item.id.toString()
        }
       };
      }
    );
  
}

export async function getData(idRequested){
      // get filepath to json file
  const filePath = path.join(dataDir, 'dogs.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(
    function(obj){
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if (objMatch.length>0){
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned; 
  
}

export async function getCatData(idRequested){
      // get filepath to json file
  const filePath = path.join(dataDir, 'cats.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath,'utf8');

  // convert string into json array object
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(
    function(obj){
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if (objMatch.length>0){
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned; 
  
}