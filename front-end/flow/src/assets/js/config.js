var myconfig = {
  sidebar: {
    actionPalette: {
      name: 'action',
      title: 'Do Action',
      type: 'action',
      header: 'Do: ',
      content: {
        sms: {
          name: 'sms',
          header: 'send sms',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'data:image/png;base64,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',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'sms',
          showLabel: null,
          showTitle: null,
          tags: 'sms'
        },
        email: {
          name: 'email',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://us.123rf.com/450wm/jovanas/jovanas1603/jovanas160300244/53038597-black-email-icon.jpg?ver=6',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Email',
          showLabel: null,
          showTitle: null,
          tags: 'Email'
        },
        addSchedule: {
          name: 'addSchedule',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn4.iconfinder.com/data/icons/medical-icons-rounded-vector/1250/path_appointment-512.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Add schedule',
          showLabel: null,
          showTitle: null,
          tags: 'Add schedule'
        },
      }
    },
    listenPalette: {
      name: 'listen',
      title: 'Wait For Action',
      type: 'listen',
      header: 'Wait For: ',
      content: {
        Assignment24HoursAlert: {
          name: 'Assignment24HoursAlert',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtISa8UpN-rcGoNDG4kN5C55ILrekLA4BVGJHC2NvzurF7aZaHA',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Assignment 24 Hours Alert',
          showLabel: null,
          showTitle: null,
          tags: 'Assignment 24 Hours Alert'
        },
        Assignment60MinutesAlert: {
          name: 'Assignment60MinutesAlert',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtISa8UpN-rcGoNDG4kN5C55ILrekLA4BVGJHC2NvzurF7aZaHA',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Assignment 60 Minutes Alert',
          showLabel: null,
          showTitle: null,
          tags: 'Assignment 60 Minutes Alert'
        },
        Assignment10MinutesAlert: {
          name: 'Assignment10MinutesAlert',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtISa8UpN-rcGoNDG4kN5C55ILrekLA4BVGJHC2NvzurF7aZaHA',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Assignment 10 Minutes Alert',
          showLabel: null,
          showTitle: null,
          tags: 'Assignment 10 Minutes Alert'
        },
        AssignmentHalfTimeAlert: {
          name: 'AssignmentHalfTimeAlert',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtISa8UpN-rcGoNDG4kN5C55ILrekLA4BVGJHC2NvzurF7aZaHA',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'send assignment half time alert',
          showLabel: null,
          showTitle: null,
          tags: 'Assignment Half Time Alert'
        },
        forumMessage: {
          name: 'forumMessage',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs_xD2C26Ygv6bP5wHE58ThS5Tmr_AbUknarN9sOwQUVZIDI_2Q',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Forum Message',
          showLabel: null,
          showTitle: null,
          tags: 'Forum Message'
        },
        homeworkChecked: {
          name: 'homeworkChecked',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn3.iconfinder.com/data/icons/education/512/Test-512.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Homework Checked',
          showLabel: null,
          showTitle: null,
          tags: 'Homework Checked'
        },
        fileUpload: {
          name: 'fileUpload',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Upload_Document-512.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'File Upload',
          showLabel: null,
          showTitle: null,
          tags: 'File Upload'
        },
        videoUpload: {
          name: 'videoUpload',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://static.thenounproject.com/png/381172-200.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Video Upload',
          showLabel: null,
          showTitle: null,
          tags: 'Video Upload'
        },
        assignmnetUpload: {
          name: 'assignmnetUpload',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'data:image/png;base64,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',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'new assignmnet',
          showLabel: null,
          showTitle: null,
          tags: 'new assignmnet'
        },
        reachedDate: {
          name: 'reachedDate',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://image.flaticon.com/icons/svg/55/55238.svg',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Reached Date',
          showLabel: null,
          showTitle: null,
          tags: 'Reached Date'
        },
        announcement: {
          id: 'face',
          name: 'announcement',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'data:image/png;base64,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',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Announcement',
          showLabel: null,
          showTitle: null,
          tags: 'announcement'
        },
        lectureUplode: {
          name: 'lectureUplode',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://banner2.kisspng.com/20180425/phw/kisspng-computer-icons-presentation-lecture-5ae0cfdd9db365.706788311524682717646.jpg',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'new lecture',
          showLabel: null,
          showTitle: null,
          tags: 'new lecture was uploded'
        },
        practiceUplode: {
          name: 'practiceUplode',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'data:image/jpeg;base64,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',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'new practice',
          showLabel: null,
          showTitle: null,
          tags: 'new practice was uploded'
        },
        assignmnetSubmitted: {
          name: 'assignmnetSubmitted',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://gtwo21iwmnueq19u156j6mrj-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Post-Mortem-Clipboard-01.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'assignmnet submitted',
          showLabel: null,
          showTitle: null,
          tags: 'assignmnet submitted'
        },
      }
    },
    blockPalette: {
      name: 'block',
      title: 'Block Action',
      type: 'block',
      header: 'Block Action: ',
      content: {
        sms: {
          name: 'sms',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://image.shutterstock.com/image-vector/sms-icon-not-allowed-black-260nw-1199103439.jpg',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'block sms',
          showLabel: null,
          showTitle: null,
          tags: 'block sms'
        },
        email: {
          name: 'email',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/e5/9e/00/e59e004f-645e-391d-0856-be3f1f9e6d33/source/512x512bb.jpg',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'block email',
          showLabel: null,
          showTitle: null,
          tags: 'block email'
        },
        addSchedule: {
          name: 'addSchedule',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn4.iconfinder.com/data/icons/symbol-color-common-4/32/calendar-cancel-512.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Add schedule',
          showLabel: null,
          showTitle: null,
          tags: 'Add schedule'
        },
      }
    },
    generalPalette: {
      name: 'general',
      title: 'General',
      type: 'general',
      header: 'Start Event',
      content: {
        start: {
          name: 'start',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn2.iconfinder.com/data/icons/filled-icons/493/Geotag-512.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Start',
          showLabel: null,
          showTitle: null,
          tags: 'Start'
        },

      }
    }
  }
};
