export const trending = (req, res) => {
    res.send("Home Page Videos");
}

export const seeVideo = (req, res) => {
    console.log(req.params);
    // return res.send("Watch Video");
    return res.send(`Watch Video #${req.params.id}`);
}

export const editVideo = (req, res) => {
    return res.send("Edit Video");
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