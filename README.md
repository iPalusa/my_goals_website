### Build Your Personal Website (FRONTEND TASK)

#### Study Material
- [FreeCodeCamp HTML & CSS Course](https://www.freecodecamp.org/news/html-css-11-hour-course/)
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [Responsive Web Design Guide](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode)
- [HTMLImageElement Documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalHeight)
- [GitHub Pages Guide](https://docs.github.com/articles/creating-project-pages-manually)

#### Task
Create and host a simple single-page website outlining your goals for the next 2 years in the tech field. The website should be:
- Visually appealing
- Mobile-friendly
- Built using HTML, CSS, and JavaScript only

Each required element should have a specified `data-testid` attribute for easy identification and testing.

#### Requirements
- **Languages**: Only HTML, CSS, and JavaScript allowed.
- **Responsiveness**: The website must be responsive and function well on all devices (desktop, tablet, mobile).
- **Images**: All images used on the website must have natural dimensions (width and height specified in the image file itself). Websites with images that don't have natural dimensions will be automatically disqualified.
- **Required Elements**:
  - **Slack Name**: Display your Slack Display Name.  
    Attribute: `data-testid="slackDisplayName"`
  - **Current Time in UTC**: Display the current time in UTC.  
    Attribute: `data-testid="currentTimeUTC"`
  - **Current Day of the Week**: Display the current day of the week (e.g., Monday, Friday).  
    Attribute: `data-testid="currentDay"`
  - **Slack Email**: Display your Slack Email.  
    Attribute: `data-testid="slackEmail"`
  - **Slack Profile Picture**: Display your Slack Profile Picture.  
    Attribute: `data-testid="slackProfilePicture"`
    - Dimensions: The image must have natural dimensions (width and height specified in the image file itself) and be added to the page in its original size (natural width and natural height).
  - **Links**:
    - Add a link to [hng.tech/learn](https://hng.tech/learn).  
      Attribute: `data-testid="hngLink"`
    - Add a link to [keyword.dog](https://keyword.dog).  
      Attribute: `data-testid="keywordLink"`
    - Add a link to [scrapeanyweb.site](https://scrapeanyweb.site).  
      Attribute: `data-testid="scrapeanywebLink"`

#### Acceptance Criteria
- **Content**: The website should clearly outline your tech goals for the next 2 years.
- **Visuals**: The website should be visually appealing and well-organized.
- **Functionality**: 
  - All links should function properly and direct users to the specified websites (hng.tech/learn, keyword.dog, scrapeanyweb.site).
  - The website should be fully responsive and adjust to different screen sizes.
- **Code Quality**: 
  - The code should be well-structured, indented, and easy to read.
  - Each required element should have a unique `data-testid` attribute assigned.
- **Accuracy**:
  - Your Slack name should correspond to the actual data.
  - Your Slack profile picture dimension must be in its original size (make sure the image has natural dimensions).
- **Data-Attributes Adherence**: 
  - Every specified detail on the page should correctly have the `data-testid` attribute as indicated above, ensuring easy identification during any potential testing.

#### Submission Mode
- Submit your task through the designated submission form. Ensure you've:
  - Hosted the page on a platform of your choice (e.g., Vercel, GitHub Pages, Netlify).
  - Double-checked all requirements and acceptance criteria.
  - Provided the hosted page's URL in the submission form.
  - Thoroughly reviewed your work to ensure accuracy, functionality, and adherence to the specified guidelines before you submit it.
