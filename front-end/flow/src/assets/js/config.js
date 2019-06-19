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
        blockAddSchedule: {
          name: 'blockAddSchedule',
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
          title: 'block add schedule',
          showLabel: null,
          showTitle: null,
          tags: 'block add schedule'
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
