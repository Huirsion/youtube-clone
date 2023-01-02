import Video from "../models/Video";

// Video.find({}, (error, videos) => {});

export const home = async(req, res) => {
    const videos = await Video.find();
    console.log(videos);
    return res.render("home", {pageTitle : "Home", videos});
}

export const watchVideo = (req, res) => {
    // const id = req.params.id;
    const { id } = req.params; // ES6
    return res.render("watch", {pageTitle : `Watching`,});
}

export const getEdit = (req, res) => {
    const { id } = req.params; // ES6
    return res.render("edit", {pageTitle : `Editing`,});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    // console.log("body : ", req.body);
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
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect("/");
    } catch(error){
        return res.render("upload", { pageTitle : "Upload Video", errorMessage: error._message });
    }
}