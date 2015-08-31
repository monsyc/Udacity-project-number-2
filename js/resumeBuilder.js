var bio = {
	"name" : "Monica Silva",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "6192147655",
		"email" : "silva.castro.mony@gmail.com",
		"github": "monsyc91"
		"location": "San Diego"
	},
	"welcomeMessage" : "Bienvenidos",
	"skills": ["responsible, designer, happy, social"],
	"bioPic": "images/fry.jpg"
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
			"title": "whirlpool"
			"dates": "2014"
			"description": "lskjflsdjfglkjdsflg"
		}
	]
}


if(bio.skills).length > 0{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
	%("#skills").append(formattedSkill);
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace
  ("%data", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

education.display = function() {
    for (i in education.schools){
  $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].city);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].degree);
    
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);

  }
}

education.display();

