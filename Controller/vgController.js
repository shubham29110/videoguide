const mongoose = require('mongoose');
const fetchVideoInfo = require('youtube-info');
const VideoGuide = require('../Models/videoGuide');
const Course=require('../Models/course')




/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
module.exports.home = async function (req, res) {

    try {

        var title = req.body.title;
        var video_url = req.body.video_url;
        var course = req.body.course
        var courseId;
        var url = video_url.split("=")
        console.log(url[1])
        console.log(req.body.video_url, "-------------------------", req.body.title);


        var duration = fetchVideoInfo(url[1]).then((videoInfo) => {
            console.log(videoInfo.duration);
            duration = videoInfo.duration
            console.log(duration, "seconds")
            return duration
        }).then(async (duration)=>{
        
                var course = new Course({
                    name: course
                });

                let newCourse = await course.save();
                
                if (newCourse) {
                    console.log(newCourse)
                    courseId=newCourse._id
                }
            
        }).then(async (duration)=>{
            var newtitle = await VideoGuide.findOne({ title: title });
            var new_video_url = await VideoGuide.findOne({ email: video_url })
            if (!newtitle || !new_video_url) {
                var videoGuide = new VideoGuide({
                    title: title,
                    video_url: video_url,
                    duration: duration,
                    courseId:courseId
                });

                let videoguide = await videoGuide.save();
                if (videoguide) {
                    console.log(videoguide)

                }
            };
        });
       

    } catch (error) {
        console.log(error);
        //throw error
    }
}
