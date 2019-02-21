var projects = {
   money: {
      title: "Project Nr.1",
      skills: "JS",
      link: undefined
   },
   money1: {
      title: "Project Nr.2",
      skills: "JS/brJS",
      link: undefined
   },
   money2: {
      title: "Project Nr.3",
      skills: "JS",
      link: undefined
   },
   key: function(n) {
      return this[Object.keys(this)[n]];
  }
};

var aboutMe = {
   title: "About Me",
   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
}

var mobileWidth = 768;


/**  Menuside CLICK  **/

$(".menuside").click(function(){

   /****  For Desktop  ****/
   if ($(window).width() >= mobileWidth){

   //Dont work if its already opened
   if (!($(".menuside").hasClass("opened"))){

   $('.menuside .all .counter .total_num').text(
      $('.menuside .projects').children().length-1
   )

   $(this).addClass("opened");

   var menusideTimeline = anime.timeline({
      easing: 'easeOutExpo',
   });

   menusideTimeline
   .add({
      targets: '.menuside',
      height: '80vh', // to '80%',
      duration: 1000,
      backgroundColor: 'rgb(7, 7, 7)',
      opacity: '0.9',
   })
   .add({
      targets: '.menuside .name',
      translateX: ['-50%',$('.menuside').width() * 2],
      translateY: ['-50%','-50%'],
      rotate: ['90deg','90deg'],
      duration: 1000,
      opacity: [1,0],
      easing: 'easeInQuad',
      complete: function (){
         $('.menuside .name').hide();
      }
   }, 200)
   .add({
      targets: '.menuside',
      width: ['10vw', '90%'], // -> to '90%',
      duration: 2000,
      easing: 'easeInOutQuart',
   }, '-=700')
   .add({
      targets: '.menuside.opened .wrap_projects',
      easing: 'easeOutQuart',
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 2000
   })
   .add({
      targets: '.menuside.opened .about .small_title',
      opacity: [0, 1],
      translateY: [-($(".menuside.opened .about .small_title").height()), 0],
   },'-=1500')
   .add({
      targets: '.menuside.opened .about .text',
      opacity: [0, 1],
      translateY: ["100px", 0],
      duration: 2000,
   },'-=1100')
   .add({
      targets: '.menuside.opened .buttons',
      opacity: [0, 1],
      translateX: ["100px", 0],
   },'-=1600')
   .add({
      targets: '.menuside.opened .all',
      opacity: [0, 1],
      translateX: ["100px", 0],
   },'-=1600')
   .add({
      targets: '#main .menuside.opened .closing_btn',
      opacity: [0, 1],
   },'-=1000');


   anime({
      targets: '#main .titleside .title h1',
      opacity: '0',
      duration: 1500,
      delay: 700,
      easing: 'easeOutExpo'
   })

   };
   };

   /****  For MOBILE  ****/
   if ($(window).width() < mobileWidth){
   

      console.log("works");
      //Dont work if its already opened
      if (!($(".menuside").hasClass("opened_mob"))){

      $('.menuside .all .counter .total_num').text(
         $('.menuside .projects').children().length-1
      )
   
      $(this).addClass("opened_mob");


      anime.timeline({
         easing: 'easeOutExpo',
      })
      .add({
         //Logo moves out of screen - later coming back
         targets: '.titleside .logo',
         translateX: '-150%',
         easing: 'easeInQuad',
         duration: 500,
      })
      .add({
         //Tittle text disapear 
         targets: '.titleside .title',
         opacity: 0,
         easing: 'easeInQuad',
         duration: 500,
      },'-=300')
      .add({
         //MENU - disapear
         targets: '.menuside .name',
         translateY: ['-50%',$('.menuside').width() * 2],
         translateX: ['-50%','-50%'],
         opacity: [1,0],
         easing: 'easeInQuad',
         complete: function (){
            $('.menuside .name').hide();
         }
      },'-=600')
      .add({
         //Set height to full
         targets: '.menuside',
         height: '97vh',
         backgroundColor: 'rgb(7, 7, 7)',
         opacity: '0.9',
      }, '-=400')
      .add({
         //Show Project slider
         targets: '.menuside.opened_mob .wrap_projects',
         opacity: [0, 1],
         translateX: ["-20%", 0],
      },'-=500')
      .add({
         //Show About
         targets: '.menuside.opened_mob .about',
         opacity: [0, 1],
         translateX: ["20%", 0],
      },'-=1000')
      .add({
         //Show About Title
         targets: '.menuside.opened_mob .about .title',
         opacity: [0, 1],
         translateY: ["-100%", 0],
      },'-=600')
      .add({
         //Show all
         targets: '.menuside.opened_mob .all',
         opacity: [0, 1],
         translateY: ["100%", 0],
      },'-=900')
      .add({
         //Show Next Button
         targets: '.menuside.opened_mob .buttons .next',
         opacity: [0, 1],
         translateX: ["100%", 0],
      },'-=600')
      .add({
         //Show Prev Button
         targets: '.menuside.opened_mob .buttons .prev',
         opacity: [0, 1],
         translateX: ["-100%", 0],
      },'-=600')
      .add({
         //Show Prev Button
         targets: '.menuside.opened_mob .closing_btn',
         opacity: [0, 1],
      },'-=600');


      /*
      .add({
         //Logo from out to center
         targets: '.titleside .logo',
         left: ['120%', '50%'],
         translateX: '-50%',
         easing: 'easeInQuad',
         duration: 500,
      })
      */

   
   };
   };

   console.log($('.menuside.opened_mob .all .counter .line').width());
});



