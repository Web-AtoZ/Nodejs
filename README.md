# Web A to Z Frontend Project

## used React Library

# Directory Structure

## used Atomic Design

|구분|예시|설명|
|----|----|----|
| Atoms (원자) | button, input | html tag 같은 최소 단위 <br/> ex) 색상을 지정할 수 있는 버튼 컴포넌트 |
| Molecules (분자) | icon + button | 원자들이 결합된 그룹 <br/> ex) 음소거 버튼 아이콘 표시 |
| Organisms (유기체) | 음소거 버튼 + 아이콘, 검색어 + 검색버튼, Site Title | 분자들이 모여있는 특정 영역 <br/> ex) 설정과 검색 사이트명이 함께 있는 상단 AppBar |
| Templates | 화면을 구성하는 영역 | 쉽게 말해 html 파일과 같은 것 |
| Pages | BoardList, BoardTemplate, BoardListContainer | 데이터를 가지고 화면을 구성하기 위해 필요한 단위들이 Page단위로 모여 있는 것 |

## Component Type
|구분|예시|설명|
|----|----|----|
|Container| boardContainer |일반적으로 Controller 역할 수행. Presentation와 state, event method등 을 연결 시켜주는 중간 다리 역할. Lifecycle, state를 사용 할 수 있다.|
|Presentational| BoardTemplate |Lifrecylce, state가 없으며 props를 단순히 Rendering하는 역할|
|Component | SearchSelectBox |비즈니스로직, Template 함께 존재 Container,Presentation로 구분하기 전 일반적인 형태 <br/> 내부 state가 필요한 비즈니스로직이 존재하고 HTML을 렌더링 해야하는데 복잡한 기능이 아니여서 구분할 필요 없는 경우|

\** 참고문서

[https://github.com/danilowoz/react-atomic-design](https://github.com/danilowoz/react-atomic-design)

[https://medium.com/@inthewalter/atomic-design-for-react-514660f93ba](https://medium.com/@inthewalter/atomic-design-for-react-514660f93ba)