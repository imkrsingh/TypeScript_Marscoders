/////////// Code.1 | Interfaces //////////
interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);


/////// Code.2 | Extending Interfaces /////

interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);