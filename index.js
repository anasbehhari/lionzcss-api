const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static('./public'));
app.get("/",(req,res) => {
    res.send("Hi 💕")
})

app.get("/lionzcss/:folder/:file",(req,res) => {
    if (req.params.folder && req.params.file) {
        const folder = req.params.folder;
        const file = req.params.file;


        if (folder == "css" || folder == "js" || folder == "scss") {
            const filename = path.join(__dirname,`/public/dist/${folder}/${file}.min.${folder}`)
            return res.sendFile(filename,function (err) {
                if (err) res.send("404 not found").status(404)

            })

        }
        res.send("404 not found").status(404)
    }
})
app.get("/lionzcss/:folder/:subfolder/:file",(req,res) => {
    if (req.params.folder && req.params.file) {
        const folder = req.params.folder;
        const subfolder = req.params.subfolder;
        const file = req.params.file;
        if (folder == "css" || folder == "js" || folder == "scss") {
            const filename = path.join(__dirname,`/public/dist/${folder}/${subfolder}/${file}.min.${folder}`)
            return res.sendFile(filename,function (err) {
                if (err) res.send("404 not found").status(404)
            })

        }
        res.send("404 not found").status(404)
    }
})
app.get("*",(req,res) => {
    res.send("not found").status(404)
})
app.listen(process.env.PORT || 5000,(req,res) => {
    console.log("server ruuning");
})