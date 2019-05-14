var myconfig = {
  sidebar: {
    actionPalette: {
      name: 'action',
      title: 'Action',
      type: 'action',
      header: 'Action Event',
      content: {
        sms: {
          name: 'sms',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8An7wAmbgAm7kAmrgAl7fc7fKl0t/0+fut1uL8//8AoL35/P18wdPn8/bC4Oiaztxit8w/q8QnpcCIy9qAw9SMyNjs9fjO6/HV6vDh8PQ4r8fb8PTJ6O9vvM+44Ome1eFRsciS0d6q2uVivdC+5OtWs8k7sMduwdMiqsODydmy3ud7wNNluM283edVsslfSL8wAAAKUklEQVR4nO2dC3eiOhDHZUYqivUB1retqPXRbnu//7e7QBIID90EeYQ9+Z09Z++K5uZPkplJmIROR6PRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQaWQbDoRUxHA6ark9pLLa73uz6421uro0IJvh/EG3bdbyf6+w4Xi6armFhrJfvw/SGpq8J0UAjg/8hgi8Yb6fDcdsuocPl8bqxsZsjKx9fqeGe9rth0zUXYbCbebbfbKLiOJloGpuvT6tpBY8YrA6bsE8WJui3t9lOTZXW59XFZ9TFMsE+fagmcvB5sov0zPsijem3QqNyd8Uy5VG63dOnEl5zcbhVIC8EwZ2tm9a3PPkdqkIQz7sm9X1vzIqajwNux4ZG5OBYWfdMa3T3TZhWX18t8ohGe1+30fm2a9RHNdapb7mpWV+o8fZZl77Fqabxl9HobWsRuG9IX6jxq3qzumqig8agW7V7nDXYgAS4VmlVt3V6iHugvaxM4LGUydHz4KEigVcFGpAAXhU9dXRTowFDquipO1shgcGc47tkgUel9AVAuYPxYDYtKIt5LVHglzI2hgdOpQm8dpsWkw+cSjKp6niJNHAuJUxVV6BvUs8lCPxStIsSus+bm72CVpQHvp4U+KGcH0wD+6cEbpuuvwDwzIxxqFaodgd7VFzhqQ0CDbwUdotHhf0ET2Frs21FCwYUHYqbpisuzq1QbLNvSR8NKNRPR63powFQYM5/bZVCvEgLXLaojwbAh6zCS6ua0Ocm6RR3igfcWeAop/AsV3yQoEZy8hKfhjz8Xd5Xwvw+gK7k+vNNSuBKZhSi6b79voxGo/V4cuYSF7y31wDnfkXtP+E33rlvIDjz8dov7GU88aQeksiNRBlDCs6Y+6XVc6lG7NOPvHuFIU0lWcd3Bc4rrrDFJC+p8V5pMuZ0Ia7PMHvpX/fIGEZ24V6HwDf6hZfoC/CbKms4FzcIIPH8VCKcwVX252s3obDzfqchWKgVKbRz8oNW4lWRCGxuwqXCOO/3E0woHOXeMJiw60yh+ZJX2LtwZVxhh7EWbkL8k/d7i1yLu+9bXiNidJkqjCXzjCS6qfAUYyI8vIHdtb4DpunO15wgTqGVc8u6/egyVejSfw4njmmazoRM3X+EBRoovPB2FlXImtByiF1HeF/4/0pZGp95tkQ3vkoUIm3CEU3VQXiz/GEoE3pwZT7EEi6RjcKfSADivOcYGYXD7E85q0kUAh2Fsf9Ee9JzJQQaKGhNP8WHIelIQ/4+R5EIr7DTS60ro8NdJAptYlrXuYWJIRq5HYSLtUlC3UtuT0oo7KTaImGDiULaxcZPrLGLDkThYcgULh4pXJCm6Sc6BmvCUVah1MBLIxibSnT9xYN7QhW+9HNKBRInWHNeIbXLD+LYvwJC6zUj8QK71DgMzzlDlyq0TPKdMf+VKfnsrccp7NIcUssp3k9NIVOzFQ/ZIPJpv25mHhAp7GXahgYvC7PPKYz9dd8umnqcH2Kl+ZAISr34Zy9zN1mvSCGNP+MAnLnR94RCfI8LW725hUTiXkShzCoiJOJuXyTXkkwhIBltnSm7YpLhuwbgFTLfE4kskKQrFnyLOwsjG0WMvbilmEIDyQhjno7NmqaYUuglyxr+OrJ2VcxdzGQUYib/audiRiHrleQKFey7haRCA3/SdRnbkgozJeSRE0M+KtNNT3mGU0wpNEzS/8giM4s//8O0Qv9+pR+UWXK+A6ciCnOnOg+A97RGL62Q3VpSNDE8wWpeWmEQbac0DuUCUyGFcm0YFGs6vUS9EvPDcOZkrqILwDmPjMKgMK+f2E8qMT8UVSg1DimAzoQzq/wcP1TIjIh/wSb/9Rt8nKMwaEf0etxyxr01kFyExqGULeUqZjqR/19ASmHkzpn57IQmJFehEW4ndaLZlczKppgt3ReOC8Fl/ctJK2RuZWKQv/vdRwqDX4PHojgJeyrmDyVimsz/gLnHIBRPKqQz3jXx/tR+PFDIuUcJW4O5Sz1ppNa7U5g0LpxmFLJGJIZ0An9XGC29SSgUW/d+5tEom/XmKOxyE2K2TvJYYXcsr1DoQelQKo5I3g5mR7ysQrZKEcAcUsbjJwuTV2iK7eKTeHSI7k/iy9TvhTcprTBeDo0/SigEZ5qYgtHqyjxisIUEdr7Ez0J49avLzX7Z4kS4cJNWGN/gyMMlFAZ3YORwhVHvLbNwI+TwZYypG3a8aPYLNvUW87THj+5HQLykziukd6fHdr2DQ2/Ij0SX2ospFDY1bM1z0PdMH3dCRxoZyRmFbAIYV5lXSDt4x+o7YWHMMOUvc92pkGhGxkZMYiIIHHJrQIlVfV6h4wdjgzn3tDBWGD1qSxcmsarPG7PHiEamTr7l2tEJbUahH425Lp/uyCv0cstKrUI+BoWT90UzTbJzw7C+7GpWYZrkOMxLohzLhB8gvo9G2COa80y/iG66pEI/Es2GXBOpZQxbfE+7+AQK7UliNvcS+w6qcPh3hcy4gttL1HHnyLSgRCeVy7tEOE9WYcWsVc/h19pexwG/D2qJb+FXerFxxWmPFTZxJPerSuVg3k2fyK0nAgQGPpNO0w142AzkK/yvgtOywrLkt+OKPj0MEX/Apg6SSfviuQrKIGFnAr5b14jS+xFb14iSTeg3otLbnbIU2FLasgRTwZkhz7JVCuVThDvtSvQutg9xIPncp1GKbX36bE0jymZAR6i8P5an+F7ZgeBkv2nc4oeftmNvFz6zxbINwduT22QPyksUTyq9g+rWJpsqIY3a0RsW23mYYKC0RLeMAxUthX3GrZzjTS2Vzk9K4JZ1fqulZkfFJzx9mtz80abBTannuJ+Ukwjnkk80U831Q5mnRBE+JDbKVY/os1Aptq4yEtGo5ujEgSoRHJwrOzj5qEJPxUp6KGN9aXyPd/eWs6ezTPYNNyPMqtXnM2rSNXYvtZyV/NHUMiMaRdfUpGnk5BrEGg6CpojvEy5T36nGF0HIZvOXgHmu7njkLOK7aEsCoVZ9tR8B5vfPeg6bj5Ha4/GsPDDqfxHLrr4mRLh8N/AynboO4kNwv+runiH5h1yULw+vu4behfQo562cU+nRb73X2t7WkeHBk2FwD57x1GvXAnld43JYNvkmq7tJ4Gge/HotdrPiL5dDMG9fH02/CfHe6rB5imo2WO5PN5TRiUHyn3s6qPDSvG3+DBhuqaeUA2t3vF5c494LLKkyX1sXDPdy7e0WSrxj7c5mQLyXkDQYbT/2s59L+LJOckRZkI8ZHnwGJtqb6df+YztS6CV5nUWOQISTQOdabLfL3ZiyWy63qrRZiknWzmQ6aLvJhKTVLnzVTzp1GOGqgPUrk1T6N2zqnbZVT3LjOBbOtVIXfvUC4VUlI18O/IFd3U0jE5uKOUaJ0Yj/XgcNiJLb4U1Nb/0sbPWirrcQ1g85lAWNsl8lpQxkt2oNj34aI1i9gPO/2kE74eoF2M0tntTAt1nZWwcV4XZ+4l0nbWBdZE+KRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUbTMv4HwSup281mBKYAAAAASUVORK5CYII=',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'SMS',
          showLabel: null,
          showTitle: null,
          tags: 'SMS'
        },
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
          title: 'Assignment Half Time Alert',
          showLabel: null,
          showTitle: null,
          tags: 'Assignment Half Time Alert'
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
        }
      }
    },
    listenPalette: {
      name: 'listen',
      title: 'Listen',
      type: 'listen',
      header: 'Listen Event',
      content: {
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
        receptionHours: {
          name: 'receptionHours',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://cdn1.vectorstock.com/i/1000x1000/59/40/customer-service-desk-icon-reception-symbol-vector-21095940.jpg',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Reception Hours',
          showLabel: null,
          showTitle: null,
          tags: 'Reception Hours'
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
        examChecked: {
          name: 'examChecked',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://png.icons8.com/metro/1600/exam.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Exam Checked',
          showLabel: null,
          showTitle: null,
          tags: 'Exam Checked'
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
        taskUpload: {
          name: 'taskUpload',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://www.freeiconspng.com/uploads/tasks-icon-14.png',
            style: {
              height: '60px',
              width: '60px',
            }
          },
          title: 'Task Upload',
          showLabel: null,
          showTitle: null,
          tags: 'Task Upload'
        },
        reachedDate: {
          name: 'reachedDate',
          style: 'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;',
          width: 120,
          height: 60,
          image: {
            src: 'https://png.icons8.com/metro/1600/calendar-7.png',
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
      }
    },
    blockPalette: {
      name: 'block',
      title: 'Block',
      type: 'block',
      header: 'Block Event',
      content: {
        sms: {
          name: 'sms',
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
          title: 'SMS',
          showLabel: null,
          showTitle: null,
          tags: 'SMS'
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
        }
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
