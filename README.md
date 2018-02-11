To import user data

mongoimport --db journoAPI --collection users --drop --file resources/seed-data/users.json


To import blog data

mongoimport --db journoAPI --collection blogs --drop --file resources/seed-data/blogs.json

To import author data

mongoimport --db journoAPI --collection authors --drop --file resources/seed-data/authors.json