/***  Inserts Img to Art Slider  ***/
function setSlider (){
       
  $.ajax({
     url : "img/projects/",
     success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
            
            var fileName = val.substring(
               val.lastIndexOf("/") + 1, 
               val.lastIndexOf(".")
            );
            
            $('.menuside .wrap_projects .projects').append('<div class="project ' + fileName + '"></div>');
            $('.menuside .wrap_projects .project.' + fileName + '').css({
               'background-image': 'url(' + val + ')'
            });
            
            console.log(fileName);
            } 
        });
     }
  });

   //Set grid and project one slide width
   /*
   var projectWidth = $('.menuside .wrap .projects').width();
   console.log(projectWidth);
   $('.menuside .wrap .projects').css({
      'display' : 'grid',
      'grid-template-columns' : 'repeat(4, ' + projectWidth + 'px)',
   });
   */
}
setSlider();



/******   BUTTONS   ******/

var projectPosition;

/*  NEXT  */
$('.menuside .buttons .next').click( function(){
   
   //First click EVER - Set project position.
   if (!projectPosition) {
      projectPosition = 0;  
   };
   
   var projectCount = $('.menuside .projects').children().length;
   var projectWidth = $('.menuside .wrap_projects').width();

   /****  For Desktop  ****/
   if ($(window).width() >= mobileWidth){

      /* First Click - Project Start */
      if (projectPosition == 0) {
         
         /*  Show prev button  */

         var showPrev = anime.timeline({
            easing: 'easeOutQuart'
         });
         
         showPrev
         .add({
            targets: '.menuside .buttons .prev',
            translateX: ['100%', 0],
            duration: 1200,
         })
         .add({
            targets: '.menuside .buttons .prev',
            bottom: -20,
            duration: 500,
         });
         
         /*  Open Project Counter  */
         anime.timeline({
            easing: 'easeOutQuart'
         })
         .add({
            targets: '#main .menuside.opened .all .text',
            top: ['50%','20%'],
            opacity: 0,
            duration: 500,
            complete: function (){
               $('.menuside.opened .all .counter').css({
                  'display': 'unset'
               });
            }
         });
      };

      /* Every click action*/
      if(projectPosition+1 < projectCount){
      
      projectPosition++;
      movementWidth = projectWidth * projectPosition;
      
      /* Do nothing if theres no more projects */
         console.log("projectPosition" + projectPosition);
         console.log("projectCount" + projectCount);


         /* Change Current Position */
         

         $('.menuside .wrap_projects .projects').css({
            'transform': 'translate(-' + movementWidth + 'px)',
            'display' : 'grid',
            'transition': '500ms',
            'grid-template-columns' : 'repeat(' + projectCount + ', ' + projectWidth + 'px)'
         });

         

         /* All animations */
         anime.timeline({
            easing: 'easeOutQuart',
            duration: 700
         })
         .add({
            //Fade out About
            targets: '.menuside.opened .about',
            opacity: [1,0]
         })
         .add({
            begin: function(){
               $('.menuside.opened .about .title .small_title').text(
                  projects.key(projectPosition-1).title
               );
               $('.menuside.opened .about .text').text(
                  projects.key(projectPosition-1).skills
               );
            },
            targets: '.menuside.opened .about',
            opacity: [0,1]
         })
         .add({
            //Fade out current number - counter
            targets: '.menuside.opened .all .counter .current_num',
            translateY: ['-50%', '-100%'],
            opacity: [1,0],
            complete: function(){
               $('.menuside.opened .all .counter .current_num').text(
                  projectPosition
               );
            }
         }, 0)
         .add({
            //Fade in current number - counter
            targets: '.menuside.opened .all .counter .current_num',
            translateY: ['-10px', '-50%'],
            opacity: [0,1]
         }, 750);

         /* Change Line Width */
         $('.menuside.opened .all .counter .line_current').css({
            'width': '' + ($('.menuside.opened .all').width() * 0.3) / (projectCount - 1) * projectPosition + 'px' 
         });


         /* Slider last click */

         //Hide next Button
         if(projectPosition+1 == projectCount){
            
            var hideNext = anime.timeline({
               easing: 'easeOutQuart'
            });

            hideNext
            .add({
               targets: '.menuside .buttons .prev',
               bottom: -10,
               duration: 500,
            })
            .add({
               targets: '.menuside .buttons',
               translateX: '50%',
               duration: 1200
            });
         };
      };
      console.log("----------");

   };

   /****  For MOBILE  ****/
   if ($(window).width() < mobileWidth){

      /* First Click - Project Start */
      if (projectPosition == 0) {
         
         /*  Show prev button  */

         var showPrev = anime.timeline({
            easing: 'easeOutQuart'
         });
         
         showPrev
         .add({
            begin: function (){
               $('#main .menuside.opened_mob .buttons .prev').css({
                  'display': 'unset'
               });
            },
            targets: '.menuside .buttons .prev',
            translateX: ['100%', 0],
            duration: 1000,
         });
         
         /*  Open Project Counter  */
         anime.timeline({
            easing: 'easeOutQuart'
         })
         .add({
            targets: '#main .menuside.opened_mob .all .text',
            top: ['50%','20%'],
            opacity: 0,
            duration: 500,
            complete: function (){
               $('.menuside.opened_mob .all .counter').css({
                  'display': 'unset'
               });
            }
         });
      };

      /* Every click action*/
      if(projectPosition+1 < projectCount){
      
         projectPosition++;
         movementWidth = projectWidth * projectPosition;
      
         /* Do nothing if theres no more projects */
         console.log("projectPosition" + projectPosition);
         console.log("projectCount" + projectCount);


         /* Change Current Position */
         

         $('.menuside .wrap_projects .projects').css({
            'transform': 'translate(-' + movementWidth + 'px)',
            'display' : 'grid',
            'transition': '500ms',
            'grid-template-columns' : 'repeat(' + projectCount + ', ' + projectWidth + 'px)'
         });

         

         /* All animations */
         anime.timeline({
            easing: 'easeOutQuart',
            duration: 700
         })
         .add({
            //Fade out About
            targets: '.menuside.opened_mob .about',
            opacity: [1,0]
         })
         .add({
            begin: function(){
               $('.menuside.opened_mob .about .title .small_title').text(
                  projects.key(projectPosition-1).title
               );
               $('.menuside.opened_mob .about .text').text(
                  projects.key(projectPosition-1).skills
               );
            },
            targets: '.menuside.opened_mob .about',
            opacity: [0,1]
         })
         .add({
            //Fade out current number - counter
            targets: '.menuside.opened_mob .all .counter .current_num',
            translateY: ['-50%', '-100%'],
            opacity: [1,0],
            complete: function(){
               $('.menuside.opened_mob .all .counter .current_num').text(
                  projectPosition
               );
            }
         }, 0)
         .add({
            //Fade in current number - counter
            targets: '.menuside.opened_mob .all .counter .current_num',
            translateY: ['-10px', '-50%'],
            opacity: [0,1]
         }, 750);

         /* Change Line Width */
         $('.menuside.opened_mob .all .counter .line_current').css({
            'width': '' + ($('.menuside.opened_mob .all').width() * 0.3) / (projectCount - 1) * projectPosition + 'px' 
         });

         console.log($('.menuside.opened_mob .all .counter .line').width());
         console.log("projectCount " + projectCount);
         console.log("projectPosition " + projectPosition);
         


         /* Slider last click */

         //Hide next Button
         if(projectPosition+1 == projectCount){
            
            var hideNext = anime.timeline({
               easing: 'easeOutQuart'
            });

            hideNext
            .add({
               targets: '.menuside .buttons .next',
               translateX: "100%",
               duration: 500,
               complete: function(){
                  $('.menuside .buttons .next').css({
                     'display': 'none'
                  });
               }
            });
         };
      };
      console.log("----------");



   };

});


