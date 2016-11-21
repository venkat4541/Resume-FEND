//
//
//$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
//$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
//$("#topContacts").append(HTMLemail.replace("%data%",bio.contact));
//$("#header").append(HTMLbioPic.replace("%data%",bio.URL));
//$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.message));
//$("#topContacts").append(HTMLskills.replace("%data%",bio.skills));
//bio["work"] = "Web Developer";
//$("#workExperience").append(HTMLworkTitle.replace("%data%",bio.work));

var bio = {
    "name" : "Venkat Polumahanti",
    "role" : "Front End Developer",
    "contact" : {
        "phone" : "703-624-9888",
        "email" : "venkat4541@gmail.com",
        "twitter" : "twitter.com/la_maverick",
        "github" : "github.com/venkat4541",
        "location" : "Fairfax, VA"
        },
    "URL" : "images/197x148.gif",
    "message" : "Welcome to my page",
    "skills" : ["HTML", "CSS", "JavaScript"]
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

var work = {
    "companies" : [
        {
            "name" : "Cognizant",
            "location" : "Hyderabad",
            "start" : "Nov 2012",
            "end" : "Jun 2014"
        },
        {
            "name" : "Halvik",
            "location" : "Alexandria",
            "start" : "Aug 2016",
            "end" : "Present"
        }
    ]
}

if(bio){
    $("#header").append(HTMLskillsStart);
    console.log("Pass");
}
else{
    console.log("Fail");
}