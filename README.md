# Vue JS

## 핵심

### 1. SPA

Single Page Application

- 페이지 전환 없이(새로운 요청 응답 없이) UI 변화
- 왜?
- 1. 사용자 편의
- 2. 서버 리소스 절약

### 2. MVVM

Model-View-ViewModel: Model이 바뀌면 View가 바뀌도록 ViewModel이 자동으로 컨트롤

- MVC(Model-View-Control)와의 비교

### 3. Declarative Programming

선언적 프로그래밍 <-> 명령형 프로그래밍(Imperative Programming)

- 명령형(절차적): 변화를 단계적으로 명령하는 방식
  - Vanilla Javascript DOM 조작
- 선언형: 변화를 선언(그림 그리기)
  - 프레임워크를 통한 조작

## II. Vue JS의 요소

### 1. Directive(지시자)

- `v-for` : 배열과 같은 데이터를 순회
- `v-if` : 조건부 렌더링, 조건에 따라 보이고 안보이고 여부를 결정
- `v-else` : 조건부 렌더링
- `v-on` : 이벤트 바인딩('addEventListener()')
- `v-model` : 양방향 데이터 바인딩
- `v-text`: 데이터 렌더(innerText) == `{{ }}`
- `v-html`: 데이터 렌더(innerHTML)

### 2. Vue Instance(객체)

- `new Vue({})`
- `el: '#app'` : Vue 객체의 마운트 포인트
- `data: {}` : Vue 객체가 관리할 데이터
- `methods: {}` : 함수
- `computed: {}` : 함수화된 데이터
- `watch: {}`: 데이터 변경에 대한 콜백기능을 가지고있는 property

#### 라이프사이클 훅

- `created()` : 객체 생성 직후
- `beforeMount()`
  --- Mounted: DOM 보이기 시작
