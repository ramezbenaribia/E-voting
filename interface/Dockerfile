FROM golang

RUN git clone https://github.com/vivekganesan01/ganache-cli-block-explorer.git

WORKDIR /go/ganache-cli-block-explorer

RUN sed -i 's/127.0.0.1:5051/0.0.0.0:5051/g' router.go

CMD go run router.go rpcRequestGo.go
