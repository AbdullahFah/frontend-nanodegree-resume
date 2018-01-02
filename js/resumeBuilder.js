var bio = {
    name : "Abdullah Almusained",
    role : "Software Engineer",
    contacts : {
        mobile: "00966555555555",
        email: "afm1993@hotmail.com",
        github: "AbdullahGithub",
        twitter: "@AbdullahTwitter",
        location: "Makkah"
    },
    welcomeMessage: "Welcome to my resume page!", 
    skills: ["Self Learning", "Problem Solving", "Web Development"],
    biopic: "images/profile-placeholder.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
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
        formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);
        formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#footerContacts").append(formattedGithub);
        formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);
        formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#footerContacts").append(formattedLocation);
        if (bio.skills.length > 0 ){
            $("#header").append(HTMLskillsStart);
        }
        bio.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace("%data%",skill);
            $("#header").append(formattedSkill);
        });

    } 
};


var work = {
    jobs: [{
        employer: "EIA Company", 
        title: "Software Developer",
        location: "Riyadh",
        dates: "in progress",
        description: "Developing new functionalities which was recieved by business analyses." 
    }],
    display: function(){
        if (work.jobs.length > 0) { 
            work.jobs.forEach(function(job){
                $("#workExperience").append(HTMLworkStart);
                var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
                $(".work-entry:last").append(formattedLocation);
                var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace("%data%",job.dates);
                $(".work-entry:last").append(formattedDates);
                var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
                $(".work-entry:last").append(formattedDescription);
            });
        }
    }
};

var projects = {
    projects: 
    [{
        title: "FreeRide" ,
        dates: "Present",
        description: "iOS Application",
        images: ["images/app.jpg", "images/app2.jpg"]
    }],
    display: function () {
        projects.projects.forEach(function(project){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
            $(".project-entry:last").append(formattedDescription);
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }             
};


var education = {
    schools: 
    [
        {name: "Alyamama",
         location: "Dubai",
         degree: "High school",
         majors: ["IT"],
         dates: "Jan 2007 - Jan 2010",
         url: "www.yamama.com"}, 
        {name: "KSU",
         location: "Khubar",
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
         url: "www.udacity.com"}, 
        {title: "iOS",
         school: "Udemy",
         dates: "Nov 2016 - Jun 2017",
         url: "www.udemy.com"}
    ],
    display: function () {
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%",school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
            var formattedDate = HTMLschoolDates.replace("%data%",school.dates);
            $(".education-entry:last").append(formattedDate);
            var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
            $(".education-entry:last").append(formattedLocation);
            school.majors.forEach(function(major){
                var formattedMajor = HTMLschoolMajor.replace("%data%",major);
                $(".education-entry:last").append(formattedMajor);
            });
        });
        if (education.onlineCourses.length > 0 ) {
            var formattedOnlineCourses = HTMLonlineClasses;
            $(".education-entry:last").append(formattedOnlineCourses);
        }
        education.onlineCourses.forEach(function(course){
            var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedUrl = HTMLonlineURL.replace("%data%",course.url);
            $(".education-entry:last").append(formattedUrl);
        });
    } 
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