/*  PREVIOUS  */
$('.menuside .buttons .prev').click( function(){

   /* Stop if its at First Position */
   if (projectPosition > 0 ) {

      var projectCount = $('.menuside .projects').children().length;
      var projectWidth = $('.menuside .wrap_projects').width();


      /****  For Desktop  ****/
      if ($(window).width() >= mobileWidth){

      projectPosition--;
      movementWidth = projectWidth * projectPosition;

      /*
      console.log(" MORE THAN 0");
      console.log("POS - " + projectPosition);
      */

      $('.menuside .wrap_projects .projects').css({
         'transform': 'translate(-' + movementWidth + 'px)',
         'transition': '500ms',
         'display' : 'grid',
         'grid-template-columns' : 'repeat(' + projectCount + ', ' + projectWidth + 'px)'
      });
      
      
      /* Start of Slider */
      if (projectPosition == 0){

         /* Hide prev button */
         var prevTimeline = anime.timeline({
            easing: 'easeOutQuart'
         });
      
         prevTimeline
         .add({
            targets: '.menuside .buttons .prev',
            bottom: -10,
            duration: 500,
         })
         .add({
            targets: '.menuside .buttons .prev',
            translateX: [0,'100%'],
            duration: 1200,
         });

         /*  Close Project Counter  */
         anime.timeline({
            easing: 'easeOutQuart'
         })
         .add({
            begin: function (){
               $('.menuside.opened .all .counter').css({
                  'display': 'none'
               });
            },
            targets: '#main .menuside.opened .all .text',
            top: ['20%','50%'],
            opacity: [0,1],
            duration: 500,
         });

         /* Go back to About ME */
         anime.timeline({
            easing: 'easeOutQuart',
            duration: 700
         })
         .add({
            //Fade out About
            targets: '.menuside.opened .about',
            opacity: [1,0]
         })
         .add({
            begin: function(){
               $('.menuside.opened .about .title .small_title').text(
                  aboutMe.title
               );
               $('.menuside.opened .about .text').text(
                  aboutMe.text
               );
            },
            targets: '.menuside.opened .about',
            opacity: [0,1]
         })
      };

      /* End of Slider */
      if(projectPosition+2 == projectCount){
         

         //Show Next Button
         var hideNext = anime.timeline({
            easing: 'easeOutQuart'
         });

         hideNext
         .add({
            targets: '.menuside .buttons',
            translateX: 0,
            duration: 1200
         })
         .add({
            targets: '.menuside .buttons .prev',
            bottom: -20,
            duration: 500,
         });

      };
      
      /* Every Click */
      if (projectPosition > 0){
         console.log("shoudnt Work");
         /* All animations */
         anime.timeline({
            easing: 'easeOutQuart',
            duration: 700
         })
         .add({
            //Fade out About
            targets: '.menuside.opened .about',
            opacity: [1,0]
         })
         .add({
            begin: function(){
               $('.menuside.opened .about .title .small_title').text(
                  projects.key(projectPosition-1).title
               );
               $('.menuside.opened .about .text').text(
                  projects.key(projectPosition-1).skills
               );
            },
            targets: '.menuside.opened .about',
            opacity: [0,1]
         })
         .add({
            //Fade out current number - counter
            targets: '.menuside.opened .all .counter .current_num',
            translateY: ['-50%', '-100%'],
            opacity: [1,0],
            complete: function(){
               $('.menuside.opened .all .counter .current_num').text(
                  projectPosition
               );
            }
         }, 0)
         .add({
            //Fade in current number - counter
            targets: '.menuside.opened .all .counter .current_num',
            translateY: ['-10px', '-50%'],
            opacity: [0,1]
         }, 750);
      };



      /* Change Line Width */
      $('.menuside.opened .all .counter .line_current').css({
         'width': '' + $('.menuside.opened .all .counter .line').width() / (projectCount - 1) * projectPosition + 'px' 
      });



      /*
      console.log($('.menuside .wrap .projects .project').width());
      console.log(movementWidth + ' - movement');
      console.log("works");
      console.log(projectPosition + ' - position');
      */
      
      console.log("----------");
      };

      /****  For MOBILE  ****/
      if ($(window).width() < mobileWidth){

         projectPosition--;
         movementWidth = projectWidth * projectPosition;
   
         $('.menuside .wrap_projects .projects').css({
            'transform': 'translate(-' + movementWidth + 'px)',
            'transition': '500ms',
            'display' : 'grid',
            'grid-template-columns' : 'repeat(' + projectCount + ', ' + projectWidth + 'px)'
         });
         
         /* Start of Slider */
         if (projectPosition == 0){
   
            /* Hide prev button */
            var prevTimeline = anime.timeline({
               easing: 'easeOutQuart'
            });
         
            prevTimeline
            .add({
               targets: '.menuside .buttons .prev',
               translateX: [0,'100%'],
               duration: 1000,
               complete: function (){
                  $('#main .menuside.opened_mob .buttons .prev').css({
                     'display': 'none'
                  });
               },
            });
   
            /*  Close Project Counter  */
            anime.timeline({
               easing: 'easeOutQuad'
            })
            .add({
               begin: function (){
                  $('.menuside.opened_mob .all .counter').css({
                     'display': 'none'
                  });
               },
               targets: '#main .menuside.opened_mob .all .text',
               top: ['20%','50%'],
               opacity: [0,1],
               duration: 500,
            });
   
            /* Go back to About ME */
            anime.timeline({
               easing: 'easeOutQuart',
               duration: 700
            })
            .add({
               //Fade out About
               targets: '.menuside.opened_mob .about',
               opacity: [1,0]
            })
            .add({
               begin: function(){
                  $('.menuside.opened_mob .about .title .small_title').text(
                     aboutMe.title
                  );
                  $('.menuside.opened_mob .about .text').text(
                     aboutMe.text
                  );
               },
               targets: '.menuside.opened_mob .about',
               opacity: [0,1]
            })
         };
   
         /* End of Slider */
         if(projectPosition+2 == projectCount){
            
   
            //Show Next Button
            var showNext = anime.timeline({
               easing: 'easeOutQuart'
            });
   
            showNext
            .add({
               begin: function(){
                  $('.menuside .buttons .next').css({
                     'display': 'unset'
                  });
               },
               targets: '.menuside .buttons .next',
               translateX: 0,
               duration: 500
            });
   
         };
         
         /* Every Click */
         if (projectPosition > 0){
            console.log("shoudnt Work");
            /* All animations */
            anime.timeline({
               easing: 'easeOutQuart',
               duration: 700
            })
            .add({
               //Fade out About
               targets: '.menuside.opened_mob .about',
               opacity: [1,0]
            })
            .add({
               begin: function(){
                  $('.menuside.opened_mob .about .title .small_title').text(
                     projects.key(projectPosition-1).title
                  );
                  $('.menuside.opened_mob .about .text').text(
                     projects.key(projectPosition-1).skills
                  );
               },
               targets: '.menuside.opened_mob .about',
               opacity: [0,1]
            })
            .add({
               //Fade out current number - counter
               targets: '.menuside.opened_mob .all .counter .current_num',
               translateY: ['-50%', '-100%'],
               opacity: [1,0],
               complete: function(){
                  $('.menuside.opened_mob .all .counter .current_num').text(
                     projectPosition
                  );
               }
            }, 0)
            .add({
               //Fade in current number - counter
               targets: '.menuside.opened_mob .all .counter .current_num',
               translateY: ['-10px', '-50%'],
               opacity: [0,1]
            }, 750);
         };
   
         /* Change Line Width */
         $('.menuside.opened_mob .all .counter .line_current').css({
            'width': '' + $('.menuside.opened_mob .all .counter .line').width() / (projectCount - 1) * projectPosition + 'px' 
         });
      
         }; 



   };
});


