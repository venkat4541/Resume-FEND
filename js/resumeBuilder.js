var bio = {
    "name" : "Venkat Polumahanti",
    "role" : "Front End Developer",
    "contact" : {
        "phone" : "703-624-9888",
        "email" : "venkat4541@gmail.com",
        "github" : "github.com/venkat4541",
        "twitter" : "twitter.com/la_maverick",
        "location" : "Fairfax, VA"
        },
    "URL" : "images/fry.jpg",
    "message" : "Welcome to my page",
    "skills" : ["HTML", "CSS", "JavaScript", "Jquery", "AngularJS"]
}

var projects = {
    "professional": [
        {
            "name": "EFSWEB",
            "client": "USPTO",
            "location": "Alexandria",
            "duration": "3 months"
        },
        {
            "name": "AIP",
            "client": "NorthernTrust",
            "location": "Chicago",
            "duration": "15 months"
        }
    ],
    "school" : [
        {
            "name": "SeeCode.run",
            "client": "GMU",
            "location": "Fairfax",
            "duration": "3 months"
        }
    ]
}

var education = {
    "degrees" : [
        {
            "name" : "George Mason University",
            "degree" : "Masters",
            "Graduated" : 2016,
            "Major" : "Information Systems"
        },
        {
            "name" : "JNTU",
            "degree" : "Bachelors",
            "Graduated" : 2012,
            "Major" : "Information Technology"
        }
    ]
}

var workex = {
    "jobs" : [
        {
            "dates" : "Aug 2016 - Present",
            "employer" : "Halvik",
            "title" : "Software Developer",
            "location" : "Vienna, VA",
            "description" : "Application development and support using HTML, CSS, JavaScript, JQuery, Java, SQL. Updated front-end designs of Web applications to responsive layout using Bootstrap and grid layout. Significantly reduced page load time of applications using CSS and image compression. HTML5 forms development and enhancement with AngularJS. Followed Agile/Scrum methodology of software development and testing."
        },
        {
            "dates" : "Nov 2012 - Jun 2014",
            "employer" : "Cognizant",
            "title" : "Front End Developer",
            "location" : "Hyderabad, India",
            "description" : "Developed responsive web portals using WordPress & Bootstrap grid layout. Developed business applications using web technologies like HTML5 and CSS3, based on the W3C standards. Planned and implemented web interface for an outdated front-end of a system using WordPress. Used Web based GIT repository manager with issue tracking in GitLab. Utilized pair programming approach to ensure high quality code. Followed Agile/Scrum methodology of software development and testing. Trained and worked on Mainframes (JCL, COBOL) and SQL. Certified by Cognizant in Banking and Financial Systems and have an introduction into Wealth Management."
        },
        {
            "dates" : "Feb 2011 - Oct 2012",
            "employer" : "Careerfreak",
            "title" : "Web  Developer",
            "location" : "Hyderabad, India",
            "description" : "Designed banners & logos for the blogs, discussion boards and other portals in Photoshop. Customized WordPress themes & plugins using HTML, CSS, JavaScript, JQuery and PHP.  Strategized and implemented plan for online portals to achieve maximum exposure with Google Analytics. Achieved a million views in less than a year with ROI of 3500% from Google AdSense with non-profit motto."
        }
    ]
}

$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contact.phone));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contact.location));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contact.github));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contact.twitter));
$("#header").append(HTMLbioPic.replace("%data%",bio.URL));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.message));

if(bio.skills){
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
    }
}
else {
    console.log("Fail");
}

function displayWork(){
    for(job in workex.jobs) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",workex.jobs[job].employer)+HTMLworkTitle.replace("%data%",workex.jobs[job].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",workex.jobs[job].dates));
        $("").append(HTMLworkLocation.replace("%data%",workex.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",workex.jobs[job].description));
    }
}

displayWork();

//$(document).click(function(loc) {
//    var x = loc.pageX;
//    var y = loc.pageY;
//    logClicks(x,y);
//});

$("#main").prepend(internationalizeButton);

function inName(namebfr){
    var temp = namebfr.split(" ");
    var nameafr = temp[0].slice(0,1).toUpperCase()+temp[0].slice(1).toLowerCase()+" "+temp[1].toUpperCase();
    return nameafr;
}