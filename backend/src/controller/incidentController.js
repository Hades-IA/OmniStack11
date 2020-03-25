const express = require("express");
const route = express.Router();
const connection = require("../database/connection");

//get
route.get("/incident/index", async (req, res) => {
    const { page = 1 } = req.query;
    const [count] = await connection('incidents').count()
    const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(4).offset((page - 1) * 5).select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whats', 'ongs.city', 'ongs.uf']);
    res.header('X-Total-Count', count['count(*)'])
    return res.json(incidents)
})

route.get("/profile/incidents", async (req, res) => {
    const ong_id = req.headers.autor;
    const incident = await connection('incidents').where('ong_id', ong_id).select('*');
    return res.json({ incident })
})
//post
route.post("/incident/create", async (req, res) => {
    const { title, body, value } = req.body;
    const ong_id = req.headers.autor;
    const [id] = await connection('incidents').insert({
        title,
        body,
        value,
        ong_id
    });
    return res.json({ id })
})
//delete
route.delete("/incident/delete/:id", async (req, res) => {
    const { id } = req.params;
    const ong_id = req.headers.autor;
    const incident = await connection('incidents').where('id', id).select('ong_id').first();
    if (incident.ong_id != ong_id) {
        return res.status(401).json({ error: "Operation not permitted" })
    }
    await connection('incidents').where('id', id).delete()
    return res.status(204).send();
})

module.exports = route