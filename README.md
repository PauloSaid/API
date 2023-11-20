# Docs
### What's an API?
API is a way to interact with a computer or system to retrieve information or perform a function, an API helps you communicate what you want to that system so it can understand and fulfill the request.

- [Enviroment Setup](#enviroment-setup)
- Setup Express Server
- Prisma Setup


## Enviroment Setup

### 1. initialize a project and create the package.json file:

```npm init -y```

## 2. Installing Typescript

```npm install typescript --save-dev```

### 2.1

```npm install typescript ts-node @types/node --save-dev```


## 3. Initialize and properly configure TypeScript

```npx tsc --init```

I am actually using these configurations:

```{
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## 4. Installing Prisma (ORM)
### Installing prisma
npm install prisma --save-dev

## 5. Setting up Prisma with the init command of the Prisma CLI
### OBS.: I'm using SQLite as DBMS
npx prisma init --datasource-provider sqlite

## 6. Installing Express
### Installing express
```npm install express --save```

### 6.1 Also, you need to install express types
```npm i --save-dev @types/express```
