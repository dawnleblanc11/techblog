# techblog
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts and comments if any have been posted; navigation links for the homepage and the dashboard; and the option to log in- COMPLETE
WHEN I click on the homepage option
THEN I am taken to the homepage- COMPLETE
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in- COMPLETE
WHEN I choose to sign up - NOT WORKING
THEN I am prompted to create a username and password
WHEN I click on the sign-up button- COMPLETE
THEN my user credentials are saved and I am logged into the site- NOT WORKING
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts and comments that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment- COMPLETE
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created- COMPLETE (need to be sent back to the main page?)
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post- COMPLETE
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post- COMPLETE
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post- COMPLETE
WHEN I click on one of my existing posts in the dashboard- CURRENTLY USING A BUTTON
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site- WORKING
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments- ADD PROMPT TO LOGIN