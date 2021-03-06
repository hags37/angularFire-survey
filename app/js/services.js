"use strict";

/**
 * Services module which defines app version and FBURL.
 * @module myApp/services
 */
var app = angular.module("myApp.services", ["ngRoute", "firebase"]);

// define app version
app.value("version", "1.0.0");

// re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth", "FBURL",
  function($firebaseAuth, FBURL) {
      
    var ref = new Firebase(FBURL);
    return $firebaseAuth(ref);
    
  }
]);


app.factory("SurveyData", [function () {
	var SurveyData = {
		"peopleData": [
			{
				"questionNo": 1,
				"question": '"Important strategic and operational decisions are quickly translated into action"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}, 
			{
				"questionNo": 2,
				"question": '"We are disciplined in focusing our efforts on where we can win"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			},  
			{
				"questionNo": 3,
				"question": '"Once made, decisions are rarely second-guessed"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}, 
			{
				"questionNo": 4,
				"question": '"We have a distinctive culture that gives us a competitive advantage"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}, 
			{
				"questionNo": 5,
				"question": '"People here are rewarded more based on..."',
				"options": ["Performance of the specific unit", "Company performance"]
			}, 
			{
				"questionNo": 6,
				"question": '"People who innovate get rewarded here"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}, 
			{
				"questionNo": 7,
				"question": '"Information flows freely across organizational boundaries"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}, 
			{
				"questionNo": 8,
				"question": '"When big things change in our environment, we adapt successfully"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			},  
			{
				"questionNo": 9,
				"question": '"Leaders here are more..."',
				"options": ["Focused on immediate objectives", "Playing for the long term"]
			}, 
			{
				"questionNo": 10,
				"question": '"The organization is generally more..."',
				"options": ["People oriented", "Task oriented"]
			}, 
			{
				"questionNo": 11,
				"question": '"Our organization’s structure has..."',
				"options": ["About the right number of layers", "Too many layers and too much complexity"]
			}, 
			{
				"questionNo": 12,
				"question": '"People in our organization collaborate effectively across organizational lines"',
				"options": ["Strongly disagree", "Somewhat agree", "Somewhat agree", "Strongly agree"]
			}
		],

		"processData": [
			{
				"questionNo": 13,
				"question": "Are teams you work with open to change the way they interact with your team?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 14,
				"question": "Are stakeholders enabled to take calculated risks in order to achieve new and improved outcomes?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 15,
				"question": "Is there alignment to the overall business objectives, instead of departmental goals?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 16,
				"question": "Are you getting your stakeholders involved at the very beginning of software application design?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 17,
				"question": "Is software code always working because it is frequently merged and tested?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 18,
				"question": "Do you monitor developer activities in production?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 19,
				"question": "Can you easily roll back to a last known good state?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 20,
				"question": "Are changes in production traceable to change orders or original business requirements?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 21,
				"question": "Is your deployment-to-production pipeline automated?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 22,
				"question": "Are you measuring post go-live metrics consistently across groups? ",
				"options": ["No", "Maybe", "Yes"]
			}
		],
		"technologyData": [
			{
				"questionNo": 23,
				"question": "Is there an agreement between business, development and operations on critical services (transaction counts, performance, uptime etc) that are necessary to meet pre-defined business goals?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 24,
				"question": "Can development and testing teams easily create virtual services and environments to handle dependencies and constraints or replicate/reproduce conditions that cause application issues?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 25,
				"question": "Do your development teams use automated testing across the software development lifecycle?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 26,
				"question": "Does your organizational structure support cross-functional teams that put more emphasis on the tasks associated with releasing new capabilities rather than individual roles?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 27,
				"question": "Are your teams able to provide self-service, on-demand provisioning and management of cloud environments and infrastructure resources?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 28,
				"question": "Have you consolidated the number of tools required to monitor network, systems, databases etc. to reduce complexity and speed time to problem resolution?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 29,
				"question": "Do your teams have a unified view of application performance that enables them to quickly pinpoint and triage problems?",
				"options": ["No", "Maybe", "Yes"]
			},
			{
				"questionNo": 30,
				"question": "Do you automate the feedback of critical performance information across stages of the application lifecycle so as to further optimize applications and services?",
				"options": ["No", "Maybe", "Yes"]
			}
		]
	}

	return SurveyData;
}]);