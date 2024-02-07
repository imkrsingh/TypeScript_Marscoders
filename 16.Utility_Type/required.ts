/////// Code.1
// interface Car {
//     make: string;
//     model: string;
//     mileage?: number;
//   }
              
//   let myCar: Required<Car> = {
//     make: 'Ford',
//     model: 'Focus',
//     mileage: 12000 // `Required` forces mileage to be defined
//   };
  
//   console.log(myCar);


/////// Code.2
interface Biodata {
    name: string;
    qualification: string;
    year?: number;
  }

  let myBiodata: Required<Biodata> = {
    name: 'Manish',
    qualification: 'B.tech',
    year: 2024 // `Required` forces mileage to be defined
  };
  
  console.log(myBiodata);