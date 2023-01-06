import User from "../models/User";

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle : "Sign In" });
}

export const postJoin = async (req, res) => {
    const { name, username, email, password, location } = req.body;
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