export const trending = (req, res) => {
    const videos = [
        {
            title : "Vlog #1",
            rating : 5,
            comments : 2,
            createdAt : "2 minutes ago",
            views : 59,
            id : 1,
        },
        {
            title : "Vlog #2",
            rating : 5,
            comments : 1000,
            createdAt : "43 minutes ago",
            views : 7648,
            id : 2,
        },
        {
            title : "Vlog #3",
            rating : 3,
            comments : 23451,
            createdAt : "10 minutes ago",
            views : 23514235,
            id : 3,
        },
    ];
    return res.render("home", {pageTitle : "Home", videos});
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