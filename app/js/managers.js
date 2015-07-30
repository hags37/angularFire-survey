var app = angular.module("myApp.managers", []);
app.factory("SurveyManager", [function () {
	
	var peopleValues = {
		"Strongly agree": 1,
		"Somewhat agree": 0.75,
		"Somewhat disagree": 0.25,
		"Strongly disagree": 0
	};

	var techValues = {
		"Yes": 1,
		"Maybe": 0.5,
		"No": 0
	};

	var surveyManager = {
		people_survey_answers: {},
		people_survey_score: 0,
		process_survey_answers: {},
		process_survey_score: 0,
		technology_survey_answers: {},
		technology_survey_score: 0,
		getSurveyResults: function (surveyAnswers) {
			var manager = this;
			_.each(surveyAnswers, function (value, key, list) {
				if(key>=1 && key<=10) {
					manager.people_survey_answers[key] = value;
					console.log(value);
					console.log(peopleValues[value]);
					manager.people_survey_score+=peopleValues[value];
				} else if(key>=13 && key<=20) {
					manager.process_survey_answers[key] = value;
					manager.process_survey_score+=techValues[value];
				} else if(key>=21 && key<=30) {
					manager.technology_survey_answers[key] = value;
					manager.technology_survey_score+=techValues[value];
				}

			});

		}
	};

	return surveyManager;
}]);