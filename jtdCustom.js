// ==UserScript==
// @name         JTD Custom (Module)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.levelaccess.net/public/reporting/view_module.php?module_id=*
// @grant        none
// ==/UserScript==

// This requires the use of Kevin Murphy's TamperMonkey Scripts:
// http://www.nva11y.com/scripts/AMPHeaders.js
// http://www.nva11y.com/scripts/AMPAddInstance.js

const bestPractices = [
  {
    violationId: 338,
    bestPractice: "Provide a valid label for form fields",
    specificIssue:
      "Input has corresponding label element, however they are not programmatically associated",
    codeSnippet:
      "[Issue]\nThe _____ field has a corresponding LABEL element, however they are not programmatically associated with each other.\n\n[User Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users. When labels are not present or are incorrect, users of assistive technologies may not be able to complete a form.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a label with a form field, the label must have a FOR attribute with the same value as the input's ID attribute.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 338,
    bestPractice: "Provide a valid label for form fields",
    specificIssue:
      "Input has text that functions visually as a label, however they are not programmatically associated",
    codeSnippet:
      "[Issue]\nThe _____ field uses a _____ element that functions visually as a label, however their association is not rendered to assistive technology.\n\n[User Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users. When labels are not present or are incorrect, users of assistive technologies may not be able to complete a form.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a non-LABEL element to a form field, developers can add an aria-labelledby attribute to the input with the same value as the visual label's ID attribute.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 368,
    bestPractice: "Ensure text and images of text provide sufficient contrast",
    specificIssue: "Text smaller than 14pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text below 14pt in size must be bold with a contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 368,
    bestPractice: "Ensure text and images of text provide sufficient contrast",
    specificIssue: "Text between 14pt and 18pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 368,
    bestPractice: "Ensure text and images of text provide sufficient contrast",
    specificIssue: "Text larger than 18pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 369,
    bestPractice:
      "Ensure color is not the sole means of communicating information",
    specificIssue:
      "Link or other interactive element uses color as the only differentiation from surrounding text",
    codeSnippet:
      "[Issue]\nThe _____ is an interactive element that uses an insufficient difference in color as its only method of indication within its surrounding text. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[User Impact]\nWhen color is used as the sole method for identifying an interactive element among its surrounding content, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of interactive elements, however it is recommended to add additional visual indicators such as a border or underline.\n\nIf color is the sole means of indicating that an interactive element exists among its surrounding text, the color of the interactive element and its surrounding text must meet color contrast requirements.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 369,
    bestPractice:
      "Ensure color is not the sole means of communicating information",
    specificIssue:
      "The current item of a list uses color as the only differentiation from other items",
    codeSnippet:
      "[Issue]\nWithin the _____ the current _____ is only differentiated from its surrounding items by a difference in color. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[User Impact]\nWhen color is used as the sole method for identifying the current item within a list, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of the current item, however it is recommended to add additional visual indicators such as a border or underline."
  },
  {
    violationId: 387,
    bestPractice:
      "Ensure heading level matches the heading's visual importance/level",
    specificIssue: "",
    codeSnippet: "",
    issueDescription: ""
  },
  {
    violationId: 490,
    bestPractice:
      "Ensure all active elements receive keyboard focus or can be activated with the keyboard",
    specificIssue: "Anchor element does not receive keyboard focus",
    codeSnippet:
      "[Issue]\nThe _____ anchor element does not receive keyboard with the Tab key and is not operable by keyboard. When an element is interactive, the element must also be focusable via the keyboard or a shortcut provided to activate the element.\n\n[User Impact]\nEnsuring keyboard access to a site or application's controls and features allows people who cannot use a mouse or other pointing device to utilize the site or application. For example, a person with a disability that affects dexterity may find it impossible to move or hold a pointing device with enough accuracy to activate desired features. A person who cannot see the screen, therefore relying on a screen reader, may have no problems moving the pointer but will be unable to determine what is being pointed to.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that all interactive elements are accessible from the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be placed in the tab order by the browser.\n\nAnchor tags require an HREF attribute to receive keyboard focus. Developers must ensure that no scripts are causing focus to skip over this element.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 490,
    bestPractice:
      "Ensure all active elements receive keyboard focus or can be activated with the keyboard",
    specificIssue:
      "Interactive generic element does not receive keyboard focus",
    codeSnippet:
      "[Issue]\nThe _____ is a generic container that does not receive keyboard with the Tab key and is not operable by keyboard. When an element is interactive, the element must also be focusable via the keyboard or a shortcut provided to activate the element.\n\n[User Impact]\nEnsuring keyboard access to a site or application's controls and features allows people who cannot use a mouse or other pointing device to utilize the site or application. For example, a person with a disability that affects dexterity may find it impossible to move or hold a pointing device with enough accuracy to activate desired features. A person who cannot see the screen, therefore relying on a screen reader, may have no problems moving the pointer but will be unable to determine what is being pointed to.\n\n[Code Reference]\n_____",
    issueDescription:
      '[Recommendation]\nDevelopers must ensure that all interactive elements are accessible from the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be placed in the tab order by the browser and are recommended for all interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add tabindex="0" to the element and add a handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationId: 602,
    bestPractice:
      "Ensure custom controls provide proper textual name, role, and state information",
    specificIssue:
      'Anchor element is used as a button and has an implicit role of "link',
    codeSnippet:
      '[Issue]\nThe _____ is a custom control that was coded using an anchor element. Anchor elements have an implicit role of "link" and announces to assistive technology as such.\n\n[User Impact]\nUsing an anchor element as a button can be confusing for screen reader users. Anchor elements have an implicit role of "link", indicating to screen reader users that activating this element will redirect them to a new URL or otherwise change the browser context. This can be disorienting when the element does not behave as expected.\n\n[Code Reference]\n_____',
    issueDescription:
      '[Recommendation]\nDevelopers must ensure that all custom controls provide an accurate textual role for assistive technology. Using the BUTTON element for button-like controls will automatically have an implicit role of "button" and is generally recommended.\n\nTo ensure that anchor elements are announced to screen readers as buttons, developers must add the attribute role="button" to the anchor element.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationId: 602,
    bestPractice:
      "Ensure custom controls provide proper textual name, role, and state information",
    specificIssue:
      "Custom control that expands content does not indicate the fact",
    codeSnippet:
      "[Issue]\nThe _____ is a custom control that expands content but does not properly indicate this information to assistive technology.\n\n[User Impact]\nWithout any indication of a custom control's expanded state, screen reader users will not be made aware that the element is intended to expand or collapse content upon activation, nor will they be made aware whether or not the content is currently in its expanded state.\n\n[Code Reference]\n_____",
    issueDescription:
      '[Recommendation]\nDevelopers must ensure that custom controls which expand and collapse content upon activation provide the proper state information to describe its current expanded status. Developers should add an aria-expanded attribute to the element and dynamically toggle the value between "true" and "false", depending on its current state.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationId: 609,
    bestPractice:
      "Ensure form field constraints and errors are associated with their corresponding field",
    specificIssue:
      "Error messages are displayed visually, however they are not programmatically associated with their corresponding inputs",
    codeSnippet:
      "[Issue]\nThe _____ form field has an error message that appears after an invalid submission, however the error message and form field's association is not properly indicated to assistive technology.\n\n[User Impact]\nWhen an error is not programmatically associated with a form field, users of assistive technology may not understand the relationship of the error to the field and may make the form unusable.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that errors are programmatically associated with their form field. Developers can add an aria-describedby attribute to the form field, with a value that matches the ID attribute of the error message.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 1249,
    bestPractice: "Ensure keyboard focus is indicated visually",
    specificIssue:
      "Interactive element does not visually indicate upon receiving focus",
    codeSnippet:
      "[Issue]\nThe _____ receives keyboard focus with the Tab key, however there is no visual indication of this. A well-defined (highly visible) visual indication of keyboard focus needs to be provided for each active element.\n\n[User Impact]\nProviding a visual indication of the focus is particularly necessary for keyboard-only users who do not use the mouse and cannot simply click to place focus where they think it should be. The user must rely on the visual indication of focus to determine where an action will occur or determine what keystrokes to perform to move focus to the desired field.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that keyboard focus is displayed visually to all interactive elements. Typically the browser will provide keyboard focus for all standard interactive HTML elements, however developers can use custom visual indicators such as outlines or underlines using the focus pseudo-class.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 1626,
    bestPractice: "Ensure ARIA roles, states, and properties are valid",
    specificIssue:
      "Element contains an aria reference attribute with an invalid ID",
    codeSnippet: "",
    issueDescription: ""
  },
  {
    violationId: 2440,
    bestPractice: "Avoid use of placeholder values to label or explain input",
    specificIssue: "Form field uses a placeholder as its only label",
    codeSnippet:
      "[Issue]\nThe _____ is a form field that uses a placeholder attribute as its only label. The placeholder text should be a short hint intended to aid the user with data entry.\n\n[User Impact]\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible name.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that the placeholder attribute is not a replacement for a label. It is recommended that developers use a programmatically associated LABEL element, using the FOR attribute with a value that matches the ID of its corresponding input. If the placeholder attribute is also used, it is advised that the placeholder text should not be identical or redundant to the label text.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 2440,
    bestPractice: "Avoid use of placeholder values to label or explain input",
    specificIssue: "Form field uses placeholder text for a description.",
    codeSnippet:
      "[Issue]\nThe _____ is a form field that uses a placeholder attribute as a description. The placeholding text should be a short hint intended to aid the user with data entry.\n\n[User Impact]\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible description.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that the placeholder attribute does not contain a description. To include a description, it is recommended that developers either include a short description in the label element or include the description text in its own element. Descriptions must be programmatically associated with their inputs. This is done by adding an aria-describedby attribute to the input, with a value that matches the ID attribute of its corresponding description.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 2445,
    bestPractice: "Ensure link text provides sufficient contrast",
    specificIssue: "Link text smaller than 14pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text below 14pt in size must be bold with a contrast ratio of 4.5:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 2445,
    bestPractice: "Ensure link text provides sufficient contrast",
    specificIssue: "Link text between 14pt and 18pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 2445,
    bestPractice: "Ensure link text provides sufficient contrast",
    specificIssue: "Link text larger than 18pt has insufficient contrast",
    codeSnippet:
      "[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text above 18pt in size must have a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/"
  },
  {
    violationId: 2607,
    bestPractice: "Provide text equivalents for icon fonts",
    specificIssue:
      "Anchor or BUTTON element uses an icon as its visual label, however it has no textual label",
    codeSnippet:
      "[Issue]\nThe _____ is an interactive element that uses an icon as its visual label. There is no textual equivalent provided to label this element.\n\n[User Impact]\nScreen reader users will not have access to the information conveyed by the icon without text equivalents. When icon fonts are used, the icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Screen reader users may not know how to interact with this element.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must address the accessibility of the font icon for all users with disabilities. When an icon font is used to visually label an interactive element, developers should add a title attribute to the interactive element to provide a textual name to assistive technology.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 2607,
    bestPractice: "Provide text equivalents for icon fonts",
    specificIssue:
      "Error messages uses an icon as its only method of indication",
    codeSnippet:
      "[Issue]\nAfter triggering an error with the _____, the resulting error message is only indicated to users with an icon.\n\n[User Impact]\nThe icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Because this icon is the only indication of the error message, it is considered informative.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that text equivalents are provided for informative icon fonts. Errors must be explicitly indicated. This can be done by appending off-screen text to the beginning of the error message to communicate this information to screen-reader users.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationId: 3159,
    bestPractice:
      "Ensure all interactive functionality is operable with the keyboard",
    specificIssue:
      "Interactive generic element receives focus but cannot be activated with the keyboard",
    codeSnippet:
      "[Issue]\nThe _____ receives keyboard focus with the Tab key, however it does not function as expected upon activation.\n\n[User Impact]\nWhen interactive elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Reference]\n_____",
    issueDescription:
      "[Recommendation]\nDevelopers must ensure that all interactive elements can be operated with the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be operable by keyboard, and are generally recommended when creating interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add an additional handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Compliant Code Example]\n_____"
  }
];

