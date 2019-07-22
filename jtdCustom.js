// ==UserScript==
// @name         AMP - JTD
// @namespace    http://tampermonkey.net/
// @version      0.812
// @author       James Thomas Davey
// @description  Everybody who's anybody.
// @match        *.levelaccess.net/public/reporting/view_module.php?module_id=*
// @match        *.levelaccess.net/public/reporting/view_pattern.php?pattern_id=*
// ==/UserScript==

'use strict';

const bestPractices = [
  {
    violationid: 338,
    media: 'Web',
    bestpractice: 'Provide a valid label for form fields',
    scenario: 'Input has corresponding label element, however they are not programmatically associated',
    codesnippet: '[Issue]\nThe _____ field has a corresponding <label> element, however they are not programmatically associated with each other.\n\n[Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users. When labels are not present or are incorrect, users of assistive technologies may not be able to complete a form.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a <label> element with a form field, the <label> must have a FOR attribute with the same value as the input's ID attribute.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 338,
    media: 'Web',
    bestpractice: 'Provide a valid label for form fields',
    scenario: 'Input has text that functions visually as a label, however they are not programmatically associated',
    codesnippet: '[Issue]\nThe _____ field uses a _____ element that functions visually as a label, however their association is not rendered to assistive technology.\n\n[Impact]\nWhen form fields do not have a programmatically associated label, assistive technologies may incorrectly render the label or provide no label at all to users.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nDevelopers must provide an accessible label for all form fields. To associate a non-label element to a form field, developers can add an aria-labelledby attribute to the input with the same value as the visual label's ID attribute.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 338,
    media: 'Web',
    bestpractice: 'Provide a valid label for form fields',
    scenario: 'Button does not have a proper textual name',
    codesnippet: '[Issue]\nThe _____ button does not have a proper textual name available for assistive technology.\n\n[Impact]\nWhen buttons do not expose identifying information, users of assistive technology may not be able to identify and interact with the element.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that proper identifying information is provided for buttons. When buttons do not have visible inner text, developers should add a textual name by either adding SR-only text to the inner text or adding an appropriate aria-label attribute to the button.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 341,
    media: 'Web',
    bestpractice: 'Provide fieldsets for groups of form controls',
    scenario: 'Group of radio buttons is not contained in a fieldset element',
    codesnippet: '[Issue]\nThe _____ group of radio buttons is not contained in a <fieldset> element.\n\n[Impact]\nBy grouping radio buttons properly, users of assistive technology can understand the relationship of the inputs. When the question text and radio buttons are not properly constructed in a fieldset, screen reader users may only be aware of the answers and not the question.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must group related radio buttons together into a <fieldset> element, and ensure that a <legend> element is defined as the first child of the <fieldset>. If desired, CSS may be used to modify or suppress the default rectangle appearance of fieldsets and visual position of the legend text.\n\nMore information on fieldsets and legends:\nhttps://www.w3.org/TR/WCAG20-TECHS/H71.html\n\n[Code Sample]\n_____'
  },
  {
    violationid: 341,
    media: 'Web',
    bestpractice: 'Provide fieldsets for groups of form controls',
    scenario: 'Group of checkboxes is not contained in a fieldset element',
    codesnippet: '[Issue]\nThe _____ group of checkboxes is not contained in a <fieldset> element.\n\n[Impact]\nBy grouping checkboxes properly, users of assistive technology can understand the relationship of the inputs. When the question text and checkboxes are not properly constructed in a fieldset, screen reader users may only be aware of the answers and not the question.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must group related checkboxes together into a <fieldset> element, and ensure that a <legend> element is defined as the first child of the <fieldset>. If desired, CSS may be used to modify or suppress the default rectangle appearance of fieldsets and visual position of the legend text.\n\nMore information on fieldsets and legends:\nhttps://www.w3.org/TR/WCAG20-TECHS/H71.html\n\n[Code Sample]\n_____'
  },
  {
    violationid: 345,
    media: 'Web',
    bestpractice: 'Provide a mechanism for skipping past repetitive content',
    scenario: 'There is no skip link',
    codesnippet: "[Issue]\nThere is no mechanism to skip past the repetitive content of the page.\n\n[Impact]\nEach time a keyboard user accesses a new page in the site, the user would be forced to tab through all of these navigation links and other content before getting to the main content area of the page. This makes it difficult to access the page's unique information efficiently.",
    issuedescription: '[Recommendation]\nDevelopers must include a mechanism allowing users to skip past content. When links appear at the top of the page, the skip link should be the first before repetitive content on the page (generally the first tab stop), and its target should be the beginning of the main content area that is unique to that page.'
  },
  {
    violationid: 359,
    media: 'Web',
    bestpractice: 'Avoid the sole use of device-dependent event handlers',
    scenario: 'Interactive generic element receives focus but cannot be activated with the keyboard',
    codesnippet: '[Issue]\nThe _____ receives keyboard focus with the Tab key, however it cannot be activated with the keyboard.\n\n[Impact]\nWhen interactive elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that all interactive elements can be operated with the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be operable by keyboard, and are generally recommended when creating interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add an additional handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 361,
    media: 'Web',
    bestpractice: 'Ensure headers and cells are properly associated',
    scenario: 'Table has <th> elements spanning multiple columns without scope="colgroup"',
    codesnippet: '[Issue]\nThe _____ table contains <th> elements which span multiple columns, however this is not indicated properly with the correct scope attribute.\n\n[Impact]\nWhen tables do not programmatically indicate groupings of rows or columns, the additional layer of complexity in the table is only indicated visually, which can be confusing for users of assistive technology.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\r\nWhen <th> element span multiple columns, developers must add an attribute of scope="colgroup" to indicate this grouping to assistive technology.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    scenario: 'Informative image has no alternative text',
    codesnippet: '[Issue]\nThe _____ image does not have a textual equivalent to convey its information.\n\n[Impact]\nWithout alternative text, screen reader users will not be aware of the content of the image, and may only be informed of its file name.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must add an appropriate alt attribute for meaningful images. An alt attribute should be a concise and meaningful replacement for the image.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    scenario: 'Informative SVG has no accessible name value',
    codesnippet: '[Issue]\nThe _____ SVG does not have an accessible name value to be rendered to assistive technology.\n\n[Impact]\r\nWithout a textual alternative, screen reader users will not be informed of the content of the SVG.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd a <title> element as the first nested item inside the <svg> element. Add an attribute of role="img" to the <svg>, as well as aria-labelledby to reference its embedded <title>.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    scenario: 'Decorative image without alt text is rendered to AT',
    codesnippet: '[Issue]\nThe _____ image does not have alternative text and is rendered to assistive technology.\n\n[Impact]\nWithout alternative text, screen reader users will not be aware of the content of the image, and may only be informed of its file name.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that decorative images are hidden from assistive technology. This can be done by adding an attribute of alt="" to the image element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    scenario: 'Decorative text is rendered to AT',
    codesnippet: '[Issue]\nThe _____ on the page is decorative and is rendered to assistive technology.\n\n[Impact]\nWhen non-meaningful items are rendered to assistive technology, users may perceive unnecessary content which can hinder navigating and understanding content efficiently.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nHide this content from assistive technology by adding an attribute of aria-hidden="true".\n\n[Code Sample]\n_____'
  },
  {
    violationid: 362,
    media: 'Web',
    bestpractice: 'Provide alternative text for images',
    scenario: 'Decorative SVG without alt text is rendered to AT',
    codesnippet: '[Issue]\nThe _____ SVG does not have an accessible name value.\n\n[Impact]\nWhen non-meaningful items are rendered to assistive technology, users may perceive unnecessary content which can hinder navigating and understanding content efficiently.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that decorative images are hidden from assistive technology. This can be done by adding an attribute of aria-hidden="true" to the SVG element. Developers should also add an attribute of focusable="false" for IE11 support.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text smaller than 14pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text below 14pt in size must meet a minimum contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text between 14pt and 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 368,
    media: 'Web',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text larger than 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    scenario: 'Content uses color as the only method of differentiating from surrounding content',
    codesnippet: '[Issue]\nThe _____ uses color as the only indication of differentiating from _____.\n\n[Impact]\nWhen color is used as the sole method for identifying different types of content among their surrounding content, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of interactive elements, however it is recommended to add additional visual indicators such as a border or underline.\n\nDevelopers must also ensure that a textual indication also exists, for example by adding an aria-label or SR-only text.'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    scenario: 'Link or other interactive element uses color as the only differentiation from surrounding text',
    codesnippet: '[Issue]\nThe _____ uses an insufficient difference in color as its only method of indication within its surrounding text. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[Impact]\nWhen color is used as the sole method for identifying an interactive element among its surrounding content, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of interactive elements, however it is recommended to add additional visual indicators such as a border or underline.\n\nIf color is the sole means of indicating that an interactive element exists among its surrounding text, the color of the interactive element and its surrounding text must meet color contrast requirements.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    scenario: 'The current item of a list uses color as the only differentiation from other items',
    codesnippet: '[Issue]\nWithin the _____, the current _____ is only differentiated from its surrounding items by a difference in color. Besides the use of color, this item is stylistically similar and requires an additional visual and programmatic indicator.\n\n[Impact]\nWhen color is used as the sole method for identifying the current item within a list, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method both visually and programmatically. This provision does not prohibit the use of color to enhance the identification of the current item, however it is recommended to add additional visual indicators such as a border or underline.\n\nDevelopers should also add SR-only text to indicate its current state, or add the appropriate aria-current attribute to the element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 369,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of communicating information',
    scenario: 'The current item of a list uses color as the only visual differentiation from other items, but is indicated programmatically',
    codesnippet: '[Issue]\nWithin the _____, the current _____ is only visually differentiated from its surrounding items by a difference in color. Besides the use of color, this item is stylistically similar and requires an additional visual indicator.\n\n[Impact]\nWhen color is used as the sole method for identifying the current item within a list, persons who are blind, color blind, or have low vision may find the web page unusable.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that information communicated via color is also available through some other method. This provision does not prohibit the use of color to enhance the identification of the current item, however it is recommended to add additional visual indicators such as a border or underline.'
  },
  {
    violationid: 370,
    media: 'Web',
    bestpractice: 'Ensure images provide informative alternative text',
    scenario: 'Image of text does not have an accessible equivalent of that text',
    codesnippet: '[Issue]\nThe _____ image contains text with content that is not conveyed elsewhere on the page. Images of text should have alternative text that contains the same content.\n\n[Impact]\nWhen images of text do not contain accessible equivalents of that text, screen reader users will miss content that has been provided visually. All informative content that is provided visually must also be accessible to assistive technology.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that if there are any images of text, that textual content must be made accessible. This is either done with redundant information outside of the image element (in which case the image can be considered decorative), or by adding an alt attribute to the image containing the same textual information.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 372,
    media: 'Web',
    bestpractice: 'Ensure alternative text for image links is informative',
    scenario: 'Image link has alternative text that does not describe the destination',
    codesnippet: "[Issue]\nThe _____ image is used as a link and contains alternative text that does not properly describe the expected destination.\n\n[Impact]\nWhen an image's alternative text does not describe the destination as if it were link text itself, its destination may not be apparent to screen reader users.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nDevelopers must ensure the image has precise and meaningful alt text. This should should effectively describe the target of the link. Developers should also avoid using vague attributes such as alt="Follow this link...".\n\n[Code Sample]\n_____'
  },
  {
    violationid: 372,
    media: 'Web',
    bestpractice: 'Ensure alternative text for image links is informative',
    scenario: 'Image link has no alternative text or accessible name value',
    codesnippet: '[Issue]\nThe _____ image is used as a link but contains no alternative text to describe its destination.\n\n[Impact]\nWhen an image link does not have alternative text, its destination may not be apparent to screen reader users.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure the image has alt text which effectively describes the target of the link.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 373,
    media: 'Web',
    bestpractice: 'Provide valid, concise, and meaningful alternative text for image buttons',
    scenario: '<button> element uses an image as its visual label, however it has no textual label',
    codesnippet: '[Issue]\nThe _____ is an interactive element that uses an image as its visual label. There is no textual equivalent provided to label this element.\n\n[Impact]\nScreen reader users will not have access to the information conveyed by the image without text equivalents. When images are used as identifiers for buttons, screen reader users may not know how to interact with this element.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nDevelopers must address the accessibility of buttons for all users with disabilities. When an image is used to visually label a button, developers should add the appropriate alt attribute to the image to explain the button's purpose.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 378,
    media: 'Web',
    bestpractice: 'Avoid redundant alt text for imagse with adjacent text or links',
    scenario: 'Image has alternative text that is redundant with adjacent content',
    codesnippet: "[Issue]\nThe _____ image contains alt text that is redundant with its adjacent content.\n\n[Impact]\nThe image's alt text does not add value to the comprehension of the page. Screen readers will read the same information twice, resulting in impaired navigation.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nEnsure that screen readers do not perceive the same information twice by adding an attribute of alt="" to the image tag.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 387,
    media: 'Web',
    bestpractice: "Ensure heading level matches the heading's visual importance/level",
    scenario: 'Headings skip a level',
    codesnippet: '[Issue]\nThe _____ heading is a heading level _____, while the preceding heading is a heading level _____.\n\n[Impact]\nHeadings can be used to communicate structure for assistive technology. When levels are skipped, users may not understand the relationship of content.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nDevelopers must ensure that heading levels match the heading's visual importance/level. Developers should change the _____ heading from an _____ to an _____.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 387,
    media: 'Web',
    bestpractice: "Ensure heading level matches the heading's visual importance/level",
    scenario: 'Headings are out of order',
    codesnippet: '[Issue]\nThe _____ heading is a heading level _____, while the preceding heading is a heading level _____.\n\n[Impact]\nHeadings can be used to communicate structure for assistive technology. When levels are not in the correct order, users may not understand the relationship of content.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nDevelopers must ensure that heading levels match the heading's visual importance/level. Developers should change the _____ heading from an _____ to an _____.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 393,
    media: 'Web',
    bestpractice: 'Ensure sub-lists are marked up properly',
    scenario: 'List element contains direct children that are not list items',
    codesnippet: '[Issue]\nThe _____ consists of _____ nested directly inside a _____ element.\n\n[Impact]\nImproper nesting of non-list items in list elements results in elements not being rendered properly to assistive technology.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that _____ elements only contain _____ elements as direct children.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 396,
    media: 'Web',
    bestpractice: 'Ensure link text is meaningful when taken out of context',
    scenario: 'Link text does not make sense when taken out of context',
    codesnippet: '[Issue]\nThe _____ link text is not meaningful when taken out of context.\n\n[Impact]\nScreen reader users may utilize a list of link on the page to navigate. When link text is not meaningful when taken out of context, screen reader users will not be able to efficiently navigate with this method.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that link text is meaningful out of context by modifying the accessible name using SR-only text, or by adding an attribute of aria-describedby to reference the ID of a corresponding element that provides context.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 397,
    media: 'Web',
    bestpractice: 'Ensure the same link text for links with different targets is avoided',
    scenario: 'Multiple links have the same accessible name value',
    codesnippet: '[Issue]\n_____ links have share the same accessible name value of _____, even though they lead to different destinations.\n\n[Impact]\nWhen links with different destinations are given identical link text, this can produce confusion for users of assistive technology. When a list of links is presented to the user, they may not be aware that the links lead to different destinations.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nAdd off-screen text to the links' inner text to provide context that may already be available visually.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 409,
    media: 'Web',
    bestpractice: 'Ensure text can be resized',
    scenario: 'Text stays the same size upon zooming with the browser',
    codesnippet: '[Issue]\nThe _____ text on the page cannot be resized. Attempting to resize the content of the page to 200 percent results in no visual change for this content.\n\n[Impact]\nWhen absolute font sizes are used, low vision users may not be able to increase or decrease the size of the font, or the font may become unreadable or overlap other content.',
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that all text can be resized up to 200 percent without the use of assistive technology. Typically this is done by ensuring that for all declarations of font size, the declaration is stated in relative units - em units, percentages, or keywords.\r\n\r\nResponsive web design can be helpful in creating sites that allow for text resized without loss of content or functionality but use of responsive web design alone is not enough, as fixed container sizes can still break when the page is zoomed.'
  },
  {
    violationid: 410,
    media: 'Web',
    bestpractice: 'Ensure containing elements allow text resize without loss of functionality',
    scenario: 'Text gets cut off or obscured when text is enlarged',
    codesnippet: '[Issue]\nWhen using the browser to enlarge the text, the _____ becomes _____.\n\n[Impact]\nUsers with low vision or cognitive impairments may need to resize the text. When text becomes obscured upon being enlarged, these users may no longer be able to perceive this content.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that text can be enlarged up to 200%. Developers should convert all absolute units into relative units and allow proper scaling.'
  },
  {
    violationid: 429,
    media: 'Web',
    bestpractice: 'Ensure the language of a document is set',
    scenario: 'The <html> element has no lang attribute',
    codesnippet: '[Issue]\nThe language of this document is not set.\n\n[Impact]\nScreen readers and other assistive technology types must know what the default language type is to ensure they can appropriately switch between languages, in the case that a document contains multiple inline language choices.\n\n[Code Sample]\n<html ...>...</html>',
    issuedescription: '[Recommendation]\nDevelopers must ensure that the lang attribute is set within the html element. This is inherited by all other elements, and so will set a default language for the text in the document head element.\n\n[Code Sample]\n<html lang="en" ...>...</html>'
  },
  {
    violationid: 457,
    media: 'Web',
    bestpractice: 'Avoid the use of implicit headings',
    scenario: 'Heading is displayed visually but does not have heading markup',
    codesnippet: '[Issue]\nThe _____ text is utilized visually as a heading, however it does not have the correct heading markup.\n\n[Impact]\nSince some users skim through a document by navigating its headings, it is important to use headings appropriately to convey document structure. When heading content is not created with proper markup the meaning conveyed by presentation will be lost when style sheets are turned off.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that headers with proper markup are employed for any elements that solely use visual effect to convey a content/section heading. HTML heading elements such as h1,h2,h3,h4,h5, and h6 must be used to specifically mark up page content that visually appears as a heading.\r\n\r\n[Code Sample]\n_____'
  },
  {
    violationid: 464,
    media: 'Web',
    bestpractice: 'Ensure list items are found in a list container',
    scenario: 'List items are not inside of a list container',
    codesnippet: '[Issue]\nList items exist independent of a list container. All <li> elements should be nested inside a <ul>, <ol>, or <menu> element.\n\n[Impact]\nList items which are orphaned or not found within a container are often not rendered properly in assistive technology.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that all <li> elements are nested inside of the appropriate list element. These list items should be nested inside a _____ element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 476,
    media: 'Web',
    bestpractice: 'Ensure embedded elements and canvas elements provide a meaningful text equivalent',
    scenario: '<canvas> element does not have an accessible name',
    codesnippet: '[Issue]\nThe _____ <canvas> element does not have an accessible name.\n\n[Impact]\nScreen reader users may not be able to identify the purpose of this <canvas> element.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nInclude fallback within the <canvas> element's subtree to assign an accessible name.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 476,
    media: 'Web',
    bestpractice: 'Ensure embedded elements and canvas elements provide a meaningful text equivalent',
    scenario: '<video> element does not have an accessible name',
    codesnippet: '[Issue]\nThe _____ <video> element does not have an accessible name.'
  },
  {
    violationid: 479,
    media: 'Web',
    bestpractice: 'Ensure blockquote is used for long quotes',
    scenario: 'Long quote does not use the blockquote element',
    codesnippet: '[Issue]\nThe _____ is not contained in a <blockquote> element.\n\n[Impact]\nBy using the <blockquote> element, assistive technology will convey the fact that its text content appears within the context of an externally sourced quote.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nEnsure that the quote's text content is contained within a <blockquote> element.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 490,
    media: 'Web',
    bestpractice: 'Ensure all active elements receive keyboard focus or can be activated with the keyboard',
    scenario: 'Anchor element does not receive keyboard focus but could be activated by keyboard',
    codesnippet: '[Issue]\nThe _____ does not receive keyboard focus with the Tab key.\n\n[Impact]\nWhen anchor elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAnchor elements require an HREF attribute to receive keyboard focus. Ensure that no scripts are causing focus to skip over this element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 490,
    media: 'Web',
    bestpractice: 'Ensure all active elements receive keyboard focus or can be activated with the keyboard',
    scenario: 'Interactive generic element does not receive keyboard focus but could be activated by keyboard',
    codesnippet: '[Issue]\nThe _____ does not receive keyboard focus with the Tab key.\n\n[Impact]\nWhen interactive elements do not receive keyboard focus, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that all interactive elements are focusable by keyboard. Standard HTML elements such as <button> and <a> are automatically focusable by keyboard, and are generally recommended when creating interactive elements.\n\nTo allow keyboard focus on a generic container element, developers must add an attribute of tabindex="0" to the element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 490,
    media: 'Web',
    bestpractice: 'Ensure all active elements receive keyboard focus or can be activated with the keyboard',
    scenario: 'Interactive generic element does not receive keyboard focus and cannot be activated with the keyboard',
    codesnippet: '[Issue]\nThe _____ does not receive keyboard focus with the Tab key and cannot be activated with the keyboard.\n\n[Impact]\nWhen interactive elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that all interactive elements are focusable and operable by keyboard. Standard HTML elements such as <button> and <a> are automatically focusable and operable by keyboard, and are generally recommended when creating interactive elements.\n\nTo allow keyboard focus on a generic container element, developers must add an attribute of tabindex="0" to the element. To allow keyboard activation on this element, developers must also add an additional event handler for keyboard events.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 523,
    media: 'Web',
    bestpractice: 'Ensure frame titles are meaningful',
    scenario: 'Frame title is not meaningful',
    codesnippet: '[Issue]\nThe title for the _____ <iframe> element is _____, which does not meaningfully describe its content.\n\n[Impact]\nWhen frames have non-meaningful titles, it becomes difficult for users of assistive technologies to move between frames in order to access the page content they wish to view.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nFrames should contain meaningful and concise titles that directly reflect the content they represent and/or action to be performed by that frame.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 523,
    media: 'Web',
    bestpractice: 'Ensure frame titles are meaningful',
    scenario: 'Frame does not have a title',
    codesnippet: '[Issue]\nThe _____ <iframe> element does not have a title.\n\n[Impact]\nWhen frames are not titled or have non-meaningful titles, it becomes difficult for users of assistive technologies to move between frames in order to access the page content they wish to view.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd a title attribute to the <iframe> to assign a meaningful name.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 524,
    media: 'Web',
    bestpractice: 'Avoid placing inactive elements in the focus order',
    scenario: 'Inactive elements receive keyboard focus (not including <button> or <a> elements)',
    codesnippet: '[Issue]\nSome inactive elements receive Tab keyboard focus, despite not featuring any interactive functionality. This can be seen _____.\n\n[Impact]\nProviding focus to non-active elements may give users of assistive technology the impression that the element is interactive and cause keyboard users to have to use extra keystrokes to navigate.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that generally only interactive elements receive Tab keyboard focus. Elements that are inactive by default and are not intended to be active should not have a tabindex attribute. There should also be no scripts that direct keyboard focus to these elements.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 524,
    media: 'Web',
    bestpractice: 'Avoid placing inactive elements in the focus order',
    scenario: 'Inactive links or buttons receive keyboard focus',
    codesnippet: '[Issue]\nSome inactive elements receive Tab keyboard focus, despite not featuring any interactive functionality. This can be seen _____.\n\n[Impact]\nProviding focus to non-active elements may give users of assistive technology the impression that the element is interactive and cause keyboard users to have to use extra keystrokes to navigate.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that generally only interactive elements receive Tab keyboard focus. For interactive elements that are in the focus order but rendered inactive, tabindex="-1" can be used to remove them from the focus order. There should also be no scripts that direct keyboard focus to these elements.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 525,
    media: 'Web',
    bestpractice: 'Ensure color is not the sole means of indicating error messages',
    scenario: 'Error messages are only indicated by their difference in color',
    codesnippet: '[Issue]\nAfter triggering error messages by _____, the only distinction that these are error messages is their use of color.\n\n[Impact]\nThe purpose of these error messages may not be apparent to users who are color blind or have low vision.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd a secondary visual indication to the error message that is also programmatically available, such as a warning images with appropriate alternative text, or simply the text "Error: ".\r\n\n[Code Sample]\n_____'
  },
  {
    violationid: 542,
    media: 'Web',
    bestpractice: 'Provide an informative context-sensitive page title',
    scenario: 'Page title is not specific',
    codesnippet: '[Issue]\nThe document page title, _____ does not specifically indicate the current page location.\n\n[Impact]\nAssistive technologies utilize the page title to indicate the current page location to users without the user having to navigate within the page.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that the value for the title element is updated as the page content changes.\r\n\r\n[Code Sample]\r\n_____'
  },
  {
    violationid: 566,
    media: 'Web',
    bestpractice: 'Ensure implicit list markup is avoided',
    scenario: 'List does not use list markup',
    codesnippet: '[Issue]\nThe _____ is utilized visually as an _____ list, however it does not contain list markup.\n\n[Impact]\nWhen lists do not contain the proper list markup, screen reader users may not be able to efficiently understand and navigate their contents.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that all the list items are enclosed in <li> tags, and ensure that all of the <li> tags are contained within a _____ element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 588,
    media: 'Web',
    bestpractice: 'Avoid unnecessary use of heading elements',
    scenario: 'Non-heading elements have heading markup',
    codesnippet: '[Issue]\nThe _____ text has heading markup, which is not valid for this element. The _____ text is not utilized properly as a heading.\n\n[Impact]\nWhen a non-heading element uses heading markup, that element may be rendered by assistive technology as a heading element. Headings may provide the user with a way to navigate section-by-section through content. By applying headings incorrectly, users of assistive technology may be stripped of this useful navigation technique.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that non-heading elements to not have heading markup for presentation purposes. Developers should remove the current heading markup and use generic containers instead.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 594,
    media: 'Web',
    bestpractice: 'Ensure fields indicate attached menus',
    scenario: 'Element that opens a menu does not indicate this fact',
    codesnippet: '[Issue]\nThe _____ does not indicate to assistive technology that it has an attached menu.\n\n[Impact]\nScreen reader users will not be aware that a menu will be opened upon activating the element.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd the attribute aria-haspopup="true" to indicate that this element opens a menu upon activation.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 595,
    media: 'Web',
    bestpractice: 'Ensure keyboard and programmatic focus moves to opened menus',
    scenario: 'Focus does not move to the first menu item',
    codesnippet: '[Issue]\nUpon activating the _____ menu with the keyboard, focus does not move to the first menu item.\n\n[Impact]\nWhen focus does not move into the opened menu, keyboard-only users will not be able to navigate through the menu items using the expected controls.',
    issuedescription: '[Recommendation]\nEnsure that when an item provides a menu, context, standalone, or attached menu that the menu properly allows focus to be set on the first item within the menu. This can be accomplished by calling the JavaScript .focus() method on the element in question.'
  },
  {
    violationid: 598,
    media: 'Web',
    bestpractice: 'Ensure sub-menu items are keyboard accessible and communicate sub menu structure',
    scenario: 'Role="menu" and role="menuitem" are not used',
    codesnippet: '[Issue]\nThe _____ menu and menu items to not have the correct roles assigned to indicate their purpose.\n\n[Impact]\nUsing the correct roles of "menu" and "menuitem" will allow screen reader users to understand the purpose of the elements as well as the their current position in the total number of menu items.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that the container element has an attribute of role="menu" and that the nested interactive elements have an attribute of role="menuitem".\n\n[Code Sample]\n_____'
  },
  {
    violationid: 598,
    media: 'Web',
    bestpractice: 'Ensure sub-menu items are keyboard accessible and communicate sub menu structure',
    scenario: 'Role="menu" is used, but role="menuitem" is not used',
    codesnippet: '[Issue]\nThe _____ menu contains interactive items that do not have the correct role of "menuitem"\n\n[Impact]\nWhen role="menu" is used, screen readers will communicate to users the number of menu items as the user cycles through them. When role="menuitem" is not used, screen readers may communicate false information.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that the nested interactive elements have an attribute of role="menuitem".\n\n[Code Sample]\n_____'
  },
  {
    violationid: 598,
    media: 'Web',
    bestpractice: 'Ensure sub-menu items are keyboard accessible and communicate sub menu structure',
    scenario: 'Arrow keys cannot control focus in a menu',
    codesnippet: '[Issue]\nIn the _____ menu, pressing the up and down arrow keys do not cycle through menu items.\n\n[Impact]\nWhen menu authoring practices are used, screen reader users will be informed that they can control focus with the arrow keys. When these keys do not function properly, keyboard only users will not be able to easily navigate through these items.',
    issuedescription: '[Recommendation]\r\nEnsure that users can cycle through menu items by using the up and down arrows, can activate menu items with the spacebar or enter key, and can exit the menu with the Tab key.'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    scenario: '(Generic) Element does not communicate its state',
    codesnippet: '[Issue]\nThe _____ does not programmatically indicate its _____ state.\n\n[Impact]\nWhen elements do not programmatically indicate their current state, users of assistive technology may not know how to interact with the element.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nEnsure that the correct state is provided for this element. Add an attribute of _____ and dynamically update its value depending on its visual state.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    scenario: 'Generic element is a custom control and does not have a proper textual name',
    codesnippet: '[Issue]\nThe _____ control does not have a proper textual name available for assistive technology.\n\n[Impact]\nWhen custom controls do not expose identifying information, users of assistive technology may not be able to identify and interact with the element.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that proper identifying information is provided for custom components. When controls do not have visible inner text, developers should add a textual name by either adding SR-only text to the inner text or adding an appropriate aria-label attribute to the control.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    scenario: '<a> element is used as a button and without role="button"',
    codesnippet: '[Issue]\nThe _____ control was coded using an <a> element, which has an implicit role of "link" and announces to assistive technology as such.\n\n[Impact]\nUsing an <a> element as a button can be confusing for screen reader users. Anchor elements have an implicit role of "link", indicating to screen reader users that activating this element will redirect them to a new URL or otherwise change the browser context. This can be disorienting when the element does not behave as expected.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that all custom controls provide an accurate textual role for assistive technology. Using the <button> element for button-like controls will automatically have an implicit role of "button" and is generally recommended.\n\nTo ensure that <a> elements are announced to screen readers as buttons, developers must add the attribute role="button" to the anchor element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 602,
    media: 'Web',
    bestpractice: 'Ensure custom controls provide proper textual name, role, and state information',
    scenario: 'Custom control that expands content does not indicate the fact',
    codesnippet: "[Issue]\nThe _____ control expands content but does not properly indicate this information to assistive technology.\n\n[Impact]\nWithout any indication of a custom control's expanded state, screen reader users will not be made aware that the element is intended to expand or collapse content upon activation, nor will they be made aware whether or not the content is currently in its expanded state.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nDevelopers must ensure that custom controls which expand and collapse content upon activation provide the proper state information to describe its current expanded status. Developers should add an aria-expanded attribute to the element and dynamically toggle the value between "true" and "false", depending on its current state.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 609,
    media: 'Web',
    bestpractice: 'Ensure form field constraints and errors are associated with their corresponding field',
    scenario: 'Form uses * to denote required fields, however this is not defined',
    codesnippet: '[Issue]\nThe _____ form uses an asterisk to denote which fields are required, however the form does not include an explanation of the asterisk.\n\n[Impact]\nWhen constraints are not defined, users with cognitive disabilities may not know what the minimum fields to complete are.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that form field requirements are clearly defined. Developers should add an explanation of what the asterisk indicates at the top of the form, for example "Required fields marked with an *".\n\n[Code Sample]\n_____'
  },
  {
    violationid: 609,
    media: 'Web',
    bestpractice: 'Ensure form field constraints and errors are associated with their corresponding field',
    scenario: 'Form fields have constraints that are not programmatically associated',
    codesnippet: '[Issue]\nThe _____ elements with the text _____ are not programmatically associated with their adjacent inputs.\n\n[Impact]\nScreen reader users will not receive this information upon focusing on the input, and may skip the message altogether.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd an ariadescribedby attribute to the <input> elements, referencing the ID of the corresponding <p> element with the constraint message.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 609,
    media: 'Web',
    bestpractice: 'Ensure form field constraints and errors are associated with their corresponding field',
    scenario: 'Error messages are displayed visually, however they are not programmatically associated with their corresponding inputs',
    codesnippet: "[Issue]\nThe _____ form field has an error message that appears after an invalid submission, however the error message and form field's association is not properly indicated to assistive technology.\n\n[Impact]\nWhen an error is not programmatically associated with a form field, users of assistive technology may not understand the relationship of the error to the field and may make the form unusable.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nDevelopers must ensure that errors are programmatically associated with their form field. Developers can add an aria-describedby attribute to the form field, with a value that matches the ID attribute of the error message.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 610,
    media: 'Web',
    bestpractice: 'Ensure form field labels are unique',
    scenario: 'Multiple buttons share the same accessible name',
    codesnippet: '[Issue]\nThe _____ buttons share the same accessible name value.\n\n[Impact]\nUsers of assistive technology may have difficulty identifying the buttons when viewed without visual context.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nProvide an aria-label attribute to provide context that would help users identify the buttons without visual context cues.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 733,
    media: 'Web',
    bestpractice: 'Ensure content that is intended to be hidden from all users is not rendered by assistive technology',
    scenario: 'Visually hidden items receive Tab focus',
    codesnippet: '[Issue]\nThe _____ is hidden visually, however it still receives keyboard focus using the Tab key.\n\n[Impact]\nHaving the wrong content rendered may cause users to read incorrect information or even activate links that are off screen. This can lead to confusion and incorrect results.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that content that is intended to be hidden from all users is not rendered by assistive technology. Developers can set the display property to "none" in CSS, rather than simply hiding items with opacity, z-index, or absolute positioning.'
  },
  {
    violationid: 794,
    media: 'Web',
    bestpractice: 'Avoid using event handlers that trigger focus or context changes on user input',
    scenario: 'Context unexpectedly changes after the user does something',
    codesnippet: '[Issue]\nAfter the user _____, the context changes without warning. _____.\n\n[Impact]\nUsing an event handler, such as the onChange event, that triggers focus or context changes when input is given by the user can cause significant challenges for users with disabilities.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must avoid using event handlers to trigger context changes whenever possible. For dropdown selection controls, add in a form button (i.e. Apply) that allows the user to trigger the form update event. Ensure that this element has a text value that properly communicates its function.'
  },
  {
    violationid: 796,
    media: 'Web',
    bestpractice: 'Ensure the focus order of interactive elements on the page is logical',
    scenario: 'Interactive elements do not focus in a logical order',
    codesnippet: '[Issue]\nWhen using the Tab key to focus on different items on the page, focus _____.\n\n[Impact]\nWhen the tab order of the page is illogical, filling out forms or navigating through the page can be confusing for screen reader users and other keyboard users.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that the focus order of interactive elements on the page matches the visual layout of the page, or at least follows a logical order.'
  },
  {
    violationid: 808,
    media: 'Web',
    bestpractice: 'Ensure CSS background images that convey meaning have textual and visible equivalents',
    scenario: 'CSS background image conveys meaning and has no textual or visual equivalent',
    codesnippet: '[Issue]\nThe _____ uses a background image which conveys meaning to the user. There is no textual or visual equivalent for this background image.\n\n[Impact]\nUsers who cannot see background images include screen reader users and users with low vision such as those who turn on high contrast mode or turn off web page colors. The meaning conveyed by the background image will not be conveyed to users who cannot see the image.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that background images conveying meaning contain both textual and visual alternatives, because background images are unavailable during high contrast mode or when web page colors are disabled. Textual alternatives can be added using adjacent off-screen text. Visual alternatives would need to be added in nearby content of the page or imposed where the image is using CSS.\n\nIt is often recommended to use <img> elements for meaningful images, because <img> elements persist during high contrast mode and when web page colors are disabled and allow alternative text.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 808,
    media: 'Web',
    bestpractice: 'Ensure CSS background images that convey meaning have textual and visible equivalents',
    scenario: 'CSS background image conveys meaning and has no textual equivalent',
    codesnippet: '[Issue]\nThe _____ uses a background image which conveys meaning to the user. There is no textual equivalent for this background image.\n\n[Impact]\nThe meaning conveyed by the background image will not be conveyed to screen reader users.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that background images conveying meaning contain textual alternatives. This can be added using adjacent off-screen text or with a proper aria-label attribute.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 808,
    media: 'Web',
    bestpractice: 'Ensure CSS background images that convey meaning have textual and visible equivalents',
    scenario: 'CSS background image conveys meaning and has no visual equivalent',
    codesnippet: '[Issue]\nThe _____ uses a background image which conveys meaning to the user. There is no visual equivalent for this background image.\n\n[Impact]\nThe meaning conveyed by the background image will not be conveyed to wsers with low vision such as those who turn on high contrast mode or turn off web page colors. \n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that background images conveying meaning contain visual alternatives, because background images are unavailable during high contrast mode or when web page colors are disabled. Visual alternatives would need to be added in nearby content of the page or imposed where the image is using CSS.\n\nIt is often recommended to use <img> elements for meaningful images, because <img> elements persist during high contrast mode and when web page colors are disabled.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 885,
    media: 'Web',
    bestpractice: 'Limit the amount of horizontal scrolling required',
    scenario: 'Content requires horizontal scrolling',
    codesnippet: '[Issue]\nThe _____ requires horizontal scrolling to view content.\n\n[Impact]\nHorizontal scrolling poses problems for low vision users with screen magnification, mobility impaired users without means to scroll horizontally, and users with voice recognition software.',
    issuedescription: '[Recommendation]\nDesign the site/application to provide an option allowing content and user interface components to be viewable without requiring horizontal scrolling.'
  },
  {
    violationid: 886,
    media: 'Web',
    bestpractice: 'Ensure dialogs use proper structure',
    scenario: 'Dialog does not have a proper role',
    codesnippet: '[Issue]\nThe _____ does not have a role="dialog" to indicate its boundaries on the screen.\n\n[Impact]\nUse of appropriate dialog role will allow users of screen reader users to know the beginning and ending boundaries of the dialog.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nAdd an attribute of role="dialog" to the container or use the <dialog> element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 887,
    media: 'Web',
    bestpractice: 'Ensure links that spawn dialogs indicate the fact',
    scenario: 'Link elements open a dialog without indicating this to screen reader users',
    codesnippet: '[Issue]\nThe _____ link spawns a dialog without indicating this information to users of assistive technology.\n\n[Impact]\nLink elements indicate to screen reader users that they will be redirected to a different page, or will experience a context change. Using links to open a dialog without informing screen reader users is unexpected and can be disorienting.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that all links that open a dialog indicate this fact to screen reader users. Developers should add text to the link alerting users that a dialog will be opened when the link is activated by adding a title attribute to supplement the current accessible name.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 889,
    media: 'Web',
    bestpractice: 'Ensure that when dialogs are activated focus moves appropriately',
    scenario: 'Focus does not move into dialog after it has been opened',
    codesnippet: "[Issue]\nAfter the _____ dialog opens, focus does not move into the dialog element.\n\n[Impact]\nWhen focus is not moved appropriately, screen reader users may not be able to efficiently locate the new content or may miss portions of the dialog's content.",
    issuedescription: '[Recommendation]\nDevelopers must ensure that when a dialog is opened, focus moves appropriately to the first content element inside the dialog or to the first control. Developers can use the tabindex attribute with a value of -1 on any non-focusable element that contains the content to set focus (using the javaScript focus() method).'
  },
  {
    violationid: 948,
    media: 'Web',
    bestpractice: 'Ensure charts and graphs provide an informative and visible alternative description',
    scenario: 'Alternative description for chart or graph differs from content',
    codesnippet: '[Issue]\nThe _____ provides a visible alternative description that differs from its content.\n\n[Impact]\nWhen the content of the alternative description for charts and graphs does not match their actual content, screen reader users will not be able to perceive the same information available to other users.\r\n\r\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nThe _____ legend must match the contents of the image. Developers should change either the image or image description so that the content matches.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 952,
    media: 'Web',
    bestpractice: 'Ensure keyboard focus returns properly from dialogs',
    scenario: 'Focus does not return after closing a dialog',
    codesnippet: '[Issue]\nAfter closing the _____ dialog, focus does not return from the dialog element.\n\n[Impact]\nKeyboard-only users can lose their place on the page if keyboard focus does not move to an appropriate location.',
    issuedescription: '[Recommendation]\nEnsure that dialog focus moves to the trigger that opened the dialog in the first place. This can be done by calling JavaScript .focus() method on the trigger element when the dialog is closed.'
  },
  {
    violationid: 971,
    media: 'Web',
    bestpractice: 'Indicate live regions for dynamically changing content',
    scenario: 'Dynamically changing content is not announced with screen readers',
    codesnippet: '[Issue]\nThe _____ on the page updates dynamically without indication from screen readers.\n\n[Impact]\nScreen reader users will not be notified of the dynamically changing content on the screen.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that dynamically changing content is indicated to assistive technology. It is recommended to add an attribute of aria-live="polite" to the container element of non-urgent dynamically changing content.\n\nFor more information on live regions:\nhttps://www.w3.org/TR/wai-aria-1.1/#aria-live\n\n[Code Sample]\n_____'
  },
  {
    violationid: 971,
    media: 'Web',
    bestpractice: 'Indicate live regions for dynamically changing content',
    scenario: 'Live search results are not announced with screen readers',
    codesnippet: '[Issue]\nThe _____ search results update dynamically without indication from screen readers.\n\n[Impact]\nScreen reader users will not be notified of the updated search results.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that dynamically changing content is indicated to assistive technology. For content-heavy updates such as search results, developers can add an attribute of aria-live="polite" to the span indicating the number of results.\n\nFor more information on correctly identifying live regions:\nhttps://www.w3.org/TR/wai-aria-1.1/#aria-live\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1143,
    media: 'Web',
    bestpractice: 'Provide a text transcript for audio only presentations',
    scenario: 'Audio player does not provide a text transcript',
    codesnippet: '[Issue]\nThe _____ audio clip does not have a text transcript. A text transcript should be provided for all audio only media.\n\n[Impact]\nWhen a text transcript is not provided for audio, users who are deaf or hard of hearing will not be able to access the content in the audio file.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers should make a text transcript available for all audio contained within a page. The link to the transcript should be provided at the same location that the link to the audio is provided. Another option is to associate a caption track with the audio element by using the <track> element with the kind attribute set to "captions". The transcript language should be the same as the language of the media content.\n\nMore information on captions:\nhttps://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html\n\nMore information on the <track> element:\nhttps://www.w3.org/TR/WCAG20-TECHS/H95.html'
  },
  {
    violationid: 1233,
    media: 'Web',
    bestpractice: 'Ensure text is used instead of images of text when technology allows unless it is essential',
    scenario: 'Images of text are used in place where there could be regular text',
    codesnippet: '[Issue]\nThe _____ images contain text which can be replaced by regular text to be rendered by assistive technology and adjustable to custom styles.\n\n[Impact]\nSome people require a particular visual presentation of text and this can not be adjusted when an image contains text. For example, some users may need to adjust the font family, font size, or color.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure to convert images that contain text to text and style the text using CSS unless the images of text are essential. If the technology platform does not allow the same presentation of the text as it would appear in an image, the image of text can remain.'
  },
  {
    violationid: 1243,
    media: 'Web',
    bestpractice: 'Ensure keyboard focus is not trapped',
    scenario: 'Focus becomes trapped',
    codesnippet: '[Issue]\nWhen _____, the keyboard focus becomes trapped. Users are not able to _____ to move away from the component.\n\n[Impact]\nWhen keyboard focus becomes trapped, keyboard only users including users who are blind or visually impaired and many users with mobility impairments will not be able to access other components on the page.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that when a component can receive keyboard focus, the user can use the keyboard to move away from the component using the keyboard. When moving away from the component requires more than unmodified arrow or tab keys or other standard exit methods, the user must be advised of the method for moving focus away.'
  },
  {
    violationid: 1244,
    media: 'Web',
    bestpractice: 'Ensure auto-updating dynamic content can be paused, stopped, or hidden',
    scenario: 'Slideshow does not have a pause mechanism',
    codesnippet: "[Issue]\nThe _____ slideshow plays automatically and does not have a mechanism to be paused, stopped or hidden.\n\n[Impact]\nWhen there is no method to pause, stop or hide the slideshow's auto-updating content, it can be distracting to some users with disabilities.",
    issuedescription: '[Recommendation]\nDevelopers must provide a method for the user to pause, stop, hide, or control the frequency of auto-updating or moving/blinking/scrolling content that starts automatically. For slideshows, it is generally recommended to include keyboard-accessible pause button with the slideshow controls.'
  },
  {
    violationid: 1249,
    media: 'Web',
    bestpractice: 'Ensure keyboard focus is indicated visually',
    scenario: 'Interactive element does not have visual indication of keyboard focus',
    codesnippet: '[Issue]\nThe _____ receives keyboard focus with the Tab key without any visual indication of this.\n\n[Impact]\nProviding a visual indication of the focus is particularly necessary for keyboard-only users who do not use the mouse and cannot simply click to place focus where they think it should be. The user must rely on the visual indication of focus to determine where an action will occur or determine what keystrokes to perform to move focus to the desired field.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that keyboard focus is displayed visually to all interactive elements. Typically the browser will provide keyboard focus for all standard interactive HTML elements, however developers can use custom visual indicators such as outlines or underlines using the focus pseudo-class. Avoid the use of CSS "outline: none" property.'
  },
  {
    violationid: 1352,
    media: 'Web',
    bestpractice: 'Ensure markup documents contain well-formed elements',
    scenario: 'Multiple elements have the same ID',
    codesnippet: '[Issue]\nElements on the page contain ID attributes that are not unique. Specific examples include the IDs: _____.\n\n[Impact]\nWhen IDs are not unique, this can cause errors in reference attributes which assistive technology may depend on to render content properly.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that the value of each ID attribute is unique on any given page.'
  },
  {
    violationid: 1581,
    media: 'iOS',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text smaller than 14pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text below 14pt in size must meet a minimum contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1581,
    media: 'iOS',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text between 14pt and 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1581,
    media: 'iOS',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text larger than 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1598,
    media: 'iOS',
    bestpractice: 'Provide valid labels for all form elements',
    scenario: 'Form element has a label visually but not programmatically',
    codesnippet: '[Issue]\nThe _____ does not provide an accessible label.\n\n[Impact]\nWhen form fields are not properly labeled, their identity will not be rendered properly by assistive technology to users with visual disabilities. The user may interact with the wrong form element or may not know which form field to interact with.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that accessibility labels provided for form elements are clear and concise. The accessibility label should generally match the visual label associated with input control. The accessibilityLabel property must be used to set the accessibility label.'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, states, and properties are valid',
    scenario: 'Element contains an aria reference attribute with an invalid ID',
    codesnippet: '[Issue]\nThe _____ element contains an attribute of _____, however the value does not match the ID of any element on the page.\n\n[Impact]\nWhen reference attribute values are invalid, assistive technology may not correctly function as expected.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that reference attributes contain the ID of a corresponding element.'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, states, and properties are valid',
    scenario: 'Multiple elements contain an aria reference attribute with the same ID',
    codesnippet: '[Issue]\nThe _____ elements contain an attribute of _____ and reference the same ID of _____.\n\n[Impact]\nWhen reference attribute values are not unique, assistive technology may not correctly function as expected.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that each reference attribute contains a unique ID of a corresponding element.'
  },
  {
    violationid: 1871,
    media: 'Web',
    bestpractice: 'Avoid inappropriate use of ARIA roles, states, and properties',
    scenario: 'Non-heading element has role="heading"',
    codesnippet: '[Issue]\nThe _____ text has a role of "heading", which is not valid for this element. The _____ text is not utilized properly as a heading.\n\n[Impact]\nWhen a non-heading element has a role of "heading", that element may be rendered by assistive technology as a heading element. Headings may provide the user with a way to navigate section-by-section through content. By applying headings incorrectly, users of assistive technology may be stripped of this useful navigation technique.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that the role attribute corresponds with the element\'s purpose. Developers should remove the role="heading" attribute for all elements that do not function as a heading.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, state, and properties are valid',
    scenario: 'Element contains an aria-expanded attribute even though it is being controlled by another element',
    codesnippet: '[Issue]\nThe _____ contains expandable content and has an aria-expanded attribute, even though its expanded state is being controlled by another element.\n\n[Impact]\nScreen reader users may expect the element containing the aria-expanded attribute to change the expanded state upon interaction. The control element should have the aria-expanded attribute instead.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure to use valid ARIA roles, states, and properties. Developers should remove the aria-expanded attribute from the expandable content and ensure that proper markup is used on the control element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1626,
    media: 'Web',
    bestpractice: 'Ensure ARIA roles, state, and properties are valid',
    scenario: '<article> element is not used properly',
    codesnippet: '[Issue]\nThe <article> element is used to _____.\n\n[Impact]\r\nArticle elements are intended for reuse for repeated formatting of content. When articles are used improperly, this can be confusing for users.',
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that semantic elements are used properly. The <article> markup should be removed and replaced with a _____ element.\r\n\r\nFor more information on the article element:\r\nhttps://www.w3.org/TR/2011/WD-html5-author-20110809/the-article-element.html'
  },
  {
    violationid: 1775,
    media: 'Web',
    bestpractice: 'Ensure layout tables indicate their use for presentation purposes',
    scenario: '<table> element is used for layout but lacks role="presentation"',
    codesnippet: '[Issue]\nThe _____ <table> element is used for presentation purposes, however its use as a layout table is not indicated.\n\n[Impact]\nWhen layout tables do not explicitly indicate they are solely for presentation purposes, user agents, assistive technology, and automated accessibility testing tools may not understand their layout purpose, and may instead incorrectly treat them as data tables.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that layout tables are indicated for presentation purposes by adding the attribute of role="presentation" to the <table> element.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1871,
    media: 'Web',
    bestpractice: 'Avoid inappropriate use of ARIA roles, states, and properties',
    scenario: 'Non-heading element has role="heading"',
    codesnippet: '[Issue]\nThe _____ text has a role of "heading", which is not valid for this element. The _____ text is not utilized properly as a heading.\n\n[Impact]\nWhen a non-heading element has a role of "heading", that element may be rendered by assistive technology as a heading element. Headings may provide the user with a way to navigate section-by-section through content. By applying headings incorrectly, users of assistive technology may be stripped of this useful navigation technique.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that the role attribute corresponds with the element\'s purpose. Developers should remove the role="heading" attribute for all elements that do not function as a heading.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1871,
    media: 'Web',
    bestpractice: 'Avoid inappropriate use of ARIA roles, states, and properties',
    scenario: '(Generic) Element has an uncessary and incorrect role applied',
    codesnippet: '[Issue]\nThe _____ is marked up as a _____, however it has an attribute of role="_____".\n\n[Impact]\r\nIncorrect roles can be misleading for users of assistive technology who depend on roles to understand an element\'s purpose. Users of assistive technology may expect this element to _____ instead of _____.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nUtilize the role that is included in _____ by default by removing the current role attribute altogether.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1871,
    media: 'Web',
    bestpractice: 'Avoid inappropriate use of ARIA roles, states, and properties',
    scenario: '(Generic) Element has an incorrect role applied',
    codesnippet: '[Issue]\nThe _____ has an attribute of role="_____" which does not accurately reflect its function of _____.\n\n[Impact]\nIncorrect roles can be misleading for users of assistive technology who depend on roles to understand an element\'s purpose. Users of assistive technology may expect this element to _____ instead of _____.\n\n[Code Sample]\n_____',
    issuedescription: "[Recommendation]\nChange the role to _____ to more accurately indicate the element's purpose.\n\n[Code Sample]\n_____"
  },
  {
    violationid: 1893,
    media: 'Web',
    bestpractice: 'Provide a descriptive dialog title',
    scenario: 'Dialog element or element with role="dialog" does not have an aria-label or aria-labelledby attribute',
    codesnippet: "[Issue]\nThe _____ dialog does not have an accessible title.\n\n[Impact]\nThe dialog's purpose may be visually apparent but can be difficult to understand using assistive technology such as screen readers.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nEnsure that all elements with a role of "dialog" have an appropriate aria-label or aria-labelledby attribute to provide an accessible title.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 1908,
    media: 'iOS',
    bestpractice: 'Ensure non-decorative images provide informative alternative text',
    scenario: 'Image that conveys meaning does not have alternative text',
    codesnippet: '[Issue]\nThe _____ is an image that conveys meaning, however it does not provide informative alternative text. Images in iOS are not accessibility enabled by default.\n\n[Impact]\nAlternative text that is default, or non-meaningful text, can negatively impact the accessibility of an image. The goal of the accessible text should be to present text which will provide the same level of understanding to those who cannot see the image as it does to those who can.',
    issuedescription: '[Recommendation]\nDevelopers must ensure to provide informative alternative text to all images that convey meaning. Developers should ensure that Accessible Label text is a concise and meaningful replacement for the image. It is strongly recommended that alt text should not exceed 80 characters.'
  },
  {
    violationid: 1909,
    media: 'iOS',
    bestpractice: 'Provide textual equivalents for all non-text elements including sounds and images',
    scenario: 'Element that conveys meaning does not have a textual equivalent',
    codesnippet: '[Issue]\nThe _____ is an element that conveys meaning, however it does not provide a textual equivalent.\n\n[Impact]\nWhen an accessible label is not provided for the _____, users who cannot view the _____ will not understand the purpose of it.',
    issuedescription: "[Recommendation]\nAll non-decorative objects must have 'Accessibility Enabled' within the xCode development environment and minimally have an accessibilityLabel attribute assigned."
  },
  {
    violationid: 1943,
    media: 'Android',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text smaller than 14pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text below 14pt in size must meet a minimum contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1943,
    media: 'Android',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text between 14pt and 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1943,
    media: 'Android',
    bestpractice: 'Ensure text and images of text provide sufficient contrast',
    scenario: 'Text larger than 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 1959,
    media: 'Android',
    bestpractice: 'Ensure focus is not forcibly shifted on input',
    scenario: 'Focus unexpectedly shifts to a different element while doing something else',
    codesnippet: '[Issue]\nWhile _____, focus automatically shifts from _____ to _____ without any initiation from the user.\n\n[Impact]\nWhen focus is forcibly shifted, users of assistive technology may have to use many gestures to return to their previous position. Forcibly shifted focus can be disorienting for users when they expect to be at a different location within the app.',
    issuedescription: '[Recommendation]\nDevelopers must remove keyboard focus shifts that the user does not control.'
  },
  {
    violationid: 1961,
    media: 'Android',
    bestpractice: 'Ensure navigation and input focus is indicated visually and programmatically',
    scenario: 'Item receives focus but does not have focus indicator',
    codesnippet: '[Issue]\nThe _____ receives focus but does not have a visual indication of this.\n\n[Impact]\nProviding a visual indication of the focus allows someone who is viewing the screen to determine what action to take based on what element has focus.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that navigation and input focus is indicated both on-screen and programmatically. Standard controls handle this automatically and assistive technologies provide a visual focus indicator to inform users of the location of the reading focus.'
  },
  {
    violationid: 1968,
    media: 'Android',
    bestpractice: 'Provide valid labels for all form elements',
    scenario: 'Form element has a label visually but not programmatically',
    codesnippet: '[Issue]\nThe _____ does not provide an accessible label.\n\n[Impact]\nWhen form fields are not properly labeled, their identity will not be rendered properly by assistive technology to users with visual disabilities. The user may interact with the wrong form element or may not know which form field to interact with.',
    issuedescription: '[Recommendation]\nEnsure that all form elements provide an accessible label. The android:labelFor property should be used to provide an accessible name for input controls.'
  },
  {
    violationid: 2049,
    media: 'Web',
    bestpractice: 'Provide synchronized captions for video (which includes audio) or other multimedia',
    scenario: 'Video with audio does not have synchronized captions',
    codesnippet: '[Issue]\nThe _____ video contains audio but does not provide synchronized captions.\n\n[Impact]\nPeople who are deaf or hard of hearing rely on captioning to indicate what is being spoken in the audio portion of the synchronized media.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that video provide the equivalent synchronized alternatives for all speech and other important audio. Ensure open or closed captioning is used for any presentations containing audio and video.'
  },
  {
    violationid: 2051,
    media: 'Web',
    bestpractice: 'Ensure that keyboard focus remains within modal dialogs',
    scenario: 'Items on page behind modal can receive keyboard focus',
    codesnippet: "[Issue]\nThe page behind the _____ is blocked visually, however its content still receives keyboard focus using the Tab key.\n\n[Impact]\nWhen focus is moved outside of the modal dialog, keyboard only users may be able to access content that is not active with the mouse but actionable from the keyboard via the screen reader's virtual cursor.",
    issuedescription: '[Recommendation]\r\nDevelopers must ensure that when a modal dialog is open, focus remains within the dialog. This can be done by using onFocus and onBlur and other JavaScript techniques to manage the focus appropriately. There are many techniques that can be used to meet this best practices.\r\n\r\nDevelopers must ensure that tab and shift+tab are handled appropriately. Ideally focus should wrap from the last element to the first element. It may also be beneficial to hide the rest of the page content from the screen reader user by setting aria-hidden="true" on the other page content.'
  },
  {
    violationid: 2426,
    media: 'Web',
    bestpractice: 'Ensure sufficient contrast is provided when background images are not available',
    scenario: 'Text smaller than 14pt has insufficient contrast when background image is disabled',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color when its background image is not available. Text below 14pt in size must meet a minimum contrast ratio of 4.5:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained if images are disabled..\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2426,
    media: 'Web',
    bestpractice: 'Ensure sufficient contrast is provided when background images are not available',
    scenario: 'Text between 14pt and 18pt has insufficient contrast when background image is disabled',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color when its background image is not available. Text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained if images are disabled..\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2426,
    media: 'Web',
    bestpractice: 'Ensure sufficient contrast is provided when background images are not available',
    scenario: 'Text larger than 18pt has insufficient contrast when background image is disabled',
    codesnippet: '[Issue]\nThe _____ does not provide sufficient contrast against its background color when its background image is not available. Text above 18pt in size must have a contrast ratio of 3:1.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all informative text and images of informative text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained if images are disabled..\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2435,
    media: 'Web',
    bestpractice: 'Provide a mechanism for skipping past repetitive links by means of visible links',
    scenario: 'Skip link exists but does not become visible upon receiving focus',
    codesnippet: '[Issue]\nWhen focusing on the _____ link, it does not become visible.\n\n[Impact]\nSighted keyboard-only users will not be able to determine where the skip navigation link is and will not be able to benefit from it.',
    issuedescription: '[Recommendation]\r\nIf a hidden skip navigation link is used, it must surface visually when the link gains keyboard focus. This can be done by using the focus pseudo class, changing the z-index, or moving the link on-screen and placing it on a blank area before the group of links such as at the top of the page when the link gains focus.'
  },
  {
    violationid: 2440,
    media: 'Web',
    bestpractice: 'Avoid use of placeholder values to label or explain input',
    scenario: 'Placeholder text is the same as label text',
    codesnippet: '[Advisory]\n\n[Issue]\nThe _____ inputs contain placeholder text that is identical to the label content.\n\n[Impact]\nUsing placeholder text with the exact same content as the label can cause issues with assistive technology and inform users of redundant information, possibly hindering their efficiency while navigating the page.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nUse the placeholder attribute to include input suggestions or examples for the user.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2440,
    media: 'Web',
    bestpractice: 'Avoid use of placeholder values to label or explain input',
    scenario: 'Form field uses a placeholder as its only label',
    codesnippet: '[Issue]\nThe _____ uses a placeholder attribute as its only label. The placeholder text should be a short hint intended to aid the user with data entry.\n\n[Impact]\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible name.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that the placeholder attribute is not a replacement for a label. It is recommended that developers use a programmatically associated <label> element, using the FOR attribute with a value that matches the ID of its corresponding input. If the placeholder attribute is also used, it is advised that the placeholder text should not be identical or redundant to the label text.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2440,
    media: 'Web',
    bestpractice: 'Avoid use of placeholder values to label or explain input',
    scenario: 'Form field uses placeholder text for a description.',
    codesnippet: '[Issue]\nThe _____ uses a placeholder attribute as a description. The placeholding text should be a short hint intended to aid the user with data entry.\n\n[Impact]\nThe placeholder may not be available to assistive technology and thus may not be relied upon to convey an accessible description.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that the placeholder attribute does not contain a description. To include a description, it is recommended that developers either include a short description in the label element or include the description text in its own element. Descriptions must be programmatically associated with their inputs. This is done by adding an aria-describedby attribute to the input, with a value that matches the ID attribute of its corresponding description.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    scenario: 'Link text smaller than 14pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text below 14pt in size must meet a minimum contrast ratio of 4.5:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    scenario: 'Link text between 14pt and 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text between 14pt and 18pt in size must have a contrast ratio of 4.5:1 or be bold with a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2445,
    media: 'Web',
    bestpractice: 'Ensure link text provides sufficient contrast',
    scenario: 'Link text larger than 18pt has insufficient contrast',
    codesnippet: '[Issue]\nThe _____ link does not provide sufficient contrast against its background color. Link text above 18pt in size must have a contrast ratio of 3:1, including focus and hover states.\n\nForeground color: _____\nBackground color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that sufficient contrast is provided for all link text. Developers should modify the foreground and/or background color so that a sufficient contrast ratio is attained, including focused and hover states as well.\n\nStandard text smaller than 18pt must have a contrast ratio of 4.5:1 or higher. Text larger than 18pt or bold text larger than 14pt must have a contrast ratio of 3:1 or higher.\n\nConsider viewing the Color Contrast Checker:\nhttps://www.levelaccess.com/color-contrast-checker/'
  },
  {
    violationid: 2519,
    media: 'Web',
    bestpractice: 'Ensure ARIA regions, landmarks and HTML sections are identifiable',
    scenario: 'Multiple navigation items exist, but one of them does not have a label, visually or programmatically',
    codesnippet: '[Issue]\nThere are multiple elements on the page with a role of navigation, however _____ not have an accessible label. When two or more elements of the same region, landmark, or sections are used, they must all be identifiable among one another.\n\n[Impact]\nWhen there are two or more regions, landmark, or sections of the same type without accessible labels, users of screen readers may have trouble locating the correct section or understanding its purpose.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nWhen there is ambiguity about an ARIA region, landmark or HTML section, developers must ensure that these elements contain meaningful accessible labels to assist users of screen readers to identify and distinguish the section, region or landmark. Developers can add an aria-label attribute to identify these regions.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2590,
    media: 'iOS',
    bestpractice: 'Ensure speech is not the only means to access content',
    scenario: 'Functionality requires that the user speaks',
    codesnippet: '[Issue]\nThe _____ requires that the user speaks in order to _____. Systems must have an alternative means of accessing information other than user speech.\n\n[Impact]\nSystems that require user speech, including biometric speech, input as the sole means of accessing information may not be accessible by persons who are unable to speak or who have speech impairments.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that a system does not solely require voice recognition, speech control or voice activation to access the information. For systems that rely on user speech, additional methods must be provided for access. This includes when speech is used for biometric identification. Developers should provide an alternative method that does not require speech such as via another input device such as a keyboard.'
  },
  {
    violationid: 2607,
    media: 'Web',
    bestpractice: 'Provide text equivalents for icon fonts',
    scenario: 'Icon conveys meaning and does not have a text equivalent',
    codesnippet: '[Issue]\nThe _____ uses an icon which conveys information that is not presented elsewhere.\n\n[Impact]\nScreen reader users will not have access to the information conveyed by the icon without text equivalents. When icon fonts are used, the icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must address the accessibility of the icon for all users with disabilities. When an icon conveys meaning, developers should add a textual alternative with the use of sr-only text.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2607,
    media: 'Web',
    bestpractice: 'Provide text equivalents for icon fonts',
    scenario: 'Anchor or BUTTON element uses an icon as its visual label, however it has no textual label',
    codesnippet: '[Issue]\nThe _____ uses an icon as its visual label. There is no textual equivalent provided to label this element.\n\n[Impact]\nScreen reader users will not have access to the information conveyed by the icon without text equivalents. When icon fonts are used, the icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Screen reader users may not know how to interact with this element.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must address the accessibility of the icon for all users with disabilities. When an icon is used to visually label an interactive element, developers should add a title, aria-label, or SR-only text to the interactive element to provide a textual name for assistive technology.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2607,
    media: 'Web',
    bestpractice: 'Provide text equivalents for icon fonts',
    scenario: 'Error messages uses an icon as its only method of indication',
    codesnippet: '[Issue]\nAfter triggering an error by _____, the resulting error message is only indicated to users with an icon.\n\n[Impact]\nThe icon may not be seen at all by assistive technology as CSS is purposely presentational and should not be used to provide content. Because this icon is the only indication of the error message, it is considered informative.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that text equivalents are provided for informative icon fonts. Errors must be explicitly indicated. This can be done by appending off-screen text to the beginning of the error message to communicate this information to screen-reader users.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2895,
    media: 'Web',
    bestpractice: 'Provide synchronized audio description for video (which includes audio) or other multimedia',
    scenario: 'Video does not have any audio descriptions',
    codesnippet: '[Issue]\nThe _____ video does not have synchronized audio descriptions available.\n\n[Impact]\nUsers who are blind or visually impaired rely on audio description to describe the actions that take place in the video portion of multimedia.',
    issuedescription: '[Recommendation]\nDevelopers must include audio descriptions for all meaningful visual content in the multimedia presentation. Developers may find it useful to create a secondary audio track with these audio descriptions and the typical audio included, which can be enabled by one of the video controls.\n\nFor more information on synchronized audio descriptions:\nhttps://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html'
  },
  {
    violationid: 2896,
    media: 'Web',
    bestpractice: 'Ensure that content and functionality is available when the user overrides text spacing properties',
    scenario: 'Text gets cut off or obscured when overriding text spacing properties',
    codesnippet: '[Issue]\nWhen using custom text spacing properties to improve readability, the _____ text becomes _____.\n\n[Impact]\nUsers with low vision or cognitive impairments may need to use custom text spacing properties. When text becomes obscured upon its spacing properties being overridden, these users may no longer be able to perceive this content.',
    issuedescription: '[Recommendation]\nDevelopers must ensure that text spacing can be increased without obscurity. Line height must be able to adapt to 1.5 times the font size, letter spacing must be able to adapt to 0.12 times the font size, word spacing must be able to adapt to 0.16 times the font size, and spacing underneath paragraphs must be able to adapt to 2 times the font size.'
  },
  {
    violationid: 2903,
    media: 'Web',
    bestpractice: "Ensure the visible text label for a control is included in the control's accessible name",
    scenario: 'Control has a different accessible name than its visible text label',
    codesnippet: "[Issue]\nThe _____ contains a visible text label of _____, even though it is read out by screen readers as _____.\n\n[Impact]\nSpeech input users often navigate by speaking text from a control's visible label. When the accessible name does not match the visible text label or includes the text from the visible label, users will not be able to easily access that interface control.\r\n\r\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nDevelopers need to make sure the visible text labels match accessible names or include any text of the visible label. The accessible name can either be the same as the visible label or have the text of the visible label in it -- preferably, but not required, at the start of the name.\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2908,
    media: 'Web',
    bestpractice: 'Ensure the purpose of user interface components, icons, and regions can be programmatically determined',
    scenario: 'Repeated components do not use regions to define their boundaries',
    codesnippet: "[Issue]\nThe _____ component appears to be reused multiple times. The boundaries of this component are not programmatically defined.\n\n[Impact]\nWhen reused components are contained within generic elements, its starting and ending boundaries are not defined. Although the boundaries may be obvious visually, screen reader users might not know where the component's content starts and ends.\n\n[Code Sample]\n_____",
    issuedescription: '[Recommendation]\nUse the <article> element to contain related content, the format of which can be reused. Ensure to label the article with an aria-label or aria-labelledby attribute so that the name of the article is rendered to assistive technology at each boundary.\n\nFor more information on the article element:\nhttps://www.w3.org/TR/html50/sections.html#the-article-element\n\n[Code Sample]\n_____'
  },
  {
    violationid: 2909,
    media: 'Web',
    bestpractice: 'Ensure active user interface components have sufficient contrast',
    scenario: 'Interface component does not have enough contrast against background',
    codesnippet: '[Issue]\nThe _____ is an active interface component that does not provide sufficient contrast against the adjacent background color.\n\nComponent color: _____\nAdjacent background color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must give identifying portions of active user interface components a contrast ratio of at least 3:1 with adjacent colors, including states such as focus, hover, selected, and current item. It is not required that controls have a visual boundary indicating the hit area, but that if there is an indicator, then it must have sufficient contrast.'
  },
  {
    violationid: 2930,
    media: 'Android',
    bestpractice: 'Ensure active user interface components have sufficient contrast',
    scenario: 'Active interface component does not have enough contrast against background',
    codesnippet: '[Issue]\nThe _____ component that does not provide sufficient contrast against the adjacent background color.\n\nComponent color: _____\nAdjacent background color: _____\nContrast ratio: _____\n\n[Impact]\nSufficient contrast ensures that people with low vision, people who are color blind, users viewing the page without color, and users of monochrome screens can understand page content.',
    issuedescription: '[Recommendation]\nDevelopers must give identifying portions of active user interface components a contrast ratio of at least 3:1 with adjacent colors. It is not required that controls have a visual boundary indicating the hit area, but that if there is an indicator, then it must have sufficient contrast.'
  },
  {
    violationid: 3159,
    media: 'Web',
    bestpractice: 'Ensure all interactive functionality is operable with the keyboard',
    scenario: 'Interactive generic element receives focus but cannot be activated with the keyboard',
    codesnippet: '[Issue]\nThe _____ receives keyboard focus with the Tab key, however it does not function as expected upon keyboard activation.\n\n[Impact]\nWhen interactive elements cannot be operated with the keyboard, users who rely on the keyboard such as mobility-impaired users and screen reader users may not be able to perform the intended function.\n\n[Code Sample]\n_____',
    issuedescription: '[Recommendation]\nDevelopers must ensure that all interactive elements can be operated with the keyboard. Standard HTML elements such as input fields, buttons, and anchor tags will automatically be operable by keyboard, and are generally recommended when creating interactive elements.\n\nTo make a generic container element operable by keyboard, developers must add an additional handler for keyboard events. Developers must also ensure to add a proper role attribute to the element to be announced properly to assistive technology.\n\n[Code Sample]\n_____'
  }
];

