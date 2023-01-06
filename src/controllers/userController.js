import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle : "Sign In" });
}

export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("join", { 
            pageTitle,
            errorMessage : "Password confirmation does not match.",
        });
    }
    const exists = await User.exists({ $or : [{ username:req.body.username }, { email : req.body.email }] });
    if(exists){
        return res.status(400).render("join", { 
            pageTitle,
            errorMessage : "This username/email is already taken."
        });
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage : error._message,
        });
    }
}

export const getLogin = (req, res) => {
    return res.render("login", { pageTitle : "Log In" });
}

export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const pageTitle = "Log In";
    // check account exists
    const user = await User.findOne({ username });
    if(!user){
        return res.status(400).render("login", { 
            pageTitle, 
            errorMessage : "This username does not exists." 
        });
    }
    // check password correct
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login", { 
            pageTitle, 
            errorMessage : "Wrong password." 
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
}

export const editUser = (req, res) => {
    res.send("User Edit");
}

export const deleteUser = (req, res) => {
    res.send("User Delete");
}

export const logout = (req, res) => {
    res.send("Logout");
}

export const seeUser = (req, res) => {
    res.send("See User");
}