const express = require("express");
const route = express.Router();
const crypto = require("crypto");
const generateId = require('../ultility/generateId');
const connection = require("../database/connection");
route.get("/ongs", async (req, res) => {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs)
});
route.post("/ong/create", async (req, res) => {
    const { name, email, whats, city, uf } = req.body;
    const id = generateId();

    await connection('ongs').insert({
        id,
        name,
        email,
        whats,
        city,
        uf
    });
    return res.json({ id })
})


module.exports = route