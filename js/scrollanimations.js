(function() {
	"use strict";
	console.log("Linked up");

	gsap.registerPlugin(ScrollTrigger);
	

	gsap.to("#menuIcon1", 1, {scrollTrigger: {
										trigger: "#section-1-trigger",
										//"restart pause reverse none"
										toggleActions:"play reset play reset"}, 
										width: "115%", ease:"power1.inOut"});

	gsap.to("#menuIcon2", 1, {scrollTrigger: {
										trigger: "#section-2-trigger",
										//"restart pause reverse none"
										toggleActions:"play reset play reset"}, 
										width: "115%", ease:"power1.inOut"});
			
	gsap.to("#menuIcon3", 1, {scrollTrigger: {
										trigger: "#section-3-trigger",
										//"restart pause reverse none"
										toggleActions:"play reset play reset"}, 
										width: "115%", ease:"power1.inOut"});

	gsap.to("#menuIcon4", 1, {scrollTrigger: {
											trigger: "#section-4-trigger",
											//"restart pause reverse none"
											toggleActions:"play reset play reset"}, 
											width: "115%", ease:"power1.inOut"});


})();