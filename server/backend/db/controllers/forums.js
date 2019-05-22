const express= require('express');
const router= express.Router();
const Messages_Forum= require('../models/Messages_Forum');
const model=require('../models');

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
// }
    // else{
    //     console.log("no data to add");
    //     res.sendStatus(200);}
}

// return the name of forum by his id
// router.get('/:forum_message_id',(req,res)=>{
//     //console.log(req.params.forum_message_id);
//     const data=req.params.forum_message_id;
//     console.log(data);
//     if(data!=null) {
//         model.Messages_Forums.findByPrimary(data)
//             .then(specificForumMessage => res.send(specificForumMessage))
//             .catch(err => console.log(err));
//     }
//     else {
//         console.log("no forum_message_id");
//         res.sendStatus(200);
//     }
// });



module.exports= {
    addNewForumMessage,
};
