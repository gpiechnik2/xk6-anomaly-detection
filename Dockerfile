# taken from https://github.com/grafana/xk6-sql/

# Multi-stage build to generate custom k6 with extension
FROM golang:1.20-alpine as builder
WORKDIR $GOPATH/src/go.k6.io/k6
ADD . .
RUN apk --no-cache add build-base git
RUN go install go.k6.io/xk6/cmd/xk6@latest
RUN CGO_ENABLED=1 xk6 build \
    --with github.com/gpiechnik2/xk6-anomaly=. \
    --replace go.buf.build/grpc/go/prometheus/prometheus=buf.build/gen/go/prometheus/prometheus/protocolbuffers/go@latest --replace go.buf.build/grpc/go/gogo/protobuf=buf.build/gen/go/gogo/protobuf/protocolbuffers/go@latest \
    --output /tmp/k6

# Create image for running your customized k6
FROM alpine:3.17
RUN apk add --no-cache ca-certificates \
    && adduser -D -u 12345 -g 12345 k6
COPY --from=builder /tmp/k6 /usr/bin/k6

USER 12345
WORKDIR /home/k6

ENTRYPOINT ["k6"]

