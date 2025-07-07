import easyocr
import requests
import lxml
from bs4 import BeautifulSoup as bs
import re
import os
import json


url = "https://pf.kakao.com/rocket-web/web/profiles/_QpjXG/posts?includePinnedPost=true"
res = requests.get(url)
soup = bs(res.content, "lxml")
html = res.text

# res.content

response = requests.get(url)
data = res.json()

# 이미지 URL 추출
image_url = data['items'][0]['media'][0]['url']
# print(f"이미지 URL: {image_url}")

src_img = image_url


reader = easyocr.Reader(['ko','en'])
ocr_txt = reader.readtext(src_img)

raw = []

for b_box, text, cf_level in ocr_txt:
    raw.append(text)  # 각 OCR 결과의 텍스트를 추가



contents = raw[4:-6]
contents[:5] = [item.replace(' ', '') for item in contents[:5]]


# 메뉴 이외의 것들은 불용어 리스트에 추가
stopword_patterns = [r'오늘은', r'추천', r'메뉴', r'^\d+시', r'PLUS', r'(11:20~13:30)', r'중식', r'TAKE-OUT', r'음식', ]



# 메뉴 만을 추출, 불용어 처리, 정제
con = [word for word in contents if not any(re.search(pattern, word) for pattern in stopword_patterns)]

ref_con = con[:-6] + con[-5:]



# [::n] n번째 요소마다 꺼내서 각 요일 리스트에 추가
mon_list = ref_con[::5]
tue_list = ref_con[1::5]
wed_list = ref_con[2::5]
thu_list = ref_con[3::5]
fri_list = ref_con[4::5]


# 5개의 리스트 각각에서 0번 인덱스 값은 'day' 라는 항목에 넣기
# 4번 인덱스 값은 'veg' 라는 항목에 넣기
# 딕셔너리 구조 {day: -, menu: [], veg: -}

mon_dict = {
    'day': mon_list[0],
    'menu': mon_list[1:-1],
    'veg': mon_list[-1]
}
tue_dict = {
    'day': tue_list[0],
    'menu': tue_list[1:-1],
    'veg': tue_list[-1]
}
wed_dict = {
    'day': wed_list[0],
    'menu': wed_list[1:-1],
    'veg': wed_list[-1]
}
thu_dict = {
    'day': thu_list[0],
    'menu': thu_list[1:-1],
    'veg': thu_list[-1]
}
fri_dict = {
    'day': fri_list[0],
    'menu': fri_list[1:-1],
    'veg': fri_list[-1]
}



gusik_menu = [mon_dict, tue_dict, wed_dict, thu_dict, fri_dict]



# json 파일로 저장 (gusik_menu.json)

import json

with open('gusik_menu.json', 'w', encoding = 'utf-8') as f : 
	json.dump(gusik_menu, f, indent = 4, ensure_ascii=False)