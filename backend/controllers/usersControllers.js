const User = require ("../models/user.js")
const bcryptjs= require ("bcryptjs")


const usersControllers = {

    nuevoUsuario: async (req,res)=> {

        const { firstname, lastname, email, password}=req.body.NuevoUsuario
        console.log(req.body)
        try{
            const UsuarioExiste= await User.findOne({email})

            if (UsuarioExiste){
                res.json({sucess:"falseUE", response:"Usuario ya existe, realice el SignIn"})
            }

            else{
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User({
                    firstname, 
                    lastname,
                    email,
                    password: passwordHash
                })
                await NewUser.save()
                res.json({sucess:"trueUE", response: "Usuario creado exitosamente"})
            }

        }

        catch(error){res.json({sucess:"falseUE",response:null,error:error})}
        
    
    }}
    module.exports = usersControllers