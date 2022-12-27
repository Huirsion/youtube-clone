export const trending = (req, res) => {
    res.render("home");
}

export const seeVideo = (req, res) => {
    return res.render("watch");
}

export const editVideo = (req, res) => {
    return res.render("edit");
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