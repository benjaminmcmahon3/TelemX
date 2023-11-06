const express = require('express')
const dragonRouter = express.Router();

const { getAllDragons, getDragonBySerial } = require('../db/dragon')

dragonRouter.get('/', async (req, res, next)=>{
  try{
    const allDragons = await getAllDragons();
    res.send({allDragons})
  }catch(err){
    console.log('Error fetching all dragons')
  }
})