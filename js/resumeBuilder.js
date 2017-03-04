var bio = {
    name: "Alex Tong",
    role: "Software Development Engineer",
    contacts: {
        mobile: "206-792-6166",
        email: "alextong0628@gmail.com",
        github: "SoulxReaver",
        twitter: "@SoulxReaver",
        location: "Burien, Washington"
    },
    welcomeMessage: "My Online Resume",
    skills: ["skill1", "skill2", "skill3", "skill4", "skill5"],
    biopic: "images/fry.jpg",
    display: function () {
        $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role))
            .prepend(HTMLheaderName.replace('%data%', bio.name));

        setContactsOnHeaderAndFooter("#topContacts");
        setContactsOnHeaderAndFooter("#footerContacts");

        $("#header").append(HTMLbioPic.replace('%data%', bio.biopic))
            .append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage))
            .append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace('%data%', skill));
        });
    }
};

function setContactsOnHeaderAndFooter(elementId) {
    $(elementId).append(HTMLmobile.replace('%data%', bio.contacts.mobile))
        .append(HTMLemail.replace('%data%', bio.contacts.email))
        .append(HTMLgithub.replace('%data%', bio.contacts.github))
        .append(HTMLtwitter.replace('%data%', bio.contacts.twitter))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));
}

var education = {
    schools: [{
        name: "University of Washington",
        location: "Seattle, WA",
        degree: "Bachelor of Science",
        majors: ["Applied Computational and Mathematical Science (ACMS)"],
        dates: "12-2011",
        url: "https://www.washington.edu"
    }],
    onlineCourses: [{
        title: "Front-End Web Developer Nanodegree",
        school: "Udacity",
        dates: "1-18-2017",
        url: "https://www.udacity.com"
    }],
    display: function () {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function (school) {
            $(".education-entry").append(HTMLschoolName.replace('%data%', school.name))
                .append(HTMLschoolDegree.replace('%data%', school.degree))
                .append(HTMLschoolDates.replace('%data%', school.dates))
                .append(HTMLschoolLocation.replace('%data%', school.location));
            school.majors.forEach(function (major) {
                $(".education-entry").append(HTMLschoolMajor.replace('%data%', major));
            });
        });

        $("#education").append(HTMLonlineClasses)
            .append(HTMLschoolStart);
        education.onlineCourses.forEach(function (onlineCourse) {
            $(".education-entry:last").append(HTMLonlineTitle.replace('%data%', onlineCourse.title))
                .append(HTMLonlineSchool.replace('%data%', onlineCourse.school))
                .append(HTMLonlineDates.replace('%data%', onlineCourse.dates))
                .append(HTMLonlineURL.replace('%data%', onlineCourse.url));
        });

    }
};

var work = {
    jobs: [{
        employer: "Apex Learning",
        title: "Software Engineer",
        location: "Seattle, WA",
        dates: "Current",
        description: "Cloud Migration"
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function (job) {
            $(".work-entry").append(HTMLworkEmployer.replace('%data%', job.employer))
                .append(HTMLworkTitle.replace('%data%', job.title))
                .append(HTMLworkDates.replace('%data%', job.dates))
                .append(HTMLworkLocation.replace('%data%', job.location))
                .append(HTMLworkDescription.replace('%data%', job.description));
        });
    }
};

var projects = {
    projects: [{
        title: "Project1",
        dates: "2015",
        description: "Work work Work",
        images: ["images/project1.jpg"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function (project) {
            $(".project-entry").append(HTMLprojectTitle.replace('%data%', project.title))
                .append(HTMLprojectDates.replace('%data%', project.dates))
                .append(HTMLprojectDescription.replace('%data%', project.description));
            project.images.forEach(function (image) {
                $(".project-entry").append(HTMLprojectImage.replace('%data%', image));
            });
        });
    }
};

var maps = {
    display: function () {
        $('#mapDiv').append(googleMap);
    }
};

bio.display();
work.display();
projects.display();
education.display();
maps.display();