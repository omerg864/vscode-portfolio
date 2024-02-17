import asyncHandler from 'express-async-handler';
import Project from '../models/ProjectModel.js';

const getProjects = asyncHandler(async (req, res, next) => {
    const Projects = await Project.find();
    res.status(200).json({
        success: true,
        Projects: Projects
    });
});


export {getProjects};