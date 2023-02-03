// It contains the logic for updating the user interface of the calculator (state of the calculator)
const calculatorModel = require("./model");

exports.add = (req, res) => {
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  const result = calculatorModel.add(a, b);
  res.send({ result });
};

exports.sub = (req, res) => {
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  const result = calculatorModel.sub(a, b);
  res.send({ result });
};

exports.mul = (req, res) => {
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  const result = calculatorModel.mul(a, b);
  res.send({ result });
};

exports.div = (req, res) => {
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  const result = calculatorModel.div(a, b);
  res.send({ result });
};

// exports.getPercentage = (req, res, next) => {
//   const numberOne = parseInt(req.body.numberOne);
//   const numberTwo = parseInt(req.body.numberTwo);

//   if (isNaN(numberOne) || isNaN(numberTwo)) {
//     return res.status(400).json({ error: "Invalid input, numbers are required" });
//   }
//   if (numberTwo === 0) {
//     return res.status(400).json({ error: "Invalid input, cannot divide by zero" });
//   }

//   res.status(200).json({
//     output: (numberOne / numberTwo) * 100 + "%",
//   });
// };