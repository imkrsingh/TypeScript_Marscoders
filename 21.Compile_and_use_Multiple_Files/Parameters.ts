type PointPrinter = (p: { x: number; y: number; }) => void;

const points: Parameters<PointPrinter>[0] = {
  x: 20,
  y: 50
};

console.log(point)