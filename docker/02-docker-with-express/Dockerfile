# 1. 운영체재 및 프로그램 설치 (각각 직접 설치하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체체 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 설치되어 있는 컴퓨터 다운로드하는 방식)
FROM node:20

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder  => 없으면 자동으로 만들기 때문에 굳이 필요없음
COPY . /myfolder/

# RUN cd ./myfolder/
# 현재 위치 이동
WORKDIR /myfolder/
RUN yarn install

# 3. 도커안에서 index.js 실행시키기
# RUN node index.js
# 도커 이미지에 CMD는 저장 안됨, CMD는 한번만 사용가능
CMD yarn start:dev
