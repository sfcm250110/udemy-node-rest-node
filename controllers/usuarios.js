const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, key, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        key,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'Put API - Controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}