const express= require('express');
const router= express.Router();
const announcement= require('../models/Announcements');
const model=require('../models');

/**
 * fucntion that add new row to announcement table
 * @param req from the user
 * @returns {Promise<void>}
 */
async function addAnnouncement (data){
    const announcement = JSON.parse(Object.keys(data)[0]).data;
    console.log("temp33");
    console.log(Object.getOwnPropertyNames(announcement));
    let massage_id = announcement.messageId;
    let course_id = announcement.courseId;
    let course_name = announcement.selectedCourse;
    let user_name = announcement.userName;
    let subject = announcement.subject;
    let message = announcement.message;
    let date = announcement.publishedDate;

    model.Announcements.create({
        massage_id,
        course_id,
        course_name,
        user_name,
        subject,
        message,
        date
    })
        .then(newAnnouncement => res.redirect('/announcements'))
        .catch(err => console.log);
}

module.exports= {
    addAnnouncement,
};
