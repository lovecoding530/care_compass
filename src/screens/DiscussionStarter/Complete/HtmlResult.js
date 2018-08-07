function renderActivities(activities){
    var activitiesHtml = activities.map((activity, aID) => activity.isStarted ? `
        <div>
            <h3 class="activityTitle">Activity ${aID + 1}: ${activity.stage}</h3>
            <p class="activityPrecomment">${activity.pre_commencement_text}</p>
            <div class="questions">
                ${activity.questions.map((questionData, qID) => {
                    const {question, question_type, question_choices, answerData, answerLater, neverAnswer} = questionData;
                    const answerList = question_choices.split("\r\n")
                    var response = ""
                    if (answerData != null)
                        switch (question_type) {
                            case "freetext":
                                response = `<span>${answerData}</span>`
                                break;
                            case "choices":
                                response = `<span>${answerList[answerData]}</span>`
                                break;
                            case "manychoices":
                                var selectedChoices = 
                                response = `
                                    <url>
                                        ${answerData.map(i => `<li>${answerList[i]}</li>`).join('')}
                                    </url>
                                `
                                break;
                            default:
                                break;
                        }

                    return `
                        <div>
                            <h4 class="question">Q${qID + 1}: ${question}</h4>
                            ${response}
                            <div>
                                ${answerLater ? "Answer later" : neverAnswer ? "Never answer" : ""}
                            </div>
                        </div>
                    `}).join('')}
            </div>
        </div>
    ` : '').join('')
    return activitiesHtml
}

export function getSharingHTMLFromResult(discussionStarter) {
    var html = `
        <html>
            <head>
                <style>
                    .activityTitle {
                        margin-bottom: 8px;
                    }
                    .activityPrecomment {
                        margin-bottom: 16px;
                    }
                    .question {
                        margin-bottom: 8px;
                    }
                </style>
            </head>
            <body>
                ${renderActivities(discussionStarter.discussion_starter)}
            </body>
        </html>
    `
    return html
}