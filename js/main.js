(function() {
	"use strict";
	console.log("Linked up");

	gsap.registerPlugin(ScrollTrigger);

	gsap.to("#menuIcon1", 1, {scrollTrigger: {
										trigger: "#section1",
										//"restart pause reverse none"
										toggleActions:"restart pause reverse pause"}, 
										width: "120%", ease:"power1.easeOut"});

	gsap.to("#menuIcon2", 1, {scrollTrigger: {
										trigger: "#section2",
										//"restart pause reverse none"
										toggleActions:"restart pause reverse pause"}, 
										width: "120%", ease:"power1.easeOut"});
			
	gsap.to("#menuIcon3", 1, {scrollTrigger: {
										trigger: "#section3",
										//"restart pause reverse none"
										toggleActions:"restart pause reverse pause"}, 
										width: "120%", ease:"power1.easeOut"});

	gsap.to("#menuIcon4", 1, {scrollTrigger: {
											trigger: "#section4",
											//"restart pause reverse none"
											toggleActions:"restart pause reverse pause"}, 
											width: "120%", ease:"power1.easeOut"});

	gsap.to("#menuIcon5", 1, {scrollTrigger: {
											trigger: "#section5",
											//"restart pause reverse none"
											toggleActions:"restart pause reverse pause"}, 
											width: "120%", ease:easeOut});

})();