import Joi from "joi"

const addPatronVal = Joi.object({
    name: Joi.string().required(),
    contactInfo: Joi.string().required(),
    })
    const updatePatronVal = Joi.object({
        name: Joi.string(),
    contactInfo: Joi.string(),
    })

    export{
        addPatronVal,
        updatePatronVal
    }