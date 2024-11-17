# ☄️ POKEMON DEX
Vite를 이용한 리액트 프로젝트로 포켓몬 도감 SPA를 구현했습니다.

## 프로젝트 구조
📦src

 ┣ 📂assets
 
 ┃ ┣ 📂Images
 
 ┃ ┃ ┣ 📜BackGroundImage.png
 
 ┃ ┃ ┣ 📜Logo.png
 
 ┃ ┃ ┣ 📜PokemonBall.png
 
 ┃ ┃ ┗ 📜WallPaper.jpg
 
 ┃ ┗ 📜react.svg
 
 ┣ 📂components
 
 ┃ ┣ 📜DashBoard.jsx
 
 ┃ ┣ 📜PokemonCard.jsx
 
 ┃ ┗ 📜PokemonList.jsx
 
 ┣ 📂data
 
 ┃ ┗ 📜PokemonData.js
 
 ┣ 📂pages
 
 ┃ ┣ 📜Dex.jsx
 
 ┃ ┣ 📜Home.jsx
 
 ┃ ┣ 📜NotFound.jsx
 
 ┃ ┗ 📜PokemonDetail.jsx
 
 ┣ 📂redux
 
 ┃ ┣ 📂Slices
 
 ┃ ┃ ┗ 📜PokemonSlice.js
 
 ┃ ┗ 📂config
 
 ┃ ┃ ┗ 📜ConfigStore.js
 
 ┣ 📂shared
 
 ┃ ┗ 📜Router.jsx
 
 ┣ 📂styles
 
 ┃ ┗ 📜GlobalStyles.js
 
 ┣ 📜App.css
 
 ┣ 📜App.jsx
 
 ┣ 📜index.css
 
 ┗ 📜main.jsx

## 프로젝트 설명
### 🕹️ Git 브랜치 전략 사용
- 상태 관리 방식을 단계별로 나눠 구현하는 Git 브랜치 전략을 사용했습니다.
- `props-drilling`, `context`, `redux-toolkit` 총 세 개의 브랜치를 만들어 세 가지 방식으로 상태를 관리해 보았습니다.
- 이를 통해 페이지 전환 시에도 상태가 유지되게 하였습니다.
### 🕹️ react-router-dom을 이용한 페이지 라우팅 구현
- `Home` 페이지와 `Dex` 페이지를 라우트하여, `Home` 페이지에서 "포켓몬 도감 시작하기" 버튼을 누르면 `Dex` 페이지로 이동합니다.
- `Dex` 페이지에서 포켓몬 카드 클릭을 통해 `PokemonDetail` 페이지로 이동할 수 있습니다.
### 🕹️ 도감(Dex) 페이지
- `DashBoard`, `PokemonList`, `PokemonCard` 세 개의 주요 컴포넌트로 페이지를 구성했습니다.
- `DashBoard` : `PokemonCard`의 "추가" 버튼을 클릭하면 `DashBoard`에서 해당 포켓몬을 보여줍니다.
- `PokemonList` : `MOCK_DATA`의 포켓몬 데이터를 받아, 각각의 포켓몬을 `PokemonCard`로 표시합니다.
- `PokemonCard` : 포켓몬 이름, 이미지, 타입이 표시되며, 조건부 렌더링을 통해 "추가" 또는 "삭제" 버튼을 보여줍니다.
### 🕹️ 디테일(PokemonDetail) 페이지
- 포켓몬 ID를 `path params`로 받아와, 이를 통해 `MOCK_DATA`에서 해당 포켓몬의 상세 정보(이미지, 이름, 타입, 설명)를 검색하여 보여줍니다.
- "뒤로 가기" 버튼을 통해 이전 페이지로 돌아갈 수 있습니다.
- 조건부 렌더링을 통해 "추가" 또는 "삭제" 버튼을 보여줍니다.
### 🕹️ 알림 기능 구현
- 중복 선택 방지: 이미 선택된 포켓몬을 다시 선택하려 하면 `sweetAlert2`를 통해 "이미 추가된 포켓몬입니다."라는 안내를 띄웁니다.
- 선택 수 제한 안내: 선택된 포켓몬 수가 6개를 초과할 경우 `sweetAlert2`를 통해 "포켓몬은 최대 6마리까지 선택할 수 있습니다."라는 안내를 띄웁니다.
### 🕹️ 스타일링
- `styled-components`를 사용하여 페이지의 전반적인 스타일을 설정하였습니다.
  
