
## Build Setup 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production and run
npm run build
rm -rf templates
cp -r dist templates
rm -rf static
cp -r dist/static static
sudo python QuestionServer.py

# build for production and view the bundle analyzer report
npm run build --report
```
