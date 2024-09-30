# 1. 운영체재 및 프로그램 설치 (각각 직접 설치하는 방식)
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체체 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 설치되어 있는 컴퓨터 다운로드하는 방식)
FROM node:20

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder  => 없으면 자동으로 만들기 때문에 굳이 필요없음
# 캐싱이 되어 있는 것들 먼저 받기 => 변경 사항이 있으면 그 이후의 파일들은 변경이 없어도 새로 copy하기 때문
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/


# 3. 도커안에서 index.js 실행시키기
# RUN node index.js
# 도커 이미지에 CMD는 저장 안됨, CMD는 한번만 사용가능
CMD yarn start:dev