// function to initiate everything
const init = () => {
  // cache necessary elements
  const changeBpButton = document.getElementById('ChgBPNow');
  const codeSnippetTextArea = document.querySelectorAll('textarea')[0];
  const issueDescriptionTextArea = document.querySelectorAll('textarea')[1];
  let bestPracticeSelectList = codeSnippetTextArea.parentNode.parentNode.previousSibling.lastChild;
  if (bestPracticeSelectList.nodeName === 'TD') {
    bestPracticeSelectList = bestPracticeSelectList.lastChild;
  }
  // create/render container and elements
  const jamesContainer = document.createElement('div');
  const scenarioSelectList = document.createElement('select');
  scenarioSelectList.id = 'scenarioSelectList';
  scenarioSelectList.style.display = 'none';
  jamesContainer.appendChild(scenarioSelectList);
  const fillButton = document.createElement('button');
  fillButton.textContent = 'Autofill';
  fillButton.classList.add('kpmFirstButton');
  fillButton.style.display = 'none';
  jamesContainer.appendChild(fillButton);
  const patternButton = document.createElement('button');
  patternButton.textContent = 'Patternize';
  patternButton.classList.add('kpmFirstButton');
  patternButton.style.display = 'none';
  jamesContainer.appendChild(patternButton);
  bestPracticeSelectList.parentNode.appendChild(jamesContainer);
  // render pattern button and pattern text if it's a pattern
  const isPattern = window.location.href.includes('pattern_id');
  patternButton.style.display = isPattern ? 'block' : 'none';
  const patternText = isPattern ? `[Pattern: ${bestPracticeSelectList.parentNode.parentNode.previousSibling.firstElementChild.firstElementChild.textContent.substring(18)}]${'\n\n'}` : '';

  // function to create the list of violations
  const renderScenarioSelectList = violations => {
    if (violations.length) {
      scenarioSelectList.innerHTML = '';
      violations.forEach(violation => {
        const specificItem = document.createElement('option');
        specificItem.textContent = violation.scenario;
        scenarioSelectList.appendChild(specificItem);
      });
      scenarioSelectList.style.display = 'block';
      fillButton.style.display = 'block';
    } else {
      scenarioSelectList.style.display = 'none';
      fillButton.style.display = 'none';
    }
  };
  // function to fill all the inputs
  const fillInputs = e => {
    e.preventDefault();
    const specificListValue = document.getElementById('scenarioSelectList').value;
    const chosenBestPractice = bestPractices.find(bestPractice => bestPractice.scenario === specificListValue);
    codeSnippetTextArea.value = patternText;
    codeSnippetTextArea.value += chosenBestPractice.codesnippet;
    issueDescriptionTextArea.value = chosenBestPractice.issuedescription;
  };

  const insertPatternText = e => {
    e.preventDefault();
    const issueIndex = codeSnippetTextArea.value.indexOf('[Issue]');
    const replacementText = issueIndex !== -1 ? codeSnippetTextArea.value.substr(issueIndex) : codeSnippetTextArea.value;
    codeSnippetTextArea.value = patternText;
    codeSnippetTextArea.value += replacementText;
  };

  // add event listeners
  bestPracticeSelectList.addEventListener('change', e => {
    const violations = bestPractices.filter(bestPractice => bestPractice.violationid === Number(e.target.value));
    renderScenarioSelectList(violations);
  });
  changeBpButton.addEventListener('click', () => {
    setTimeout(() => {
      bestPracticeSelectList.dispatchEvent(new Event('change'));
    }, 0);
  });
  fillButton.addEventListener('click', fillInputs);
  patternButton.addEventListener('click', insertPatternText);

  const closeScript = () => {
    // remove event listeners
    bestPracticeSelectList.removeEventListener('change', e => {
      const violations = bestPractices.filter(bestPractice => bestPractice.violationid === Number(e.target.value));
      renderScenarioSelectList(violations);
    });
    changeBpButton.removeEventListener('click', () => {
      setTimeout(() => {
        bestPracticeSelectList.dispatchEvent(new Event('change'));
      }, 0);
    });
    fillButton.removeEventListener('click', fillInputs);
    patternButton.removeEventListener('click', insertPatternText);
    listenForOpen();
  };

  const listenForClose = () => {
    if (document.getElementById('ChgBPNow')) {
      setTimeout(listenForClose, 50);
    } else {
      closeScript();
    }
  };

  listenForClose();
};

const listenForOpen = () => {
  if (document.getElementById('ChgBPNow')) {
    init();
  } else {
    setTimeout(listenForOpen, 50);
  }
};

listenForOpen();
