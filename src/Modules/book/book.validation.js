import Joi from "joi"

const addBookVal = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publicationYear: Joi.number().required(),
    status:Joi.string(),
    isbn: Joi.string(),
    })
    const updateBookVal = Joi.object({
        title: Joi.string(),
    author: Joi.string(),
    publicationYear: Joi.number(),
    status:Joi.string(),
    isbn: Joi.string(),
    })

    export{
        addBookVal,
        updateBookVal
    }