function drawPattern(X) {
    if (X % 2 === 0) {
      throw new Error("X should be an odd number");
    }
  
    const pattern = [];
  
    for (let i = 0; i < X; i++) {
      const row = [];
      for (let j = 0; j < X; j++) {
        if (i < j || i + j >= X) {
          row.push("x");
        } else {
          row.push("o");
        }
      }
      pattern.push(row);
    }
  
    return pattern;
  }
  
  console.log(drawPattern(5));


  // second way 

  // the distance from one point to another, assuming we can only move
// left or right and up or down
const distance = (point_a, point_b) =>
// distance left and right
Math.abs(point_a[0] - point_b[0]) +
  // distance up and down
  Math.abs(point_a[1] - point_b[1]);

const make_pattern = (side_length) => {
const halfish_length = Math.floor(side_length / 2);
const middle = [halfish_length, halfish_length];

return Array.from(
  { length: side_length },
  (_, row_i) => Array.from(
    { length: side_length },
    (_, col_i) => distance(middle, [col_i, row_i]) > halfish_length ? 'o' : 'x'
  )
);
};

const draw_pattern = (side_length) =>
make_pattern(side_length)
  .map((row) => row.join(''))
  .join("\n");

console.log(draw_pattern(5));
console.log(draw_pattern(7));