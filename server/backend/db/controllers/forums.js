const express= require('express');
const router= express.Router();
const Messages_Forum= require('../models/Messages_Forum');
const model=require('../models');


/**
 * add new forum message
 * @param data- with hte forum message details in JSON.parse(Object.keys(data)[0])- message_id = forumMessage.data.messageId,forum_id,course_id,forum_name,course_name,user_name,subject,message,date
 */
async function addNewForumMessage(data) {
    const forumMessage = JSON.parse(Object.keys(data)[0]);
    let message_id = forumMessage.data.messageId;
    let forum_id = forumMessage.data.forumId;
    let course_id = forumMessage.data.courseId;
    let forum_name = forumMessage.data.forumName;
    let course_name = forumMessage.data.selectedCourse;
    let user_name = forumMessage.data.userName;
    let subject = forumMessage.data.subject;
    let message = forumMessage.data.message;
    let date = forumMessage.data.publishedDate;
    model.Messages_Forums.create({
        message_id,
        forum_id,
        course_id,
        forum_name,
        course_name,
        user_name,
        subject,
        message,
        date
    })
        .then(newMessageForum => res.redirect('/messages_forum'))
        .catch(err => console.log);
}



module.exports= {
    addNewForumMessage,
};
