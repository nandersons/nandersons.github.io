//header
var name = "Neal Anderson";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

//contact info JSON
var bio = {
    "name" : "Neal Anderson",
    "role" : "Front End Web Developer",
    "contacts" : {
        "email" : "NealAndersons@gmail.com",
        "github" : "https://github.com/nandersons",
        "mobile" : "217-652-0800",
        "location" : "Springfield, Illinois"
    },
    "picture" : "images/mypic.JPG",
    "welcome_message" : "Welcome to my Resume",
    "skills" : ["HTML", "CSS", "JavaScript", "Git"],
    display : function myFunction() {}
};

//contact info
if (bio.skills.length > 0) {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
    $("#header").append(formattedWelcomeMsg);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    //var formattedHeader = HTMLheaderName.replace("%data%", bio.hi);
    //$("#header").append(formattedHeader);
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

//work JSON
var work = {
    "current_job" : "Consultant",
    "employer" : "Sequoia Consulting Group",
    "years_worked" : "January 2015 - Present",
    "location" : "Springfield, Illinois",
    "descript" : "In the midst of one of the worst financial decades in Illinois, our expert consulting services secures millions of dollars in federal funding every year for our client and helps keep the doors open at their agency.",
    display : function myFunction() {}
};

//work
if (work.current_job.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.current_job);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.years_worked);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.descript);
    $(".work-entry:last").append(formattedDescription);
};

//projects JSON
var projects = {
    "portfolio" : "my portfolio",
    display : function myFunction() {}
};


//projects
if (projects.portfolio.length > 0) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.portfolio);
    $(".project-entry:last").append(formattedTitle);
};
//var education = {};
//education["name"] = "Southern Illinois University Carbondale";
//education["years"] = "2008-2015";

//$("#main").append(work["current_job"]);

//education JSON
var education = {
    "schools" : {
        "school": "Southern Illinois University Carbondale",
        "location" : "Carbondale, Illinois",
        "dates" : "2008-2015",
        "majors" : {
            "undergraduate" : "Criminology/Criminal Justice, BA",
            "graduate" : "Masters of Public Administration, MPA",
            "minor" : "Forensic Science, Minor"
        },
    },
    "onlineCourses" :
    [{
        "course" : "Intro to Computer Science",
        "school" : "Udacity",
        "url" : "https://classroom.udacity.com/courses/cs101"
    },
    {
        "course" : "JavaScript Basics",
        "school" : "Udacity",
        "url" : "https://classroom.udacity.com/courses/ud804"
    },
    {
        "course" : "Intro to HTML and CSS",
        "school" : "Udacity",
        "url" : "https://classroom.udacity.com/courses/ud304"
    }],
    display : function myFunction() {}
};

//education
if (education.schools.school.length > 0) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools.school);
    $(".education-entry:last").append(formattedSchool);
    var formattedSchoolDegreeU = HTMLschoolDegree.replace("%data%", education.schools.majors.undergraduate);
    $(".education-entry:last").append(formattedSchoolDegreeU);
    var formattedSchoolDegreeM = HTMLschoolDegree.replace("%data%", education.schools.majors.graduate);
    $(".education-entry:last").append(formattedSchoolDegreeM);
    var formattedSchoolDegreeP = HTMLschoolDegree.replace("%data%", education.schools.majors.minor);
    $(".education-entry:last").append(formattedSchoolDegreeP);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].course);
    $(".education-entry:last").append(formattedTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    $(".education-entry:last").append(formattedOnlineSchool);
    var formattedURL1 = HTMLonlineURL1.replace("%data%", education.onlineCourses[0].url);
    $(".education-entry:last").append(formattedURL1);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[1].course);
    $(".education-entry:last").append(formattedTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[1].school);
    $(".education-entry:last").append(formattedOnlineSchool);
    var formattedURL2 = HTMLonlineURL2.replace("%data%", education.onlineCourses[1].url);
    $(".education-entry:last").append(formattedURL2);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[2].course);
    $(".education-entry:last").append(formattedTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[2].school);
    $(".education-entry:last").append(formattedOnlineSchool);
    var formattedURL3 = HTMLonlineURL3.replace("%data%", education.onlineCourses[2].url);
    $(".education-entry:last").append(formattedURL3);
};

//footer
if (bio.skills.length > 0) {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);
}
//Logs X and Y locations of user clicks on the page
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//Creats a clickable button that converts my name on the page to an "internationalized" version of itself
$("#main").append(internationalizeButton);
function inName(name) {
    nameArray = name.trim().split(" ");
    first = nameArray[0];
    last = nameArray[1];
    return (first.charAt(0).toUpperCase() + first.slice(1)) + " " + (last.toUpperCase());
};

function mapFunction() {
    $("#mapDiv").append(googleMap);
}

mapFunction()
