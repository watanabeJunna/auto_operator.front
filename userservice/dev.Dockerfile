FROM golang:1.12.9-alpine3.10

RUN set -eux; \
    apk add --no-cache git curl protobuf \
    && go get -u google.golang.org/grpc \
    && go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
    && go get -u github.com/golang/protobuf/protoc-gen-go \
    && go get -u go.mongodb.org/mongo-driver/bson \
    && go get -u go.mongodb.org/mongo-driver/mongo \
    && go get -u go.mongodb.org/mongo-driver/mongo/options \
    && curl -L -o /tmp/protobuf.tar.gz https://github.com/google/protobuf/releases/download/v3.0.0/protoc-3.0.0-linux-x86_64.zip \
    && unzip /tmp/protobuf.tar.gz -d /tmp/. \
    && mv /tmp/include /usr/local/. \
    && rm -rf /tmp/* \
    && mkdir $GOPATH/src/user

RUN echo "up() { for c in \"go run $GOPATH/src/user/server/main.go\" \"go run $GOPATH/src/user/main.go\"; do \${c} & done };" >> ~/.bashrc
RUN echo "down() { ps -ef | grep -e server/main.go -e server/gateway.go -e go-build | grep -v grep | awk '{print $1}' | xargs -I{} kill -9 {}; };" >> ~/.bashrc
RUN echo "buildpb() { cd $GOPATH/src/user/; protoc -I/usr/local/include -I. -I$GOPATH/src -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --go_out=plugins=grpc:. pb/user.proto; protoc -I/usr/local/include -I. -I$GOPATH/src -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --grpc-gateway_out=logtostderr=true:. pb/user.proto; }" >> ~/.bashrc

WORKDIR $GOPATH/src/user

EXPOSE "9090:9090"

# docker run --rm -it -v /`pwd`://go/src/user gobuild