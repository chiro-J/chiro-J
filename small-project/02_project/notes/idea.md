
# Main
light / dark / sync 테마 토글 버튼 구현


light : 현재 날씨/출몰 과 관계 없이 라이트 모드
dark : 현재 날씨/출몰 과 관계 없이 다크 모드
sync : 현재 날씨/출몰 에 기반한 실시간 테마 모드


## Inspiration

naver whale browser main(blank) page 아래의 날씨 컴포넌트

Regnas Portal
https://regnas.day/

blue protocol ending scene
https://youtu.be/QRCLs-AgOhY

01_project
https://chiro-j.github.io/chiro-J/small-project/01_project





아이콘 이미지는 SVG 이미지로
https://webutility.io/image-to-svg-converter#


useContext, useReducer


## Data
일일 날씨 데이터 api
일일 일출·일몰 데이터 api
일일 기온 데이터 api

일출 ± 30분 : 동틀녘
일몰 ± 30분 : 해질녘

날씨 : 비동기 처리, 매 1시간마다 호출해서 갱신
출몰 : 비동기 처리, 매 1일마다 호출해서 갱신




# draft
- 동틀녘
- 오전
- 오후
- 해질녘
- 저녁 : 달, 별
- 새벽 : 달, 별


- 구름 많음
- 비
- 눈
- 번개
- 안개 




# 기능 추가 아이디어

- pip 모드 (https://regnas.day/)