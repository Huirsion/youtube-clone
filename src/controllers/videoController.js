let videos = [
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

export const trending = (req, res) => {
    return res.render("home", {pageTitle : "Home", videos});
}

export const watchVideo = (req, res) => {
    // const id = req.params.id;
    const { id } = req.params; // ES6
    const video = videos[id-1];
    return res.render("watch", {pageTitle : `Watching : ${video.title}`, video : video});
}

export const getEdit = (req, res) => {
    const { id } = req.params; // ES6
    const video = videos[id-1];
    return res.render("edit", {pageTitle : `Editing : ${video.title}`, video});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    // console.log("body : ", req.body);
    return res.redirect(`/videos/${id}`);
}
