const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require("cors")
const env = require("dotenv");
const fileupload = require("express-fileupload");


const usersRouter = require('./router/user')
const { urlencoded } = require("express")

env.config();


app.use(
    cors({
        origin: "*"
    })
)

mongoose.connect(`mongodb+srv://dbUser:dbUser@cluster0.fqkuj.mongodb.net/wfa?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true
    }).then(() => {
        console.log("Database connected...")
    })

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileupload({}))

app.use("/images", express.static(__dirname + "/img/images"));


app.use('/api', usersRouter)

if (process.env.NODE_ENV == "production") {
    app.use("/", express.static("./servicesats/build"))
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, './servicesats/build/index.html'))
    })
  }


app.post("/create", async (req, res) => {
    const User = require("./user")
    try {
        const { username, password, usergroup } = req.body
        const user = await User.findOne({ username: username })
        if (user) {
            return res.status(400).json({ message: "user already registered" })
        }

        const _user = new User({
            user_id: Date.now().toString(35).toUpperCase(),
            username,
            password,
            usergroup,
            process_id: Date.now().toString(35).toUpperCase(),
            createdOn: new Date().toLocaleString()
        })

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({ message: "Somthing went wrong " })
            }
            if (data) {
                return res.status(200).json({ message: "user registered successfully" })
            }
        })

    } catch (error) {

    }
})

app.get("/get_user", async(req, res) => {
    const User = require("./user")
    try{
        const query = req.query
        const user = await User.find(query)
        if (user) {
            return res.status(200).json({ data : user })
        }
    }catch(error) {
        console.log("Error: ", error)
        return res.status(400).json({ message: "Somthing went wrong " })
    }
})




app.listen(4000, () => {
    console.log(`Api server noe on port 4000`)
})