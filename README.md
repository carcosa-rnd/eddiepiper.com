# eddiepiper.com

## Deployment

1. Build your application using this command.  
   `yarn build`

2. Change your directory to build folder.  
   `cd dist/`

3. Create a CNAME file.  
   `touch CNAME`

4. Open the CNAME file and add the web url.  
   `eddiepiper.com`

5. Add dist to changes to be commited.  
   `git add dist -f`

6. Commit the changes.  
   `git commit -m "add dist"`

7. Push it to gh-pages branch.  
   `git subtree push --prefix dist origin gh-pages`
