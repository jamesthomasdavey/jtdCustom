// ==UserScript==
// @name         JTD Custom
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  to make my life easier
// @author       You
// @match        *.levelaccess.net/public/reporting/view_module.php?module_id=*
// @match        *.levelaccess.net/public/reporting/view_pattern.php?pattern_id=*
// @grant        none
// ==/UserScript==

// This requires the use of Kevin Murphy's TamperMonkey Scripts:
// http://www.nva11y.com/scripts/AMPHeaders.js
// http://www.nva11y.com/scripts/AMPAddInstance.js

'use strict';

const bestPractices = [
  {
    violationid: 338,
    media: 'Web',
    bestpractice: 'Provide a valid label for form fields',
    specificissue: 'Input has corresponding label element, however they are not programmatically associated',
    codesnippet:
      '[Issue]\nThe _____ field has a corresponding <label> element, however they are not programmatically associated with each other.\n\n[User Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users. When labels are not present or are incorrect, users of assistive technologies may not be able to complete a form.\n\n[Code Reference]\n_____',
    issuedescription:
      "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a <label> element with a form field, the <label> must have a FOR attribute with the same value as the input's ID attribute.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationid: 338,
    media: 'Web',
    bestpractice: 'Provide a valid label for form fields',
    specificissue: 'Input has text that functions visually as a label, however they are not programmatically associated',
    codesnippet:
      '[Issue]\nThe _____ field uses a _____ element that functions visually as a label, however their association is not rendered to assistive technology.\n\n[User Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users. When labels are not present or are incorrect, users of assistive technologies may not be able to complete a form.\n\n[Code Reference]\n_____',
    issuedescription:
      "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a non-LABEL element to a form field, developers can add an aria-labelledby attribute to the input with the same value as the visual label's ID attribute.\n\n[Compliant Code Example]\n_____"
  },
  {
    violationid: 345,
    media: 'Web',
    bestpractice: 'Provide a mechanism for skipping past repetitive content',
    specificissue: 'There is no skip link to circumvent navigation'
  },
  {
    violationid: 361,
    media: 'Web',
    bestpractice: 'Ensure headers and cells are properly associated',
    specificissue: 'Table has <th> elements spanning multiple columns without scope="colgroup"',
    codesnippet:
      '[Issue]\nThe _____ table contains <th> elements which span multiple columns, however this is not indicated properly with the correct scope attribute.\n\n[User Impact]\nWhen tables do not programmatically indicate groupings of rows or columns, the additional layer of complexity in the table is only indicated visually, which can be confusing for users of assistive technology.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\r\nWhen <th> element span multiple columns, developers must add an attribute of scope="colgroup" to indicate this grouping to assistive technology.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    specificissue: 'Informative image has no alternative text'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    specificissue: 'Decorative images have no alt text and are revealed to assistive technology',
    codesnippet:
      '[Issue]\nThe _____ is a decorative image that is rendered by assistive technology. In instances where the image does not contribute to the understanding of the content and is purely decorative, it needs to be marked in a way to indicate its purely decorative purpose.\n\n[User Impact]\nWhen a decorative image is rendered by assistive technology, users will encounter the image and will not be made aware that the image is intended to be decorative.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that decorative images are hidden from assistive technology. This is usually done by adding an attribute of alt="" to the image element.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    specificissue: 'Text smaller than 14pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text below 14pt in size must be bold with a contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    specificissue: 'Text between 14pt and 18pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    specificissue: 'Text larger than 18pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    specificissue: 'Link or other interactive element uses color as the only differentiation from surrounding text',
    codesnippet:
      '[Issue]\nThe _____ is an interactive element that uses an insufficient difference in color as its only method of indication within its surrounding text. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[User Impact]\nWhen color is used as the sole method for identifying an interactive element among its surrounding content, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of interactive elements, however it is recommended to add additional visual indicators such as a border or underline.\n\nIf color is the sole means of indicating that an interactive element exists among its surrounding text, the color of the interactive element and its surrounding text must meet color contrast requirements.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    specificissue: 'The current item of a list uses color as the only differentiation from other items',
    codesnippet:
      '[Issue]\nWithin the _____ the current _____ is only differentiated from its surrounding items by a difference in color. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[User Impact]\nWhen color is used as the sole method for identifying the current item within a list, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of the current item, however it is recommended to add additional visual indicators such as a border or underline.'
  },
  {
    violationid: 370,
    media: 'Web',
    bestpractice: 'Ensure images provide informative alternative text',
    specificissue: 'Image of text does not have an accessible equivalent of that text',
    codesnippet:
      '[Issue]\nThe _____ image contains text with content that is not conveyed elsewhere on the page. Images of text should have alternative text that contains the same content.\n\n[User Impact]\nWhen images of text do not contain accessible equivalents of that text, screen reader users will miss content that has been provided visually. All informative content that is provided visually must also be accessible to assistive technology.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that if there are any images of text, that textual content must be made accessible. This is either done with redundant information outside of the image element (in which case the image can be considered decorative), or by adding an alt attribute to the image containing the same textual information.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 372,
    media: 'Web',
    bestpractice: 'Ensure alternative text for image links is informative',
    specificissue: 'Image link has alternative text that does not describe the destination',
    codesnippet:
      "[Issue]\nThe _____ image is used as a link and contains alternative text that does not properly describe the expected destination.\n\n[User Impact]\nWhen an image is used as a link, assistive technology may use the image's alternative text as the link's accessible name value. When the image's alternative text does not describe the destination as if it were link text itself, its destination may not be apparent to screen reader users.\n\n[Code Reference]\n_____",
    issuedescription:
      '[Recommendation]\nDevelopers should ensure descriptions are precise and meaningful. The alt description should effectively describe the target of the link. Developers should also avoid using vague attributes such as alt="Follow this link...".\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 387,
    media: 'Web',
    bestpractice: "Ensure heading level matches the heading's visual importance/level"
  },
  {
    violationid: 524,
    media: 'Web',
    bestpractice: 'Avoid placing inactive elements in the focus order',
    specificissue: 'Inactive items receive keyboard focus (not including <button> or <a> elements)',
    codesnippet:
      '[Issue]\nSome inactive elements receive Tab keyboard focus, despite not featuring any interactive functionality. This can be seen _____.\n\n[User Impact]\nProviding focus to non-active elements may give users of assistive technology the impression that the element is interactive and cause keyboard users to have to use extra keystrokes to navigate.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that generally only interactive elements receive Tab keyboard focus. Elements that are inactive by default and are not intended to be active should not have a tabindex attribute. There should also be no scripts that direct keyboard focus to these elements.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 524,
    media: 'Web',
    bestpractice: 'Avoid placing inactive elements in the focus order',
    specificissue: 'Inactive links or buttons receive keyboard focus',
    codesnippet:
      '[Issue]\nSome inactive elements receive Tab keyboard focus, despite not featuring any interactive functionality. This can be seen _____.\n\n[User Impact]\nProviding focus to non-active elements may give users of assistive technology the impression that the element is interactive and cause keyboard users to have to use extra keystrokes to navigate.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that generally only interactive elements receive Tab keyboard focus. For interactive elements that are in the focus order but rendered inactive, tabindex="-1" can be used to remove them from the focus order. There should also be no scripts that direct keyboard focus to these elements.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 457,
    media: 'Web',
    bestpractice: 'Avoid the use of implicit headings',
    specificissue: 'Heading is displayed visually but does not have heading markup',
    codesnippet:
      '[Issue]\nThe _____ text is utilized visually as a heading, however it does not have the correct heading markup.\n\n[User Impact]\nSince some users skim through a document by navigating its headings, it is important to use headings appropriately to convey document structure. When heading content is not created with proper markup the meaning conveyed by presentation will be lost when style sheets are turned off.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that headers with proper markup are employed for any elements that solely use visual effect to convey a content/section heading. HTML heading elements such as h1,h2,h3,h4,h5, and h6 must be used to specifically mark up page content that visually appears as a heading.\r\n\r\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 464,
    media: 'Web',
    bestpractice: 'Ensure list items are found in a list container',
    specificissue: 'List items are not inside of a list container',
    codesnippet:
      '[Issue]\nList items exist independent of a list container. All <li> elements should be nested inside a <ul>, <ol>, or <menu> element.\n\n[User Impact]\nList items which are orphaned or not found within a container are often not rendered properly in assistive technology.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all <li> elements are nested inside of the appropriate list element. These list items should be nested inside a _____ element.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 490,
    media: 'Web',
    bestpractice: 'Ensure all active elements receive keyboard focus or can be activated with the keyboard',
    specificissue: 'Anchor element does not receive keyboard focus',
    codesnippet:
      "[Issue]\nThe _____ is an <a> element that does not receive keyboard with the Tab key and is not operable by keyboard. When an element is interactive, the element must also be focusable via the keyboard or a shortcut provided to activate the element.\n\n[User Impact]\nEnsuring keyboard access to a site or application's controls and features allows people who cannot use a mouse or other pointing device to utilize the site or application. For example, a person with a disability that affects dexterity may find it impossible to move or hold a pointing device with enough accuracy to activate desired features. A person who cannot see the screen, therefore relying on a screen reader, may have no problems moving the pointer but will be unable to determine what is being pointed to.\n\n[Code Reference]\n_____",
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all interactive elements are accessible from the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be placed in the tab order by the browser.\n\n<a> elements require an HREF attribute to receive keyboard focus. Developers must ensure that no scripts are causing focus to skip over this element.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 490,
    media: 'Web',
    bestpractice: 'Ensure all active elements receive keyboard focus or can be activated with the keyboard',
    specificissue: 'Interactive generic element does not receive keyboard focus',
    codesnippet:
      "[Issue]\nThe _____ is a generic container that does not receive keyboard with the Tab key and is not operable by keyboard. When an element is interactive, the element must also be focusable via the keyboard or a shortcut provided to activate the element.\n\n[User Impact]\nEnsuring keyboard access to a site or application's controls and features allows people who cannot use a mouse or other pointing device to utilize the site or application. For example, a person with a disability that affects dexterity may find it impossible to move or hold a pointing device with enough accuracy to activate desired features. A person who cannot see the screen, therefore relying on a screen reader, may have no problems moving the pointer but will be unable to determine what is being pointed to.\n\n[Code Reference]\n_____",
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all interactive elements are accessible from the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be placed in the tab order by the browser and are recommended for all interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add tabindex="0" to the element and add a handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    specificissue: '<a> element is used as a button and has an implicit role of "link"',
    codesnippet:
      '[Issue]\nThe _____ is a custom control that was coded using an anchor element. <a> elements have an implicit role of "link" and announces to assistive technology as such.\n\n[User Impact]\nUsing an <a> element as a button can be confusing for screen reader users. Anchor elements have an implicit role of "link", indicating to screen reader users that activating this element will redirect them to a new URL or otherwise change the browser context. This can be disorienting when the element does not behave as expected.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all custom controls provide an accurate textual role for assistive technology. Using the <button> element for button-like controls will automatically have an implicit role of "button" and is generally recommended.\n\nTo ensure that <a> elements are announced to screen readers as buttons, developers must add the attribute role="button" to the anchor element.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    specificissue: 'Custom control that expands content does not indicate the fact',
    codesnippet:
      "[Issue]\nThe _____ is a custom control that expands content but does not properly indicate this information to assistive technology.\n\n[User Impact]\nWithout any indication of a custom control's expanded state, screen reader users will not be made aware that the element is intended to expand or collapse content upon activation, nor will they be made aware whether or not the content is currently in its expanded state.\n\n[Code Reference]\n_____",
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that custom controls which expand and collapse content upon activation provide the proper state information to describe its current expanded status. Developers should add an aria-expanded attribute to the element and dynamically toggle the value between "true" and "false", depending on its current state.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 609,
    media: 'Web',
    bestpractice: 'Ensure form field constraints and errors are associated with their corresponding field',
    specificissue:
      'Error messages are displayed visually, however they are not programmatically associated with their corresponding inputs',
    codesnippet:
      "[Issue]\nThe _____ form field has an error message that appears after an invalid submission, however the error message and form field's association is not properly indicated to assistive technology.\n\n[User Impact]\nWhen an error is not programmatically associated with a form field, users of assistive technology may not understand the relationship of the error to the field and may make the form unusable.\n\n[Code Reference]\n_____",
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that errors are programmatically associated with their form field. Developers can add an aria-describedby attribute to the form field, with a value that matches the ID attribute of the error message.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 887,
    media: 'Web',
    bestpractice: 'Ensure links that spawn dialogs indicate the fact',
    specificissue: 'Link elements open a dialog without indicating this to screen reader users',
    codesnippet:
      '[Issue]\nThe _____ element is a link that spawns a dialog without indicating this information to users of assistive technology.\n\n[User Impact]\nLink elements indicate to screen reader users that they will be redirected to a different page, or will experience a context change. Using links to open a dialog without informing screen reader users is unexpected and can be disorienting.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all links that open a dialog indicate this fact to screen reader users. Developers should add text to the link alerting users that a dialog will be opened when the link is activated by adding a title attribute to supplement the current accessible name.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 1249,
    media: 'Web',
    bestpractice: 'Ensure keyboard focus is indicated visually',
    specificissue: 'Interactive element does not visually indicate upon receiving focus',
    codesnippet:
      '[Issue]\nThe _____ receives keyboard focus with the Tab key, however there is no visual indication of this. A well-defined (highly visible) visual indication of keyboard focus needs to be provided for each active element.\n\n[User Impact]\nProviding a visual indication of the focus is particularly necessary for keyboard-only users who do not use the mouse and cannot simply click to place focus where they think it should be. The user must rely on the visual indication of focus to determine where an action will occur or determine what keystrokes to perform to move focus to the desired field.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that keyboard focus is displayed visually to all interactive elements. Typically the browser will provide keyboard focus for all standard interactive HTML elements, however developers can use custom visual indicators such as outlines or underlines using the focus pseudo-class.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 1578,
    media: 'iOS',
    bestpractice: 'Ensure color and text formatting are not the sole means of communicating selection'
  },
  {
    violationid: 1598,
    media: 'iOS',
    bestpractice: 'Provide valid labels for all form elements',
    specificissue: 'Form element does not provide a valid label',
    codesnippet:
      '[Issue]\nThe _____ is a form element that does not provide an accessible label.\n\n[User Impact]\nWhen form fields are not properly labeled, their identity will not be rendered properly by assistive technology to users with visual disabilities. The user may interact with the wrong form element or may not know which form field to interact with.',
    issuedescription:
      '[Recommendation]\nDevelopers need to ensure that accessibility labels provided for form elements are clear and concise. The accessibility label should generally match the visual label associated with input control. The accessibilityLabel property must be used to set the accessibility label.'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, states, and properties are valid',
    specificissue: 'Element contains an aria reference attribute with an invalid ID'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, states, and properties are valid',
    specificissue: 'Element contains role="heading" even though it is not utilized as a heading',
    codesnippet:
      '[Issue]\nThe _____ has a role of "heading", which is not valid for this element. No related content follows this element, as is expected with heading elements.\n\n[User Impact]\nWhen a non-heading element has a role of "heading" that element may be rendered by assistive technology as a heading element. Headings may provide the user with a way to navigate section-by-section through content. By applying headings incorrectly, users of assistive technology may be stripped of this useful navigation technique.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\r\nDevelopers must ensure that the role attribute corresponds with the element\'s purpose. Developers should remove the role="heading" attribute for all elements that do not function as a heading.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, state, and properties are valid',
    specificissue: 'Element contains an aria-expanded attribute even though it is being controlled by another element',
    codesnippet:
      '[Issue]\nThe _____ contains expandable content and has an aria-expanded attribute, even though its expanded state is being controlled by another element.\n\n[User Impact]\nScreen reader users may expect the element containing the aria-expanded attribute to change the expanded state upon interaction. The control element should have the aria-expanded attribute instead.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure to use valid ARIA roles, states, and properties. Developers should remove the aria-expanded attribute from the expandable content and ensure that proper markup is used on the control element.\n\nFor more information on using aria-expanded with buttons:\nhttps://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions#Example_1:_Using_a_button_to_collapse_and_expand_a_region\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 1871,
    media: 'Web',
    bestpractice: 'Avoid inappropriate use of ARIA roles, states, and properties',
    specificissue: 'Informative image is hidden with aria-hidden="true"',
    codesnippet:
      '[Issue]\r\nThe _____ image is hidden from assistive technology using the aria-hidden attribute. This image contains information that is neither decorative nor redundant, and should be available to assistive technology.\r\n\r\n[User Impact]\r\nWhen this image is hidden from assistive technology, screen reader users will not be made aware of the image or its contents. Any information conveyed on screen must also be rendered to assistive technology.\r\n\r\n[Code Reference]\r\n_____',
    issuedescription:
      '[Recommendation]\r\nDevelopers must ensure that all information intended for all users is also rendered to assistive technology. For any informative images, developers should remove the aria-hidden="true" attribute to ensure that screen reader users are able to access the alternative text.\r\n\r\n[Compliant Code Example]\r\n_____'
  },
  {
    violationid: 1905,
    media: 'iOS',
    bestpractice: 'Ensure that applications do not interfere with assistive technology'
  },
  {
    violationid: 1908,
    media: 'iOS',
    bestpractice: 'Ensure non-decorative images provide informative alternative text',
    specificissue: 'Image that conveys meaning does not have alternative text',
    codesnippet:
      '[Issue]\nThe _____ is an image that conveys meaning, however it does not provide informative alternative text. Images in iOS are not accessibility enabled by default. Developers wishing to use images must enable accessibility on all relevant images in addition to providing an appropriate accessibility label.\n\n[User Impact]\nAlternative text that is default, or non-meaningful text, can negatively impact the accessibility of an image. The goal of the accessible text should be to present text which will provide the same level of understanding to those who cannot see the image as it does to those who can.',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure to provide informative alternative text to all images that convey meaning. Developers should ensure that Accessible Label text is a concise and meaningful replacement for the image. It is strongly recommended that alt text should not exceed 80 characters.'
  },
  {
    violationid: 1909,
    media: 'iOS',
    bestpractice: 'Provide textual equivalents for all non-text elements including sounds and images',
    specificissue: 'Non-decorative element does not have a textual equivalent',
    codesnippet:
      '[Issue]\nThe _____ is an element that conveys meaning, however it does not provide a textual equivalent. All non-text elements that are not considered decorative must have an Accessible Label.\n\n[User Impact]\nWhen an accessible label is not provided for the _____, users who cannot view the _____ will not understand the purpose of it.',
    issuedescription:
      "[Recommendation]\nAll non-decorative objects must have 'Accessibility Enabled' within the xCode development environment and minimally have an accessibilityLabel attribute assigned."
  },
  {
    violationid: 2440,
    media: 'Web',
    bestpractice: 'Avoid use of placeholder values to label or explain input',
    specificissue: 'Form field uses a placeholder as its only label',
    codesnippet:
      '[Issue]\nThe _____ is a form field that uses a placeholder attribute as its only label. The placeholder text should be a short hint intended to aid the user with data entry.\n\n[User Impact]\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible name.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that the placeholder attribute is not a replacement for a label. It is recommended that developers use a programmatically associated <label> element, using the FOR attribute with a value that matches the ID of its corresponding input. If the placeholder attribute is also used, it is advised that the placeholder text should not be identical or redundant to the label text.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 2440,
    media: 'Web',
    bestpractice: 'Avoid use of placeholder values to label or explain input',
    specificissue: 'Form field uses placeholder text for a description.',
    codesnippet:
      '[Issue]\nThe _____ is a form field that uses a placeholder attribute as a description. The placeholding text should be a short hint intended to aid the user with data entry.\n\n[User Impact]\r\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible description.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that the placeholder attribute does not contain a description. To include a description, it is recommended that developers either include a short description in the label element or include the description text in its own element. Descriptions must be programmatically associated with their inputs. This is done by adding an aria-describedby attribute to the input, with a value that matches the ID attribute of its corresponding description.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    specificissue: 'Link text smaller than 14pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text below 14pt in size must be bold with a contrast ratio of 4.5:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    specificissue: 'Link text between 14pt and 18pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    specificissue: 'Link text larger than 18pt has insufficient contrast',
    codesnippet:
      '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text above 18pt in size must have a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or the background color so that a sufficient contrast is attained, including focused and hover states as well.\n\nText smaller than 18pt or bold text smaller than 14pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2519,
    media: 'Web',
    bestpractice: 'Ensure ARIA regions, landmarks and HTML sections are identifiable',
    specificissue: 'Multiple navigation items exist, but one of them does not have a label, visually or programmatically',
    codesnippet:
      '[Issue]\nThere are multiple elements on the page with a role of navigation, however _____ not have an accessible label. When two or more elements of the same region, landmark, or sections are used, they must all be identifiable among one another.\n\n[User Impact]\nWhen there are two or more regions, landmark, or sections of the same type without accessible labels, users of screen readers may have trouble locating the correct section or understanding its purpose.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nWhen there is ambiguity about an ARIA region, landmark or HTML section, developers must ensure that these elements contain meaningful accessible labels to assist users of screen readers to identify and distinguish the section, region or landmark. Developers can add an aria-label attribute to identify these regions.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 2590,
    media: 'iOS',
    bestpractice: 'Ensure speech is not the only means to access content',
    specificissue: 'Functionality requires that the user speaks',
    codesnippet:
      '[Issue]\nThe _____ requires that the user speaks in order to _____. Systems must have an alternative means of accessing information other than user speech.\n\n[User Impact]\nSystems that require user speech, including biometric speech, input as the sole means of accessing information may not be accessible by persons who are unable to speak or who have speech impairments.',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that a system does not solely require voice recognition, speech control or voice activation to access the information. For systems that rely on user speech, additional methods must be provided for access. This includes when speech is used for biometric identification. Developers should provide an alternative method that does not require speech such as via another input device such as a keyboard.'
  },
  {
    violationid: 2607,
    media: 'Web',
    bestpractice: 'Provide text equivalents for icon fonts',
    specificissue: 'Anchor or BUTTON element uses an icon as its visual label, however it has no textual label',
    codesnippet:
      '[Issue]\nThe _____ is an interactive element that uses an icon as its visual label. There is no textual equivalent provided to label this element.\n\n[User Impact]\nScreen reader users will not have access to the information conveyed by the icon without text equivalents. When icon fonts are used, the icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Screen reader users may not know how to interact with this element.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must address the accessibility of the font icon for all users with disabilities. When an icon font is used to visually label an interactive element, developers should add a title attribute to the interactive element to provide a textual name to assistive technology.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 2607,
    media: 'Web',
    bestpractice: 'Provide text equivalents for icon fonts',
    specificissue: 'Error messages uses an icon as its only method of indication',
    codesnippet:
      '[Issue]\nAfter triggering an error with the _____, the resulting error message is only indicated to users with an icon.\n\n[User Impact]\nThe icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Because this icon is the only indication of the error message, it is considered informative.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that text equivalents are provided for informative icon fonts. Errors must be explicitly indicated. This can be done by appending off-screen text to the beginning of the error message to communicate this information to screen-reader users.\n\n[Compliant Code Example]\n_____'
  },
  {
    violationid: 2896,
    media: 'Web',
    bestpractice: 'Ensure that content and functionality is available when the user overrides text spacing properties',
    specificissue: 'Text moves outside container when overriding text spacing properties'
  },
  {
    violationid: 2909,
    media: 'Web',
    bestpractice: 'Ensure active user interface components have sufficient contrast',
    specificissue: 'Interface component does not have enough contrast against background',
    codesnippet:
      '[Issue]\nThe _____ is an active interface component that does not provide sufficient contrast against the adjacent background color.\n\nComponent color: _____\nAdjacent background color: _____\nContrast ratio: _____\n\n[User Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must give identifying portions of active user interface components a contrast ratio of at least 3:1 with adjacent colors, including states such as focus, hover, selected, and current item. It is not required that controls have a visual boundary indicating the hit area, but that if there is an indicator, then it must have sufficient contrast.'
  },
  {
    violationid: 3159,
    media: 'Web',
    bestpractice: 'Ensure all interactive functionality is operable with the keyboard',
    specificissue: 'Interactive generic element receives focus but cannot be activated with the keyboard',
    codesnippet:
      '[Issue]\nThe _____ receives keyboard focus with the Tab key, however it does not function as expected upon activation.\n\n[User Impact]\nWhen interactive elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Reference]\n_____',
    issuedescription:
      '[Recommendation]\nDevelopers must ensure that all interactive elements can be operated with the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be operable by keyboard, and are generally recommended when creating interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add an additional handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Compliant Code Example]\n_____'
  }
];

