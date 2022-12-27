export const trending = (req, res) => {
    return res.render("home", {pageTitle : "Home"});
}

export const seeVideo = (req, res) => {
    return res.render("watch", {pageTitle : "Watch"});
}

export const editVideo = (req, res) => {
    return res.render("edit", {pageTitle : "Edit"});
}

export const searchVideo = (req, res) => {
    res.send("Search Video");
}

export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}

export const upload = (req, res) => {
    res.send("Upload Video");
}