/*   CLOSING BUTTON   */
$(".menuside .closing_btn").click(function(){

   /****  For Desktop  ****/
   if ($(window).width() >= mobileWidth){

      var closingTimeline = anime.timeline({
         easing: 'easeInQuint',
         duration: 500
      });
      
      closingTimeline
      .add({
         targets: '#main .menuside.opened .closing_btn',
         opacity: [1, 0],
      })
      .add({
         targets: '.menuside.opened .buttons',
         translateX: "105%"
      })
      .add({
         targets: '.menuside.opened .all',
         translateX: [0, $('body').width() * 0.7],
         easing: "easeInQuint"
      })
      .add({
         targets: '.menuside.opened .wrap_projects',
         translateX: [0, $('body').width() * 0.5],
         duration: 2000,
         opacity: [1,0],
         easing: "easeInQuint"
      }, "-=1000")
      .add({
         targets: '.menuside.opened .about .small_title',
         opacity: [1, 0],
         duration: 1000,
         easing: 'easeOutExpo',
         translateY: [0,-($(".menuside.opened .about .small_title").height())],
      },'-=1500')
      .add({
         targets: '.menuside.opened .about .text',
         opacity: [1, 0],
         translateY: [0, "100px"],
         easing: 'easeOutExpo',
         duration: 2000,
      },'-=2000')
      .add({
         targets: '.menuside',
         width: ["90%" , '10vw'], // -> back to 10vw,
         duration: 1000,
         easing: 'easeInOutQuart',
      }, "-=1000")
      .add({
         targets: '.menuside',
         height: '100vh', // to '80%',
         duration: 1000,
         backgroundColor: '#2b352e',
         opacity: '0.6',
         easing: 'easeOutExpo',
         complete: function (){
            $('.menuside').removeClass("opened");
         }
      })
      .add({
         targets: '#main .titleside .title h1',
         opacity: '1',
         duration: 1500,
         easing: 'easeOutExpo',
      }, "-=1500")
      .add({
         begin: function (){
            $('.menuside .name').show();
         },
         targets: '.menuside .name',
         translateX: [$('.menuside').width() * 2, '-50%'],
         duration: 1000,
         opacity: [0,1],
         easing: 'easeOutQuart',
      },"-=1500");
   };
   
   /****  For MOBILE  ****/
   if ($(window).width() < mobileWidth){

      var closingTimeline = anime.timeline({
         easing: 'easeInQuint',
         duration: 500
      });
      
      closingTimeline
      .add({
         targets: '#main .menuside.opened_mob .closing_btn',
         opacity: [1, 0],
      })
      .add({
         //Hide Prev Button
         targets: '.menuside.opened_mob .buttons .prev',
         opacity: [1, 0],
         translateX: [0,"-100%"],
      },'-=300')
      .add({
         //Hide Next Button
         targets: '.menuside.opened_mob .buttons .next',
         opacity: [1, 0],
         translateX: [0, "100%"],
      },'-=400')
      .add({
         //Show all-counter
         targets: '.menuside.opened_mob .all',
         opacity: [1,0],
         translateY: [0, "100%"],
      },'-=200')
      .add({
         //Hide About Title
         targets: '.menuside.opened_mob .about .title',
         opacity: [1, 0],
         translateY: [0, "-100%"],
      },'-=100')
      .add({
         //Hide About
         targets: '.menuside.opened_mob .about',
         opacity: [1, 0],
         translateX: [0, "20%"],
      },'-=500')
      .add({
         //Hide Project slider
         targets: '.menuside.opened_mob .wrap_projects',
         opacity: [1, 0],
         translateX: [0, "-20%",],
      },'-=500')
      .add({
         //Set height to default
         targets: '.menuside',
         height: '10vh',
         backgroundColor: '#2b352e',
         opacity: '0.6',
      })
      .add({
         //MENU - appear
         targets: '.menuside .name',
         translateY: [$('.menuside').width() * 2, '-50%',],
         translateX: ['-50%','-50%'],
         opacity: [0, 1],
         easing: 'easeInQuad',
         complete: function (){
            $('.menuside .name').show();
         }
      })
      .add({
         //Tittle text apper 
         targets: '.titleside .title',
         opacity: 1,
         easing: 'easeInQuad',
         duration: 500,
      },'-=700')
      .add({
         //Logo moves out of screen - later coming back
         targets: '.titleside .logo',
         translateX: ['-150%', 0],
         easing: 'easeInQuad',
         duration: 500,
         complete: function (){
            $('.menuside').removeClass("opened_mob");
         }
      },'-=500');

   };

});


// First Time pressing on Project blink next button
$('.menuside .all').click( function(){
   
   if (!projectPosition){
      anime.timeline({
         
      })
      .add({
         targets: '.menuside .buttons .next',
         backgroundColor: 'rgb(250,250,250)',
         duration: 500
      })
      .add({
         targets: '.menuside .buttons .next',
         backgroundColor: 'rgb(7, 7, 7)',
         duration: 1000
      });
   };
   
   console.log(projectPosition);
   console.log("all button");
});






/** Change Slider translate on resize **/
$( window ).resize(function() {


   if (projectPosition >= 0){

      $('.menuside .wrap_projects .projects').css({
         'transition': 'none'
      });

      var projectWidth = $('.menuside .wrap_projects').width();
      var projectCount = $('.menuside .projects').children().length;
      movementWidth = projectWidth * projectPosition;
   
      $('.menuside .wrap_projects .projects').css({
         'transform': 'translate(-' + movementWidth + 'px)',
         'display' : 'grid',
         'grid-template-columns' : 'repeat(' + projectCount + ', ' + projectWidth + 'px)'
      });
   };
});





