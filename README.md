#Jekyll SPT (Single Page Template)

Welcome to the Jekyll Single Page Template. It is based off of the [single_page_template](https://github.com/democrats/frontend-templates/tree/master/jekyll_spt) with some modifications for Jekyll compatibility.

Clone then copy the template into your repo to get started

`cp -R PATH/TO/frontend-templates/jekyll_spt/ PATH/TO/YOUR-REPO/`

cd into your repo and run `jekyll serve --watch` to start your local jekyll host.

Go to `localhost:4000` to see it in action and `localhost:4000/admin` to access the admin panel

## Development

Once you have the template copied to your repo, you can add the meta data through the config.yml

### config.yml

Open `_config.yml` file and edit the following fields to be included in your metadata:

`title`
The title of your site

`description`
The short description of your site for SEO and social share.

`meta_img`
The image card for social share

`url`
The domain of your site.

### HTML/Homepage

Jekyll Admin supports full fledged websites that use layouts to display content on pages. The jekyll_spt is initially set up for a single page microsite that you can modify.

Open `_layouts/html` to edit the structure of the homepage.

Below is a list of what each variable displays and how to edit them:
`{{ site.title }}` comes from the `title` object in `_config.yml`

`{{ page.title }}` comes from the `index.md` title

`{{ content }}` comes from the body of `index.md`

If you want to apply this layout to other pages, add `layout: index` to each page's frontmatter.

### SASS

Open `_sass/_custom.scss` and start adding your custom styles. See the [single_page_template readme](https://github.com/democrats/frontend-templates/tree/master/jekyll_spt) for a full rundown on how to update the core styles if you wish to do so.

### JS

Add javascript files to `_includes/js/`, then include the js file with liquid in `theme_functions.js`(in the root). Ex: `{% include js/social_links.js %}`. All js files will concatenate in `js/theme_functions.js` and load at the bottom of `index.html`.

### Images

Although it's possible to add images through Jekyll Admin's Static Files, I have added an images folder that has an image minifier for page load optimization. Follow the instruction below to install dependencies and run the image minifier

1. cd into your repo
2. run `npm install`
3. run `grunt`

Grunt will then watch for new images to be added and place the minified images in the `min_images` folder.

## Deployment

Once you are satisfied with your jekyll site, you can deploy it through Jenkins. But first you will need to update the files in the `config` folder. Systems will also need to know the domain name and the preferred admin name (typically admin.domain.com).

### Config

Basically, you will need to edit two files: `ansible/group_vars/all` and `terraform/production.tfvars`. Detailed information on what to modify in each file can be found in the [config readme](config/infrastructure/README.md).

### Jenkins

1. Once you set up the config files, go to https://jenkins2.dnc.org

2. Select `Systems` > `Templates` > `Jekyll Site`

3. Select `Build with Parameters` to create a new deploy

4. Fill the fields with the necessary params. Each field is detailed below:

  `APP_NAME`  
  Add the repo name and the domain in parenthesis. Ex) repo-name (site.com)

  `PROJECT`  
  Leave as `None`, unless the site is on a democrats.org submdomain. If that's the case, select `sites.democrats.org`

  `APP_REPO`
  Paste the SSH git clone url (clone or download > Use SSH). Ex: `git@github.com:democrats/microsite.git`

  `APP_BRANCH`
  Leave as `Master`

5. Select `Build` and you're done.
