import { Colors, Images } from '@theme';

// header
const header = `
  <div class='header'>
    <div class='header-title'>
      <h1>Dying to Talk in the Bush Study</h1>
      <p>This study is for people living in rural and remote Australia. It aims to help people work out what is right for them, when thinking about if they were really sick or at the end of their life. As you would have discussed with the Royal Flying Doctor Service (RFDS) team, this doesn’t mean you are about to die.</p>
    </div>
    <div class='header-logo'><img src=${Images.dtt_blue} alt='' /></div>
  </div>
`;

// details
const details = `
  <div class='details'>
    <div class='details-name'>
      <p>Your name:</p><span></span>
    </div>
    <div class='details-date'>
      <p>Date:</p><span></span>
    </div>
  </div>
`;

function renderActivities(activities) {
	var activitiesHtml = activities
		.map(
			(activity, aID) =>
				activity.isStarted
					? `
        <div>
            <h3 class="activityTitle">Activity ${aID + 1}: ${activity.stage}</h3>
            <p class="activityPrecomment">${activity.pre_commencement_text}</p>
            <div class="questions">
                ${activity.questions
					.map((questionData, qID) => {
						const {
							question,
							question_type,
							question_choices,
							answerData,
							answerLater,
							neverAnswer
						} = questionData;
						const answerList = question_choices.split('\r\n');
						var response = '';
						if (answerData != null && answerData != '')
							switch (question_type) {
								case 'freetext':
									response = `<span>${answerData}</span>`;
									break;
								case 'choices':
									response = `<span>${answerList[answerData]}</span>`;
									break;
								case 'manychoices':
									var selectedChoices = (response = `
                                    <url>
                                        ${answerData.map((i) => `<li>${answerList[i]}</li>`).join('')}
                                    </url>
                                `);
									break;
								default:
									break;
							}

						return `
                        <div>
                            <h4 class="question">${question}</h4>
                            ${response}
                            <div>
                                ${answerLater ? 'Answer later' : neverAnswer ? 'Never answer' : ''}
                            </div>
                        </div>
                    `;
					})
					.join('')}
            </div>
        </div>
    `
					: ''
		)
		.join('');
	return activitiesHtml;
}

// bring the page together
export function getSharingHTMLFromResult(discussionStarter) {
	var html = `
        <html>
            <head>
                <style>
                  ${style}
                </style>
            </head>
            <body>
                ${header}
                ${details}
                ${renderActivities(discussionStarter.discussion_starter)}
            </body>
        </html>
    `;
	return html;
}

const style = `
  html, body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .header-title {
    margin-right: 1rem;
  }
  .header-title h1 {
    font-size: 2rem;
    color: ${Colors.Navy};
    margin-bottom: 0.125rem;
  }
  .header-title p {
    font-size: 1rem;
    color: ${Colors.Navy};
    margin-bottom: 0;
  }
  .header-logo img {
    width: 232px;
    height: 156px;
    display: block;
    margin: 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 2px ${Colors.Navy};
  }
  .details-name, .details-date {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .details-name {
    width: 50%;
  }
  .details-date {
    width: 20%;
  }
  .details-name p, .details-date p {
    margin: 0;
    color: ${Colors.Navy};
  }
  .details-name span, .details-date span {
    display: block;
    flex-grow: 1;
    border-bottom: solid 1px ${Colors.Navy};
  }
  .activityTitle {
    margin-bottom: 8px;
  }
  .activityPrecomment {
    margin-bottom: 16px;
  }
  .question {
    margin-bottom: 8px;
  }
`;
