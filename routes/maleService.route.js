const express = require('express');

// --------------->>>>>>>> Male Service Router <<<<<<<<-------------------
const { MaleGetData, MalePostData,getMaleSingleData, MalePatchData, MaleDeleteData } = require('../controllers/MaleServiceController');

const MaleRouter = express.Router();


// --------->>>> GET <<<<<---------
MaleRouter.get('/male', MaleGetData);

// ---------Get single data 
MaleRouter.get('/male/:id', getMaleSingleData);

// --------->>>> POST <<<<<--------- 
MaleRouter.post('/male/addMaleService', MalePostData);


// --------->>>> PATCH <<<<<---------
MaleRouter.patch('/male/update/:id', MalePatchData);


// --------->>>> DELETE <<<<<---------
MaleRouter.delete('/male/delete/:id', MaleDeleteData);

module.exports = { MaleRouter }  