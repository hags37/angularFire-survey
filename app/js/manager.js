var app = angular.module("myApp.managers", []);
app.factory("SurveyManager", [function () {
	
	var answerValues = {
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
			_.each(surveyAnswers, function (value, key, list) {
				if(key>=1 && key<=10) {
					people_survey_answers[key] = value;
					people_survey_score+=answerValues[value];
				} else if(key>=11 && key<=20) {
					process_survey_answers[key] = value;
					process_survey_score+=answerValues[value];
				} else if(key>=21 && key<=30) {
					technology_survey_answers[key] = value;
					technology_survey_score+=answerValues[value];
				}

			});

		}
	};

	return surveyManager;
}]);