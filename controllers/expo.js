const Expo = require("../models/Expo");

module.exports = {
  getExpos: async (req, res) => {
    try {
      const expos = await Expo.find();
      return res.json(expos);
    } catch (err) {
      return res.json({ message: `Erro al obtener expos. Err: ${err}` });
    }
  },
  createExpo: async (req, res) => {
    console.log(req.body);
    const newExpo = await new Expo(req.body);
    console.log(newExpo);
    await newExpo.save();
    res.json(newExpo);
  },
};
