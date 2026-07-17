import express, { response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;    
let posts = [];   
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , (req ,res)=>{
    res.render("home.ejs" , {posts: posts});           
});
app.get("/about" , (req , res)=> {
    res.render("about.ejs");
});
app.get("/contact" , (req , res)=> {
    res.render("contact.ejs");
});

app.get("/compose" , (req , res)=> {
    res.render("compose.ejs");
    });

app.get("/create" , (req , res)=> {
    res.render("create.ejs");
} );

app.post("/create" , (req , res)=>{

    const newPost = {
        id : posts.length , 
        title: req.body.title ,
        content: req.body.content
        }

    posts.push(newPost);
    res.redirect("/");
});


app.get("/editList", (req ,res)=>{
    res.render("editList.ejs" , {posts:posts});
});



app.get("/edit/:id", (req , res)=> { 

    const postToEdit = posts[req.params.id];
    console.log("NEW GET ROUTE");
    res.render("edit.ejs", {postToEdit});
});

app.post("/edit/:id" , (req , res)=> {
    const postToEdit = posts[req.params.id];
     if (postToEdit) {
        postToEdit.title = req.body.title;
        postToEdit.content = req.body.content;
        console.log(postToEdit);
        res.redirect("/");
        }
    else {
        res.redirect("/");
    }
});



app.listen(port , ()=>{
    console.log(`Listening on the port: ${port}.`);
});