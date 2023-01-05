import Video from "../models/Video";

// Video.find({}, (error, videos) => {});

export const home = async (req, res) => {
    const videos = await Video.find();
    return res.render("home", {pageTitle : "Home", videos});
}

export const watchVideo = async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params; // ES6
    const video = await Video.findById(id);
    if(video === null){
        return res.render("404", { pageTitle : "Video not Found." });
    }
    return res.render("watch", { pageTitle : video.title, video });
}

export const getEdit = async (req, res) => {
    const { id } = req.params; // ES6
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", { pageTitle : "Video not Found." });
    }
    return res.render("edit", {pageTitle : `Edit ${video.title}`, video});
}

export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id : id });
    if(!video){
        return res.render("404", { pageTitle : "Video not Found." });
    }
    await Video.findByIdAndUpdate(id, {
        title : title,
        description : description,
        hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle : "Upload Video" });
}

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;   
    try{
        await Video.create({
            title, // title : title,
            description, // description : description,
            hashtags : Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    } catch(error){
        return res.render("upload", { pageTitle : "Upload Video", errorMessage: error._message });
    }
}