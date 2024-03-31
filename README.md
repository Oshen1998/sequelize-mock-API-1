
# Structure of the Project Root

backend
│
└─── dist                   # All the JavaScript files are here
└─── lib                    # All the TypeScript files are here
      └─── config           # App configurations files
            └─── app.ts    # App starting point            
      └─── controllers     # Request managers
      └─── modules         # Schemas, interfaces, services
      └─── routes          # Define the endpoints
      └─── environment.ts  # Store all environment variables
      └─── server.js       # HTTP server that listens to server port
└─── .gitignore             # Git ignore file
└─── package-lock.json     # Automatically generated document by npm
└─── package.json          # Holds metadata and npm package list
└─── tsconfig.json         # Specify the root level files and the compiler options
