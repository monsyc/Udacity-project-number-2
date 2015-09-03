var bio = {

	"name" : "Monica Silva",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "6192147655",
		"email" : "silva.castro.mony@gmail.com",
		"github": "monsyc91",
		"location": "San Diego",
	},
	"welcomeMessage" : "Bienvenidos",
	"skills": ["responsible", "designer", "happy", "social"],
	"bioPic": "images/fry.jpg",

}

var	education = {
	"schools": [
		{
			"name": "Tecnologico de Monterrey",
			"city": "Monterrey",
			"degree": "BA",
			"major": ["Industrial Design"]
		},
		{
			"name": "The Art Institute",
			"city": "San Diego",
			"degree": "Diploma",
			"major": ["Web Design and Interactive Communications"]
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
			"description": "skjdfnksdnfksndfksndf"	
		},
		{
			"employer": "Local 10 arquitectura",
			"title": "Industrial Designer",
			"dates": "July 2014-June 2015",
			"description": "skjdfnksdnfksndfksndf"	
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "whirlpool",
			"dates": "2014",
			"description": "lskjflsdjfglkjdsflg",
			"images": [
				"images/manzana.jpg",
				"images/manzana.jpg"
			]
		}
	]
}



var formattedbioName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedbioName);

var formattedbioRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedbioRole);




var formattedbioMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#header").append(formattedbioMobile);

var formattedbioEmail= HTMLemail.replace("%data%",bio.contacts.email);
$("#header").append(formattedbioEmail);

var formattedbioGithub= HTMLgithub.replace("%data%",bio.contacts.github);
$("#header").append(formattedbioGithub);

var formattedbioLocation= HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append(formattedbioLocation);

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
    for (i in education.schools){
  		$("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].degree);
    
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);

  }
}



education.display();

function displayWork() {
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);
	  var formattedEmployer = HTMLworkEmployer.replace("%data", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  var formattedEmployerTitle = formattedEmployer + formattedTitle;
	  $(".work-entry:last").append(formattedEmployerTitle);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  $(".work-entry:last").append(formattedDates);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedDescription);

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



