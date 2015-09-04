var bio = {

	"name" : "Monica Silva",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "619-214-7655",
		"email" : "silva.castro.mony@gmail.com",
		"github": "monsyc91",
		"location": "San Diego, CA",
	},
	"welcomeMessage" : "Welcome! Bienvenido! In just one paper you are going to know what I am, what I do, and what I've been doing.",
	"skills": ["Creative", "Ability to work under pressure", "Responsible", "Good solving problems"],
	"bioPic": "images/fry.jpg",

}

var	education = {
	"schools": [
		{
			"name": "Tecnologico de Monterrey",
			"city": "Monterrey",
			"degree": "BA",
			"dates": "2009 - 2014 ",
			"major": ["Industrial Design"],
			"location": "Monterrey, NL"
		},
		{
			"name": "The Art Institute",
			"city": "San Diego",
			"degree": "Diploma",
			"dates": "2015 - 2016 ",
			"major": ["Web Design and Interactive Communications"],
			"location": "San Diego, CA"
		}
	],
	"onlineCourses": [
	{
		"title": "Web developer",
		"school": "Udacity",
		"dates": 2015,
		"url": "wwww.udacity.com"
	}
	]
}

var work = {
	"jobs": [
		{
			"employer": "GeneraStudio",
			"title": "Rendering and 3d modeler",
			"dates": "April-December 2013",
			"description": "skjdfnksdnfksndfksndf",
			"location": "Monterey, MEX"
		},
		{
			"employer": "Local 10 arquitectura",
			"title": "Industrial Designer",
			"dates": "July 2014-June 2015",
			"description": "skjdfnksdnfksndfksndf",
			"location": "Monterey, MEX"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Showroom Porcelanite, Guadalajara, MEX",
			"dates": "2015",
			"description": "Porclanite tiles, wanted to change the design of all the showrooms they have in Mexico, I was in charge of the design process, the final concept consists in give a fresh and modern look.",
			"images": [
				"images/manzana.jpg",
				"images/manzana.jpg"
			]
		}
	]
}


var formattedbioName = HTMLheaderName.replace("%data%", bio.name);
var formattedbioRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedbioName + formattedbioRole);

var formattedbioMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedbioMobile);

var formattedbioEmail= HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedbioEmail);

var formattedbioGithub= HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedbioGithub);

var formattedbioLocation= HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedbioLocation);

var formattedbioWelcomeMessage= HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedbioWelcomeMessage);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);


if ((bio.skills).length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
	$("#skills").append(formattedSkill);
}


education.display = function() {
    for (i in education.schools ){
  		$("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);

  }
}

education.display();



	var formattedOCourses = HTMLonlineClasses.replace("%data%", education.onlineCourses);
	$("#education"). append (formattedOCourses);

  education.display = function() {
    for (i in education.onlineCourses ){
  		$("#education").append(HTMLschoolStart);	

    var formattedOCTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedOCSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedOCDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var formattedOCUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
 	$(".education-entry:last").append(formattedOCTitle);
    $(".education-entry:last").append(formattedOCSchool);
    $(".education-entry:last").append(formattedOCDates);
    $(".education-entry:last").append(formattedOCUrl);

    }
}

education.display();
    
function displayWork() {
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);
	  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  $(".work-entry:last").append(formattedEmployerTitle);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  $(".work-entry:last").append(formattedDates);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedDescription);
	  
	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  $(".work-entry:last").prepend(formattedLocation);
	}
}
displayWork();


projects.display = function () {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
 
 projects.display();

 $(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks (x,y);
});

 $("#mapDiv").append(googleMap);

var formattedbioMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#footerContacts").append(formattedbioMobile);

var formattedbioEmail= HTMLemail.replace("%data%",bio.contacts.email);
$("#footerContacts").append(formattedbioEmail);

var formattedbioGithub= HTMLgithub.replace("%data%",bio.contacts.github);
$("#footerContacts").append(formattedbioGithub);

var formattedbioLocation= HTMLlocation.replace("%data%",bio.contacts.location);
$("#footerContacts").append(formattedbioLocation);


// https://www.udacity.com/course/intro-to-jquery--ud245
// bio.display = function() {
// 	for (b in bio) {
// 		$("#header").append(HTMLheaderName);

// 	var formattedName = HTMLheaderName.replace("%data%", bio[b].name);
// 	var formattedRole = HTMLheaderRole.replace("%data%", bio[b].role);

// 	$(".bio-entry:last").append(formattedName);
// 	$(".bio-entry:last").append(formattedRo)
// 	}
// }



