import asyncHandler from 'express-async-handler';
import Info from '../models/InfoModel.js';

const getInfos = asyncHandler(async (req, res, next) => {
    const Infos = await Info.find();
    res.status(200).json({
        success: true,
        Infos: Infos
    });
});


export {getInfos};