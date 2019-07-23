SHA=$(git rev-parse HEAD)

docker build -t sssuthe/todo-list-client:latest -t sssuthe/todo-list-client:$SHA .

docker push sssuthe/todo-list-client:latest

docker push sssuthe/todo-list-client:$SHA
