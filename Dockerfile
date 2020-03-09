# openjdk 8
FROM node:12-alpine as builder
# image maintainer
LABEL maintainer="isb9082@naver.com"

# 리눅스에서 cd를 친 후 /home/node로 이동하기
RUN mkdir /home/node/app
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY package.json /home/node/app/package.json

RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent

COPY . /home/node/app
RUN npm run build

FROM nginx:1.13.9-alpine
# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /home/node/app/build /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




