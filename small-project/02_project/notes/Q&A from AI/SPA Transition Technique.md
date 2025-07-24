# 질문
그 SPA 방식으로 구현된 웹페이지들 보면 라우팅 하지 않고도 다른 페이지로 이동한 거 같이 
기존 기능은 사라지고 다른 기능이 들어간 페이지가 되기도 하던데 이건 어떻게 하는거야?

<br><br><br>

# 답변

SPA에서 라우팅 없이 페이지 전환 효과를 만드는 방법은 주로 **조건부 렌더링(Conditional Rendering)**을 사용합니다.

핵심 원리는 다음과 같습니다:

## 기본 개념
> 하나의 페이지에서 JavaScript 상태에 따라 다른 컴포넌트나 콘텐츠를 보여주고 숨기는 방식
- URL은 변경되지 않지만, 화면의 내용이 완전히 바뀌어 마치 다른 페이지로 이동한 것처럼 보임

## 구현 방법들
1. 상태 기반 화면 전환
```javascript
// 현재 화면을 결정하는 상태
const [currentView, setCurrentView] = useState('home');

// 상태에 따라 다른 컴포넌트 렌더링
{currentView === 'home' && <HomeComponent />}
{currentView === 'profile' && <ProfileComponent />}
{currentView === 'settings' && <SettingsComponent />}
```

2. 탭 방식
```javascript
const [activeTab, setActiveTab] = useState(0);

const tabs = [
  { name: '홈', component: <HomeTab /> },
  { name: '검색', component: <SearchTab /> },
  { name: '설정', component: <SettingsTab /> }
];

return tabs[activeTab].component;
```

3. 모달/오버레이 방식

- 기존 화면 위에 새로운 콘텐츠를 오버레이로 표시
- 전체 화면을 덮어서 완전히 다른 페이지처럼 보이게 함


4. 컴포넌트 교체
```javascript
const [currentComponent, setCurrentComponent] = useState('ComponentA');

const components = {
  ComponentA: <ComponentA />,
  ComponentB: <ComponentB />,
  ComponentC: <ComponentC />
};

return components[currentComponent];
```


## 실제 사용 예시
- 모바일 앱 같은 UI: 하단 탭바로 화면 전환
- 대시보드: 사이드바 메뉴로 다른 기능 화면 전환
- 설정 페이지: 카테고리별로 다른 설정 화면 표시
- 게임 인터페이스: 메인화면 → 게임화면 → 결과화면 전환

이런 방식으로 URL 변경 없이도 완전히 다른 기능의 페이지처럼 보이게 할 수 있습니다. 라우팅보다 더 빠르고 부드러운 전환이 가능하죠.





