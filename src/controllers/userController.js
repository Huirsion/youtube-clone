import User from "../models/User";

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
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
}

export const editUser = (req, res) => {
    res.send("User Edit");
}

export const deleteUser = (req, res) => {
    res.send("User Delete");
}

export const login = (req, res) => {
    res.send("Login")
}

export const logout = (req, res) => {
    res.send("Logout");
}

export const seeUser = (req, res) => {
    res.send("See User");
}