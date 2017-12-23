///*
//This is empty on purpose! Your code to build the resume will go here.
// */

//
//
//var work = {    
//}
//work.position = "Software Engineer"
//work["age"] = 45+5
//
//
//$("#main").append(work["position"]);
//$("#main").prepend(work["age"]);
var bio = {
    name : "Abdullah Almusained",
    role : "Software Engineer",
    contacts : {
        mobile: "00966555555555",
        email: "afm1993@hotmail.com",
        github: "AbdullahGithub",
        twitter: "@AbdullahTwitter",
        location: "Riyadh"
    },
    welcomeMessage: "Welcome to my resume page!", 
    skills: ["Self Learning", "Problem Solving", "Web Development"],
    biopic: "images/profile-placeholder.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").append(formattedName);
        $("#header").append(formattedRole);
    } 
}

// *Name and Role*
var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
$("#header").append(formattedName)
$("#header").append(formattedRole)


// *Pic*
formattedPic = HTMLbioPic.replace("%data%", bio.biopic)
$("#header").append(formattedPic)


// *Contacts*
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);


// *Skills*
if (bio.skills.length > 0 ){
    $("#header").append(HTMLskillsStart);
}
for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#header").append(formattedSkill);
}


var work = {
    jobs: [{
        employer: "EIA Company", 
        title: "Software Developer",
        location: "Riyadh",
        dates: "in progress",
        description: "Developing new functionalities which was recieved by business analyses." 
    }],
    display: function(){

    }
}


// *Work jobs*
if (work.jobs.length > 0) {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}


// *logClicks*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});



var projects = {
    projects: 
    [{
        title: "FreeRide" ,
        dates: "Present",
        description: "iOS Application",
        images: ["images/profile-placeholder.jpg", "images/profile-placeholder.jpg"]
    }],
    display: function () {

    }             
}


for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);}
}


var education = {
    schools: 
    [
        {name: "Alyamama",
         location: "Riyadh",
         degree: "High school",
         majors: ["IT"],
         dates: "Jan 2007 - Jan 2010",
         url: "www.yamama.com"}
        , 
        {name: "KSU",
         location: "Riyadh",
         degree: "Master",
         majors: ["CS"],
         dates: "Jan 2011 - Jan 2016",
         url: "www.ksu.com"}
    ],
    onlineCourses: 
    [
        {title: "Front-end web developer",
         school: "Udacity",
         dates: "Nov 2017 - present",
         url: "www.udacity.com"}
        , 
        {title: "iOS",
         school: "Udemy",
         dates: "Nov 2016 - Jun 2017",
         url: "www.udemy.com"}
    ],
    display: function () {

    } 
}


for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedDate);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    for (major in education.schools[school].majors) {
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);
    }
}

if (education.onlineCourses.length > 0 ) {
    var formattedOnlineCourses = HTMLonlineClasses;
    $(".education-entry:last").append(formattedOnlineCourses);
}

for (course in education.onlineCourses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedUrl);

}



//
//$("#header").append(HTMLskillsStart);
