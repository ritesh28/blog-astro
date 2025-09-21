---
title: A Comprehensive Guide to Using NestJS with JavaScript
pubDate: 2025-04-18
imageURL: "/content-image/nestjs.png"
tags: ["nest.js", "back-end", "javaScript"]
slug: a-comprehensive-guide-to-using-nestjs-with-javascript
---

# A Comprehensive Guide to Using NestJS with JavaScript

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It’s built with TypeScript by default but also supports JavaScript, making it easy to get started for developers familiar with either. Inspired by Angular, NestJS uses a modular architecture that helps in building maintainable and testable applications.

In this blog post, we'll dive into how to use NestJS with JavaScript, covering the installation, basic usage, and common troubleshooting tips.

## What is NestJS?

NestJS is a framework for building server-side applications using Node.js. It is built on top of Express (by default) or Fastify and provides an out-of-the-box application architecture. It uses decorators, modules, controllers, and services to manage different parts of an application, making it easy to scale.

NestJS leverages TypeScript to offer advanced features like static typing, interfaces, and powerful tools for developing applications. However, if you are more comfortable with JavaScript, you can use NestJS without needing to dive into TypeScript.

## Why Use NestJS?

There are several reasons to use NestJS for building backend applications:

- **Modular Architecture**: NestJS promotes the use of modules, which allows for better organization and reusability of code.
- **Built-in Dependency Injection**: This feature improves the management of services and makes testing easier.
- **Scalability**: The architecture is designed for building scalable applications with a focus on maintainability.
- **Integrated with Popular Libraries**: NestJS integrates seamlessly with libraries like TypeORM, Mongoose, Passport, and more.
- **Developer Productivity**: The framework comes with a CLI to help automate common tasks like generating modules, controllers, and services.
- **Supports Multiple Transport Layers**: You can build microservices or RESTful APIs, and even integrate WebSockets or GraphQL.

## Setting Up a NestJS Project

### Installation

To get started with NestJS, you need to have Node.js and npm (or Yarn) installed on your system. You can check if they're installed by running:

```bash
node -v
npm -v
```

After ensuring Node.js and npm are installed, install the NestJS CLI globally using the following command:

```bash
npm install -g @nestjs/cli
```

Create a new NestJS project by running:

```bash
nest new my-nestjs-app
cd my-nestjs-app
npm run start
```

This will create a new NestJS application in the `my-nestjs-app` directory and start the development server. You can access it by navigating to `http://localhost:3000` in your browser.

### Creating a Basic Module

In NestJS, everything is organized into modules. A module is a class annotated with a `@Module()` decorator that bundles related components like controllers and services.

1. **Generate a Module**:

```bash
nest generate module users
```

This command generates a `users` module in the `src/users` directory.

2. **Modify the Module**:

```javascript
// src/users/users.module.js
const { Module } = require("@nestjs/common");
const { UsersController } = require("./users.controller");
const { UsersService } = require("./users.service");

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
class UsersModule {}

module.exports = { UsersModule };
```

### Creating a Controller

Controllers handle incoming requests and return responses. They are responsible for defining routes.

1. **Generate a Controller**:

```bash
nest generate controller users
```

This generates a `users.controller.js` file.

2. **Modify the Controller**:

```javascript
// src/users/users.controller.js
const { Controller, Get } = require("@nestjs/common");
const { UsersService } = require("./users.service");

@Controller("users")
class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }
}

module.exports = { UsersController };
```

### Creating a Service

Services handle business logic and data management. They are typically used by controllers to get the data that needs to be sent in the response.

1. **Generate a Service**:

```bash
nest generate service users
```

2. **Modify the Service**:

```javascript
// src/users/users.service.js
class UsersService {
  findAll() {
    return ["User1", "User2", "User3"];
  }
}

module.exports = { UsersService };
```

### Wiring It All Together

Now, make sure to import the `UsersModule` into the main app module to register it.

```javascript
// src/app.module.js
const { Module } = require("@nestjs/common");
const { UsersModule } = require("./users/users.module");

@Module({
  imports: [UsersModule],
})
class AppModule {}

module.exports = { AppModule };
```