const init = () => {
  if (!document.getElementById("1_violation_id")) {
    setTimeout(init, 50);
  } else {
    (function() {
      "use strict";

      const selectList = document.getElementById("1_violation_id");
      const specificListContainer = document.createElement("div");
      const codeSnippetField = document.getElementById("1_element");
      const issueDescriptionField = document.getElementById("1_attribute");
      specificListContainer.id = "specificListContainer";
      specificListContainer.style.width = "100%";
      selectList.parentNode.appendChild(specificListContainer);
      const event = new Event("change");

      const getSpecifics = violationId => {
        const filteredSpecifics = bestPractices.filter(bestPractice => {
          return bestPractice.violationId === violationId;
        });
        return filteredSpecifics;
      };

      const fillInputs = e => {
        e.preventDefault();
        const specificList = document.getElementById("specificList");
        const chosenBestPractice = bestPractices.find(bestPractice => {
          return bestPractice.specificIssue === specificList.value;
        });
        codeSnippetField.value = chosenBestPractice.codeSnippet;
        issueDescriptionField.value = chosenBestPractice.issueDescription;
      };

      const renderSpecificList = specifics => {
        specificListContainer.innerHTML = "";
        let specificList;
        if (specifics.length) {
          specificList = document.createElement("select");
          specificList.addEventListener("click", fillInputs);
          specificList.style.width = "100%";
          specificList.id = "specificList";
          specifics.forEach(specific => {
            const specificItem = document.createElement("option");
            specificItem.textContent = specific.specificIssue;
            specificList.appendChild(specificItem);
          });
        }
        if (specificList) {
          specificListContainer.appendChild(specificList);
          const fillButton = document.createElement("button");
          fillButton.textContent = "Autofill";
          fillButton.classList.add("kpmFirstButton");
          fillButton.style.display = "block";
          fillButton.addEventListener("click", fillInputs);
          specificListContainer.appendChild(fillButton);
        }
      };

      selectList.addEventListener("change", e => {
        const specifics = getSpecifics(Number(e.target.value));
        renderSpecificList(specifics);
      });

      document.getElementById("ChgBPNow").addEventListener("click", () => {
        setTimeout(() => {
          selectList.dispatchEvent(event);
        }, 0);
      });
    })();
  }
};

init();
