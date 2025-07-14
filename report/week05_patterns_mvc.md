# 프로그래밍 아키텍처 패턴 비교

## 개요
MVC, MVP, MVVM 패턴의 구조와 특징을 비교 분석한 내용입니다.

<br>

## 패턴별 상세 설명

### MVC (Model-View-Controller)

**구조:**
- **Model**: 데이터와 비즈니스 로직을 담당
- **View**: 사용자 인터페이스를 담당
- **Controller**: 사용자 입력을 처리하고 Model과 View를 조정

**특징:**
- Controller가 사용자 입력을 받아 Model을 업데이트하고, Model의 변경사항이 View에 반영됩니다
- View는 Model을 직접 참조할 수 있어 Model의 상태를 직접 읽을 수 있습니다
- 전통적으로 웹 애플리케이션에서 많이 사용되며, Spring MVC, Django 등이 대표적입니다
- Controller와 View 간의 의존성이 높아 테스트가 상대적으로 어려울 수 있습니다

<br>

### MVP (Model-View-Presenter)

**구조:**
- **Model**: 데이터와 비즈니스 로직을 담당
- **View**: 사용자 인터페이스를 담당 (수동적 역할)
- **Presenter**: View와 Model 사이의 중재자 역할

**특징:**
- View가 Model을 직접 참조하지 않고 Presenter를 통해서만 소통합니다
- View는 매우 수동적이며, 모든 UI 로직이 Presenter에 집중됩니다
- Presenter가 View의 참조를 가지고 있어 View를 직접 조작합니다
- 테스트하기 쉽고 View와 비즈니스 로직의 분리가 명확합니다
- Android 개발에서 자주 사용되었습니다

<br>

### MVVM (Model-View-ViewModel)

**구조:**
- **Model**: 데이터와 비즈니스 로직을 담당
- **View**: 사용자 인터페이스를 담당
- **ViewModel**: View의 상태와 행동을 관리하는 추상화 계층

**특징:**
- 데이터 바인딩을 통해 View와 ViewModel이 자동으로 동기화됩니다
- ViewModel은 View에 대한 직접적인 참조를 갖지 않아 결합도가 낮습니다
- Command 패턴을 사용하여 View의 액션을 ViewModel에 전달합니다
- 테스트하기 매우 쉽고 재사용성이 높습니다
- WPF, Angular, Vue.js 등에서 널리 사용됩니다

<br>

## 비교 표

| 구분 | MVC | MVP | MVVM |
|------|-----|-----|------|
| **중재자 역할** | Controller | Presenter | ViewModel |
| **View-Model 관계** | View가 Model 직접 참조 가능 | Presenter를 통해서만 접근 | 데이터 바인딩으로 자동 동기화 |
| **View의 역할** | 능동적 (Model 직접 접근) | 수동적 (Presenter가 조작) | 선언적 (바인딩 기반) |
| **의존성** | Controller ↔ View 높은 결합 | Presenter → View 단방향 | ViewModel ← View 단방향 |
| **테스트 용이성** | 보통 | 좋음 | 매우 좋음 |
| **재사용성** | 보통 | 좋음 | 매우 좋음 |
| **주요 사용 환경** | 웹 애플리케이션 | 모바일 애플리케이션 | 데스크톱, 모던 웹 |
| **대표 프레임워크** | Spring MVC, Django, Rails | Android (구버전) | WPF, Angular, Vue.js, React |
| **학습 곡선** | 쉬움 | 보통 | 보통~어려움 |
| **코드 복잡성** | 낮음 | 보통 | 높음 |

<br><br>

## 선택 가이드

### MVC를 선택하는 경우
- 전통적인 웹 애플리케이션 개발
- 빠른 프로토타이핑이 필요한 경우
- 팀의 학습 곡선을 최소화하고 싶은 경우

### MVP를 선택하는 경우
- 모바일 애플리케이션 개발 (특히 Android)
- View와 비즈니스 로직의 명확한 분리가 필요한 경우
- 단위 테스트가 중요한 프로젝트

### MVVM을 선택하는 경우
- 데이터 바인딩이 지원되는 플랫폼
- 복잡한 UI 상태 관리가 필요한 경우
- 높은 재사용성과 테스트 가능성이 요구되는 경우
- 모던 웹 프레임워크 사용 시

<br>

## 결론
최근에는 MVVM 패턴이 가장 널리 채택되고 있으며, 특히 React, Vue.js, Angular 등의 모던 웹 프레임워크에서 이 패턴의 장점을 잘 활용하고 있습니다. 하지만 프로젝트의 특성, 팀의 역량, 플랫폼의 특성을 고려하여 적절한 패턴을 선택하는 것이 중요합니다.