### Running the Application

After all the changes are done, run the following command to start the server:

```bash
npm run start
```

Visit `http://localhost:3000/users` to see the list of users returned by your service.

## Working with Middleware in NestJS

Middleware in NestJS is used to perform tasks like logging, validation, and authentication. It is typically defined as a function that executes before the route handler.

1. **Create a Middleware**:

```javascript
// src/common/middleware/logger.middleware.js
class LoggerMiddleware {
  use(req, res, next) {
    console.log("Request...", req.method, req.url);
    next();
  }
}

module.exports = { LoggerMiddleware };
```

2. **Apply Middleware to a Route**:

You can apply middleware globally or to specific routes.

```javascript
// src/app.module.js
const { Module, NestModule, MiddlewareConsumer } = require("@nestjs/common");
const { UsersModule } = require("./users/users.module");
const { LoggerMiddleware } = require("./common/middleware/logger.middleware");

@Module({
  imports: [UsersModule],
})
class AppModule {
  configure(consumer) {
    consumer.apply(LoggerMiddleware).forRoutes("users");
  }
}

module.exports = { AppModule };
```

Now, the logger middleware will log every request to the `/users` endpoint.

## Working with Databases in NestJS

NestJS supports several database libraries like TypeORM, Sequelize, and Mongoose for MongoDB. Here’s an example of how you can integrate MongoDB using Mongoose:

1. **Install Dependencies**:

```bash
npm install @nestjs/mongoose mongoose
```

2. **Define a Schema**:

```javascript
// src/users/schemas/user.schema.js
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = { UserSchema };
```

3. **Inject Mongoose Model**:

```javascript
// src/users/users.service.js
const { Injectable } = require("@nestjs/common");
const { InjectModel } = require("@nestjs/mongoose");
const { Model } = require("mongoose");
const { UserSchema } = require("./schemas/user.schema");

@Injectable()
class UsersService {
  constructor(@InjectModel("User") model) {
    this.model = model;
  }

  async findAll() {
    return this.model.find();
  }
}

module.exports = { UsersService };
```

4. **Register the Mongoose Module**:

```javascript
// src/app.module.js
const { Module } = require("@nestjs/common");
const { MongooseModule } = require("@nestjs/mongoose");
const { UsersModule } = require("./users/users.module");

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nestjs-demo"),
    UsersModule,
  ],
})
class AppModule {}

module.exports = { AppModule };
```

## Testing in NestJS

NestJS supports testing with Jest by default. You can test controllers, services, and modules.

1. **Testing a Service**:

```javascript
// src/users/users.service.spec.js
const { Test } = require("@nestjs/testing");
const { UsersService } = require("./users.service");

describe("UsersService", () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return an array of users", () => {
    expect(service.findAll()).toEqual(["User1", "User2", "User3"]);
  });
});
```

## Troubleshooting Common Nest

JS Issues

### Module Not Found Error

This issue typically arises when there is a misconfiguration in your module or file path. Double-check that all modules and components are correctly imported and exported. Also, ensure that your `main.js` file is correctly bootstrapping the `AppModule`.

### Dependency Injection Issues

If you see errors related to dependency injection, ensure that the service is properly registered in the module's `providers` array. Also, verify that the correct service is being injected into the controller or provider.

### 404 Not Found Error

A 404 error often occurs when a route is not correctly defined or the path is incorrect. Make sure that your controllers have the proper decorators (e.g., `@Controller()`, `@Get()`, `@Post()`) and that the routes are properly defined in the controller.

### Database Connection Errors

If you're facing issues with database connectivity, check that:

- Your database server is running.
- You have the correct connection string.
- You have the necessary permissions to connect to the database.

---

## Conclusion

NestJS is an excellent framework for building scalable and maintainable server-side applications. Its modular architecture, built-in features like dependency injection, and integration with popular databases and libraries make it a top choice for modern backend development.

In this blog, we've covered how to get started with NestJS using JavaScript, created a basic app with modules, controllers, and services, and explored some common troubleshooting techniques. NestJS’s powerful tools and ease of use make it a great option for building modern applications.