///
const event = new Event('change');
///

const specificListContainer = document.createElement('div');
specificListContainer.id = 'specificListContainer';
const specificList = document.createElement('select');
specificList.id = 'specificList';
specificListContainer.appendChild(specificList);
const fillButton = document.createElement('button');
fillButton.textContent = 'Autofill';
fillButton.classList.add('kpmFirstButton');
fillButton.style.display = 'block';
specificListContainer.appendChild(fillButton);
specificListContainer.style.display = 'none';

const isPattern = window.location.href.includes('pattern_id');

const renderAll = () => {
  const changeBpButton = document.getElementById('ChgBPNow');
  const codeSnippetField = document.querySelectorAll('textarea')[0];
  const issueDescriptionField = document.querySelectorAll('textarea')[1];
  let selectList = codeSnippetField.parentNode.parentNode.previousSibling.lastChild;
  if (selectList.nodeName === 'TD') {
    selectList = selectList.lastChild;
  }
  let patternName;
  if (isPattern) {
    patternName = selectList.parentNode.parentNode.previousSibling.firstElementChild.firstElementChild.textContent.substring(18);
  }

  const fillInputs = e => {
    e.preventDefault();
    const specificListValue = document.getElementById('specificList').value;
    const chosenBestPractice = bestPractices.find(bestPractice => bestPractice.specificIssue === specificListValue);
    codeSnippetField.value = '';
    if (isPattern) {
      codeSnippetField.value += `[Pattern: ${patternName}]

`;
    }
    codeSnippetField.value += chosenBestPractice.codeSnippet;
    issueDescriptionField.value = chosenBestPractice.issueDescription;
  };

  const getSpecifics = violationid => bestPractices.filter(bestPractice => bestPractice.violationid === violationid);

  const renderSpecificList = specifics => {
    if (specifics.length) {
      specificList.innerHTML = '';
      specifics.forEach(specific => {
        const specificItem = document.createElement('option');
        specificItem.textContent = specific.specificIssue;
        specificList.appendChild(specificItem);
      });
      specificListContainer.style.display = 'block';
    } else {
      specificListContainer.style.display = 'none';
    }
  };

  selectList.parentNode.appendChild(specificListContainer);

  selectList.addEventListener('change', e => {
    const specifics = getSpecifics(Number(e.target.value));
    renderSpecificList(specifics);
  });

  changeBpButton.addEventListener('click', () => {
    setTimeout(() => {
      selectList.dispatchEvent(event);
    }, 0);
  });

  fillButton.addEventListener('click', fillInputs);
};

const init = () => {
  if (document.getElementById('ChgBPNow')) {
    renderAll();
  } else {
    setTimeout(init, 50);
  }
};

init();
