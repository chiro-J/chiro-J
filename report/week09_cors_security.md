# CORS 정책과 웹 보안 가이드

## CORS (Cross-Origin Resource Sharing)

> 웹 브라우저가 다른 도메인의 리소스에 접근할 때 적용되는 보안 정책

기본적으로 브라우저는 **Same-Origin Policy**(동일 출처 정책)를 따라 보안을 유지하는데, CORS는 이를 안전하게 우회할 수 있는 메커니즘을 제공합니다.

<br>

## Origin(출처) 개념

Origin은 프로토콜, 도메인, 포트 번호의 조합으로 정의됩니다.

<br>

### Origin 구성 요소

| 구성 요소 | 설명 | 예시 |
|---------|------|------|
| 프로토콜 | HTTP/HTTPS | `http://`, `https://` |
| 도메인 | 호스트명 | `example.com`, `api.example.com` |
| 포트 | 포트 번호 | `:80`, `:443`, `:3000` |

<br>

### Same-Origin vs Cross-Origin 비교

| 분류 | URL 1 | URL 2 | 결과 | 이유 |
|------|-------|-------|------|------|
| Same-Origin | `https://example.com/page1` | `https://example.com/page2` | ✅ 동일 출처 | 모든 구성 요소 동일 |
| Same-Origin | `https://example.com:443/api` | `https://example.com/data` | ✅ 동일 출처 | HTTPS 기본 포트 443 |
| Cross-Origin | `https://example.com` | `http://example.com` | ❌ 다른 출처 | 프로토콜 차이 |
| Cross-Origin | `https://example.com` | `https://api.example.com` | ❌ 다른 출처 | 도메인 차이 |
| Cross-Origin | `https://example.com:3000` | `https://example.com:8080` | ❌ 다른 출처 | 포트 차이 |

<br>

## CORS Header

서버는 HTTP 헤더를 통해 Cross-Origin 요청을 허용할지 결정합니다.

<br>

### 주요 CORS 응답 헤더

| 헤더명 | 설명 | 예시 값 | 비고 |
|--------|------|---------|------|
| `Access-Control-Allow-Origin` | 허용할 출처 지정 | `https://example.com`, `*` | `*`는 모든 출처 허용 |
| `Access-Control-Allow-Methods` | 허용할 HTTP 메서드 | `GET, POST, PUT, DELETE` | 쉼표로 구분 |
| `Access-Control-Allow-Headers` | 허용할 요청 헤더 | `Content-Type, Authorization` | 쉼표로 구분 |
| `Access-Control-Allow-Credentials` | 쿠키/인증 정보 포함 허용 | `true`, `false` | 기본값은 false |
| `Access-Control-Max-Age` | Preflight 응답 캐시 시간 | `3600` | 초 단위 |

<br>

### CORS 헤더 설정 예시

```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 3600
```

<br>

## Preflight 요청

브라우저가 실제 요청 전에 서버에 권한을 확인하는 사전 요청입니다.

<br>

### Simple Request vs Preflight Request 비교

| 구분 | Simple Request | Preflight Request |
|------|----------------|-------------------|
| **HTTP 메서드** | `GET`, `HEAD`, `POST` | `PUT`, `DELETE`, `PATCH` 등 |
| **Content-Type** | `text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded` | `application/json`, `application/xml` 등 |
| **커스텀 헤더** | 없음 | `Authorization`, `X-Custom-Header` 등 |
| **사전 요청** | 없음 | OPTIONS 요청 먼저 전송 |
| **요청 횟수** | 1회 | 2회 (OPTIONS + 실제 요청) |

<br>

### Preflight가 발생하는 조건

| 조건 | 예시 | Preflight 필요 |
|------|------|---------------|
| HTTP 메서드 | `DELETE /api/users/1` | ✅ |
| Content-Type | `Content-Type: application/json` | ✅ |
| 커스텀 헤더 | `Authorization: Bearer token` | ✅ |
| 단순 POST | `Content-Type: text/plain` | ❌ |
| 단순 GET | `GET /api/users` | ❌ |

<br>

### Preflight 요청 플로우

1. **브라우저가 OPTIONS 요청 전송**
```http
OPTIONS /api/users HTTP/1.1
Origin: https://frontend.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization
```

2. **서버가 허용 정책 응답**
```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://frontend.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Authorization
Access-Control-Max-Age: 3600
```

3. **허용되면 실제 요청 전송**
```http
DELETE /api/users/123 HTTP/1.1
Origin: https://frontend.com
Authorization: Bearer token123
```

<br>

## 실제 적용 예시

### 클라이언트 코드 (JavaScript)

```javascript
// Preflight가 발생하는 요청
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({ name: 'John' })
});

// Simple Request
fetch('https://api.example.com/users', {
  method: 'GET'
});
```

### 서버 설정 예시

#### Express.js
```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://frontend.com');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});
```

#### Spring Boot
```java
@CrossOrigin(
    origins = "https://frontend.com",
    methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
    allowedHeaders = {"Content-Type", "Authorization"}
)
@RestController
public class ApiController {
    // API 메서드들
}
```

<br>

## 보안 고려사항

### CORS 설정 보안 체크리스트

| 설정 | 권장 사항 | 위험한 설정 | 이유 |
|------|-----------|-------------|------|
| `Access-Control-Allow-Origin` | 구체적인 도메인 명시 | `*` (모든 도메인 허용) | 악의적인 사이트의 접근 가능 |
| Credentials와 Origin 조합 | 구체적 도메인 + credentials | `*` + `credentials: true` | 보안 정책상 허용되지 않음 |
| 허용 메서드 | 필요한 메서드만 | 모든 메서드 허용 | 불필요한 권한 부여 |
| 허용 헤더 | 필요한 헤더만 | 모든 헤더 허용 | 보안 헤더 노출 위험 |

<br>

### 일반적인 CORS 에러와 해결책

| 에러 메시지 | 원인 | 해결책 |
|-------------|------|--------|
| `Access to fetch at '...' has been blocked by CORS policy` | 서버에서 해당 Origin 허용하지 않음 | `Access-Control-Allow-Origin` 설정 |
| `Method PUT is not allowed` | 해당 HTTP 메서드 허용하지 않음 | `Access-Control-Allow-Methods`에 PUT 추가 |
| `Request header field authorization is not allowed` | 해당 헤더 허용하지 않음 | `Access-Control-Allow-Headers`에 추가 |
| `Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'` | Origin이 `*`인데 credentials 사용 | 구체적인 도메인 명시 |

<br>

## 마무리

CORS는 웹 애플리케이션의 보안과 기능성 사이의 균형을 맞추는 중요한 메커니즘입니다. 프론트엔드와 백엔드가 다른 도메인에 있는 현대적인 웹 개발에서 반드시 이해해야 할 개념입니다.

핵심은 **최소 권한 원칙**을 따라 필요한 출처, 메서드, 헤더만 허용하여 보안을 유지하면서도 필요한 기능은 동작할 수 있도록 설정하는 것입니다.