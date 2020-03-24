const express = require("express");
const crypto = require("crypto");
const route = express.Router();

const connection = require("./database/connection");

route.get("/ong", async (req, res) => {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs)
})
route.post("/ong/create", async (req, res) => {
    const { name, email, whats, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

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