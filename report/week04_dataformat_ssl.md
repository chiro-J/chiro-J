# 데이터 교환 포맷(JSON, XML, YAML) 비교

## JSON (JavaScript Object Notation)

> JavaScript에서 파생되었지만 언어 독립적
키-값 쌍으로 구성된 간단한 구조

※ 가장 널리 사용되는 경량 데이터 교환 포맷


| 장점 | 단점 |
|------|------|
| 가독성이 좋고 구문이 간단함 | 주석을 지원하지 않음 |
| 파싱 속도가 빠름 | 스키마 검증이 별도로 필요함 |
| 웹 API에서 표준으로 사용됨 | 순수 텍스트만 지원 (바이너리 데이터 불가) |
| 대부분의 프로그래밍 언어에서 지원됨 |  |


```json
{
  "name": "홍길동",
  "age": 30,
  "skills": ["Java", "Python", "JavaScript"],
  "address": {
    "city": "서울",
    "district": "강남구"
  }
}
```

<br><br>

## XML (eXtensible Markup Language)

> 마크업 언어 기반의 구조화된 데이터 포맷

- 태그를 사용해 데이터를 계층적으로 표현

- 스키마 검증 기능 내장



| 장점 | 단점 |
|------|------|
| 강력한 스키마 검증 (XSD) | 문법이 복잡하고 장황함 |
| 네임스페이스 지원 | 파일 크기가 상대적으로 큼 |
| 복잡한 데이터 구조 표현 가능 | 파싱 속도가 느림 |
| 메타데이터와 속성 지원 | |


```xml
<?xml version="1.0" encoding="UTF-8"?>
<person>
  <name>홍길동</name>
  <age>30</age>
  <skills>
    <skill>Java</skill>
    <skill>Python</skill>
    <skill>JavaScript</skill>
  </skills>
  <address>
    <city>서울</city>
    <district>강남구</district>
  </address>
</person>
```



<br><br>


## YAML (YAML Ain't Markup Language)
> 사람이 읽기 쉬운 데이터 직렬화 표준
- 들여쓰기를 사용해 구조를 표현
- 설정 파일에 주로 사용

| 장점 | 단점 |
|------|------|
| 매우 높은 가독성 | 들여쓰기 실수로 인한 오류 발생 가능 |
| 주석 지원 | 파싱 속도가 상대적으로 느림 |
| 복잡한 데이터 구조 표현 가능 | 보안 이슈 (임의 객체 실행 가능) |
| 참조와 앵커 기능 | |


```yaml
name: 홍길동
age: 30
skills:
  - Java
  - Python
  - JavaScript
address:
  city: 서울
  district: 강남구
```

<br><br>

## 포맷별 사용 사례

- **JSON**: REST API, 웹 애플리케이션 데이터 교환

- **XML**: SOAP 웹서비스, 설정 파일, 문서 구조

- **YAML**: 설정 파일, CI/CD 파이프라인, Kubernetes 매니페스트


<br><br><br>



# 시리얼라이징 - HTTPS와 SSL 인증서 기초

## HTTPS (HyperText Transfer Protocol Secure)
> HTTP 프로토콜에 SSL/TLS 암호화를 추가한 보안 버전으로, 데이터 전송 과정에서 암호화를 통해 보안을 제공합니다.

<br>

## HTTP vs HTTPS

| 항목 | HTTP | HTTPS |
|------|------|-------|
| 데이터 전송 방식 | 평문 (암호화되지 않음) | SSL/TLS를 통한 암호화 |
| 사용 포트 | 80번 | 443번 |
| 보안성 | 낮음 (도청, 위조 위험) | 높음 (데이터 보호, 무결성 보장) |
| 인증서 | 불필요 | SSL 인증서 필요 |
| 속도 | 약간 빠름 | 암호화 과정으로 인해 약간 느릴 수 있음 |
| 사용 예시 | 테스트 서버, 내부망 등 | 로그인, 결제, 개인 정보 처리 등 |
| 브라우저 표시 | "Not Secure" 경고 가능 | 자물쇠 아이콘으로 보안 표시 |

<br>

## HTTPS의 보안 기능

- **암호화**: 데이터 전송 시 제3자가 내용을 볼 수 없도록 암호화

- **무결성**: 데이터가 전송 중 변조되지 않았음을 보장

- **인증**: 서버의 신원을 확인하여 피싱 사이트 방지



<br>


## SSL/TLS 인증서
**SSL (Secure Sockets Layer)** & **TLS (Transport Layer Security)**
> 네트워크 통신 보안을 위한 암호화 프로토콜입니다. 

현재는 TLS가 표준이지만 관습적으로 SSL이라고 부르기도 합니다.

<br>

## 인증서의 역할

- **서버 인증**: 접속하려는 사이트가 신뢰할 수 있는 사이트인지 확인

- **암호화 키 교환**: 클라이언트와 서버 간 안전한 암호화 키 교환

- **데이터 무결성**: 전송 데이터의 변조 여부 확인


<br>


## 인증서 종류

### 검증 수준에 따른 분류

- **DV (Domain Validated)**: 도메인 소유권만 확인

- **OV (Organization Validated)**: 조직 정보까지 확인

- **EV (Extended Validation)**: 가장 엄격한 검증, 브라우저 주소창에 조직명 표시

<br>

### 적용 범위에 따른 분류

- **단일 도메인**: 하나의 도메인만 적용

- **와일드카드**: 하위 도메인 모두 적용 (*.example.com)

- **멀티 도메인**: 여러 도메인에 적용 가능

<br>

## SSL/TLS 핸드셰이크 과정

1. **Client Hello**: 클라이언트가 지원하는 암호화 방식과 버전 전송

2. **Server Hello**: 서버가 선택한 암호화 방식과 인증서 전송

3. **Certificate Verify**: 클라이언트가 인증서 검증

4. **Key Exchange**: 대칭키 생성을 위한 키 교환

5. **Finished**: 핸드셰이크 완료, 암호화 통신 시작



<br>


## 인증서 발급 기관 (CA, Certificate Authority)


### 공인 CA

- Let's Encrypt (무료)

- DigiCert

- GlobalSign

- Sectigo

<br>

### ※ 인증서 확인 방법
> 브라우저에서 자물쇠 아이콘을 클릭하여 인증서 정보를 확인할 수 있으며, 
발급자, 유효기간, 암호화 강도 등을 확인할 수 있습니다.


<br>

## 보안 고려사항

- 인증서 만료일 관리

- **강력한 암호화 알고리즘** 사용 (RSA 2048비트 이상)

- 중간 인증서 체인 올바른 설정

- **HSTS (HTTP Strict Transport Security)** 적용 권장



<br><br>



