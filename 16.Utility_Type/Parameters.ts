type PointPrinter = (p: { x: number; y: number; }) => void;

const point: Parameters<PointPrinter>[0] = {
  x: 20,
  y: 50
};

console.log(point)