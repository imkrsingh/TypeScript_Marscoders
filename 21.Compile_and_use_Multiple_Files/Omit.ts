interface Person {
    name: string;
    age: number;
    location?: string;
  }
      
  const bobs: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };
  
  console.log(bob);