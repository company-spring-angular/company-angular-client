# company-angular-client — an example of integration AngularJS client with SpringMVC REST service 

This project is an example of integration a typical [AngularJS](http://angularjs.org/) web app with [SpringMVC](http://spring.io/) REST service application.

The project contains a simple AngularJS client application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

SpringMVC application code can be found at [company-spring-rest](https://github.com/company-spring-angular/company-spring-rest).

## Getting Started

To get you started you can simply clone the company-angular-client repository and install the dependencies:

### Prerequisites

You need git to clone the company-angular-client repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test company-angular-client. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone company-angular-client

Clone the company-angular-client repository using [git][git]:

```
git clone --depth=1 https://github.com/company-spring-angular/company-angular-client.git
cd company-angular-client
```

### Client application

#### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so from company-angular-client directory we can simply do :

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
company-angular-client changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

#### Run the Application

We have preconfigured the client project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.

#### Directory Layout

```
app/                    --> all of the source files for the application
  components/           --> all app specific modules
    services/              --> service related components
      CompanyService.js       --> company service used for connecting with REST server
  views/                --> all of the view files
    common/                --> all common view templates
        _form.html            --> creation/update form view template
    detail/                --> all detail related views
        detail.html           --> detail view template
    list/                  --> all listing related views
        list.html             --> listing view template
    new/                   --> all creation related views
        new.html              --> creation view template
    update/                --> all update related views
        update.html           --> update view template
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```


#### Running the App during Development

The company-angular-client project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


#### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Example command:
```
http-server app/ -a localhost -p 8000
```

or
```
npm start
```

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and webserver(s).

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
