const {body} = require('express-validator')

const userValidate = [
    body('name').isLength({min:1}),
    body('surname').isLength({min: 1}),
    body('age').isNumeric()
               .custom((age) => {
                   return age >= 18
               })
]

module.exports.userValidate = userValidate;