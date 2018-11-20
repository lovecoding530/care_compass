/**
 * @providesModule @helppdf
 */

import React, { Component } from 'react';
import { Share } from 'react-native';
import { Colors, Images } from '@theme';
import RNHTMLtoPDF from "react-native-html-to-pdf";

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
  .header-description p {
    font-size: 0.875rem;
    color: ${Colors.Navy};
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
  .header-logo img {
    width: 120px;
    height: 90px;
    display: block;
    margin: 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
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
    color: ${Colors.red};
    margin-bottom: 8px;
  }
  .activityPrecomment {
    margin-bottom: 16px;
  }
  .question {
    color: ${Colors.Navy};
    margin-bottom: 8px;
  }
  .cardGameTitle {
    margin-bottom: 8px;
    color: ${Colors.Red};
  }
  .cardGameDescription {
    margin-bottom: 16px;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem;
    padding-top: 1rem;
    border-top: solid 1px ${Colors.Navy};
  }
  .footer .logo-rfds img {
    margin-right: 2rem;
  }
  .disclaimer {
    display: block;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: solid 1px ${Colors.Navy};
  }
  .disclaimer p {
    font-size: 0.875rem;
    font-style: italic;
    margin-bottom: 0;
  }
`;

// bring the page together
export function getSharingHTML(title, body, faqs = []) {
    const header = `
        <div class='header'>
            <div class='header-title'>
            <h1>${title}</h1>
            </div>
            <div class='header-logo'><img src=${Images.base64_dtt_logo} alt='' /></div>
        </div>
    `;
    
    const footer = `
        <div class='footer'>
            <div class='logo-pca'>
            <img src=${Images.base64_pca_logo} alt='' width='225' height='85' />
            </div>
        </div>
    `;

    const faqsHtml = faqs.map(faq=>`
        <div class='faq'>
            <h3 class="faq-question">Activity ${faq.question}</h3>
            <p class="faq-answer">${faq.answer}</p>             
        </div>
    `)

	var html = `
        <html>
            <head>
                <style>
                  ${style}
                </style>
            </head>
            <body>
                ${header}
                ${body}
                ${faqsHtml}
                ${footer}
            </body>
        </html>
    `;
	return html;
}

// bring the page together
export async function exportHelpPdf(title, body, faqs) {

    var html = getSharingHTML(title, body, faqs);
    let options = {
        html: html,
        fileName: 'results',
        directory: 'docs'
    };
    let file = await RNHTMLtoPDF.convert(options);

    try {
        let res = await Share.share({
            title: 'Care Compass',
            message: 'Care Compass',
            url: file.filePath,
        });
        if (res.action == 'sharedAction') {
        }
    } catch (error) {
        console.log('An error happened');
    }
}
