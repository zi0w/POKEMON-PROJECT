const MOCK_DATA = [
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    korean_name: "이상해씨",
    types: ["풀", "독"],
    id: 1,
    description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
    korean_name: "이상해풀",
    types: ["풀", "독"],
    id: 2,
    description: "이상해씨의 진화형으로, 등에는 꽃봉오리가 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
    korean_name: "이상해꽃",
    types: ["풀", "독"],
    id: 3,
    description: "이상해풀의 최종 진화형으로, 등에는 큰 꽃이 피어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
    korean_name: "파이리",
    types: ["불꽃"],
    id: 4,
    description: "불꽃 타입의 포켓몬으로, 꼬리에 불이 붙어 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
    korean_name: "리자드",
    types: ["불꽃"],
    id: 5,
    description: "파이리의 진화형으로, 더 큰 몸집과 강한 불을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
    korean_name: "리자몽",
    types: ["불꽃", "비행"],
    id: 6,
    description:
      "리자드의 최종 진화형으로, 강력한 불꽃과 비행 능력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
    korean_name: "꼬부기",
    types: ["물"],
    id: 7,
    description: "물 타입의 포켓몬으로, 작은 거북이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
    korean_name: "어니부기",
    types: ["물"],
    id: 8,
    description: "꼬부기의 진화형으로, 더 강한 방어력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
    korean_name: "거북왕",
    types: ["물"],
    id: 9,
    description: "어니부기의 최종 진화형으로, 강력한 물 공격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
    korean_name: "캐터피",
    types: ["벌레"],
    id: 10,
    description: "벌레 타입의 포켓몬으로, 작고 귀여운 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
    korean_name: "단데기",
    types: ["벌레"],
    id: 11,
    description: "캐터피의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
    korean_name: "버터플",
    types: ["벌레", "비행"],
    id: 12,
    description: "단데기의 최종 진화형으로, 아름다운 나비 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
    korean_name: "뿔충이",
    types: ["벌레", "독"],
    id: 13,
    description: "벌레와 독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
    korean_name: "딱충이",
    types: ["벌레", "독"],
    id: 14,
    description: "뿔충이의 진화형으로, 단단한 껍질을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
    korean_name: "독침붕",
    types: ["벌레", "독"],
    id: 15,
    description: "딱충이의 최종 진화형으로, 독침을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
    korean_name: "구구",
    types: ["노말", "비행"],
    id: 16,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
    korean_name: "피죤",
    types: ["노말", "비행"],
    id: 17,
    description: "구구의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
    korean_name: "피죤투",
    types: ["노말", "비행"],
    id: 18,
    description: "피죤의 최종 진화형으로, 매우 빠른 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
    korean_name: "꼬렛",
    types: ["노말"],
    id: 19,
    description: "노말 타입의 포켓몬으로, 작은 쥐 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
    korean_name: "레트라",
    types: ["노말"],
    id: 20,
    description: "꼬렛의 진화형으로, 더 큰 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
    korean_name: "깨비참",
    types: ["노말", "비행"],
    id: 21,
    description: "노말과 비행 타입의 포켓몬으로, 작은 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
    korean_name: "깨비드릴조",
    types: ["노말", "비행"],
    id: 22,
    description: "깨비참의 진화형으로, 큰 부리와 빠른 속도를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
    korean_name: "아보",
    types: ["독"],
    id: 23,
    description: "독 타입의 포켓몬으로, 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
    korean_name: "아보크",
    types: ["독"],
    id: 24,
    description: "아보의 진화형으로, 더 크고 강한 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
    korean_name: "피카츄",
    types: ["전기"],
    id: 25,
    description:
      "전기 타입의 포켓몬으로, 귀여운 외모와 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
    korean_name: "라이츄",
    types: ["전기"],
    id: 26,
    description: "피카츄의 진화형으로, 더 큰 몸집과 강한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
    korean_name: "모래두지",
    types: ["땅"],
    id: 27,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
    korean_name: "고지",
    types: ["땅"],
    id: 28,
    description:
      "모래두지의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
    korean_name: "니드런♀",
    types: ["독"],
    id: 29,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
    korean_name: "니드리나",
    types: ["독"],
    id: 30,
    description: "니드런♀의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
    korean_name: "니드퀸",
    types: ["독", "땅"],
    id: 31,
    description: "니드리나의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif",
    korean_name: "니드런♂",
    types: ["독"],
    id: 32,
    description: "독 타입의 포켓몬으로, 작고 뿔이 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif",
    korean_name: "니드리노",
    types: ["독"],
    id: 33,
    description: "니드런♂의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif",
    korean_name: "니드킹",
    types: ["독", "땅"],
    id: 34,
    description: "니드리노의 최종 진화형으로, 강력한 독과 땅 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
    korean_name: "삐삐",
    types: ["페어리"],
    id: 35,
    description:
      "페어리 타입의 포켓몬으로, 귀여운 외모와 마법 같은 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif",
    korean_name: "픽시",
    types: ["페어리"],
    id: 36,
    description: "삐삐의 진화형으로, 더 강력한 페어리 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
    korean_name: "식스테일",
    types: ["불꽃"],
    id: 37,
    description: "불꽃 타입의 포켓몬으로, 여우 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif",
    korean_name: "나인테일",
    types: ["불꽃"],
    id: 38,
    description: "식스테일의 진화형으로, 긴 꼬리를 가진 아름다운 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
    korean_name: "푸린",
    types: ["노말", "페어리"],
    id: 39,
    description:
      "노말과 페어리 타입의 포켓몬으로, 둥글고 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif",
    korean_name: "푸크린",
    types: ["노말", "페어리"],
    id: 40,
    description:
      "푸린의 진화형으로, 더 큰 몸집과 강력한 페어리 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif",
    korean_name: "주뱃",
    types: ["독", "비행"],
    id: 41,
    description: "독과 비행 타입의 포켓몬으로, 작은 박쥐 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif",
    korean_name: "골뱃",
    types: ["독", "비행"],
    id: 42,
    description: "주뱃의 진화형으로, 더 큰 몸집과 강한 비행 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif",
    korean_name: "뚜벅쵸",
    types: ["풀", "독"],
    id: 43,
    description: "풀과 독 타입의 포켓몬으로, 작은 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif",
    korean_name: "냄새꼬",
    types: ["풀", "독"],
    id: 44,
    description: "뚜벅쵸의 진화형으로, 더 큰 꽃 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif",
    korean_name: "라플레시아",
    types: ["풀", "독"],
    id: 45,
    description: "냄새꼬의 최종 진화형으로, 큰 꽃을 가진 강력한 포켓몬입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif",
    korean_name: "파라스",
    types: ["벌레", "풀"],
    id: 46,
    description: "벌레와 풀 타입의 포켓몬으로, 작은 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif",
    korean_name: "파라섹트",
    types: ["벌레", "풀"],
    id: 47,
    description: "파라스의 진화형으로, 큰 버섯이 돋아 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif",
    korean_name: "콘팡",
    types: ["벌레", "독"],
    id: 48,
    description: "벌레와 독 타입의 포켓몬으로, 귀여운 곤충 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
    korean_name: "도나리",
    types: ["벌레", "독"],
    id: 49,
    description: "콘팡의 진화형으로, 더 큰 몸집과 강력한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif",
    korean_name: "디그다",
    types: ["땅"],
    id: 50,
    description: "땅 타입의 포켓몬으로, 작고 귀여운 두더지 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
    korean_name: "닥트리오",
    types: ["땅"],
    id: 51,
    description: "디그다의 진화형으로, 세 마리의 두더지가 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
    korean_name: "나옹",
    types: ["노말"],
    id: 52,
    description: "노말 타입의 포켓몬으로, 귀여운 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif",
    korean_name: "페르시온",
    types: ["노말"],
    id: 53,
    description:
      "나옹의 진화형으로, 우아하고 날렵한 고양이 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
    korean_name: "고라파덕",
    types: ["물"],
    id: 54,
    description:
      "물 타입의 포켓몬으로, 자주 두통을 앓는 오리 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/55.gif",
    korean_name: "골덕",
    types: ["물"],
    id: 55,
    description:
      "고라파덕의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
    korean_name: "망키",
    types: ["격투"],
    id: 56,
    description: "격투 타입의 포켓몬으로, 화가 나 있는 원숭이 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif",
    korean_name: "성원숭",
    types: ["격투"],
    id: 57,
    description: "망키의 진화형으로, 더 크고 강한 몸집을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif",
    korean_name: "가디",
    types: ["불꽃"],
    id: 58,
    description: "불꽃 타입의 포켓몬으로, 강아지 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif",
    korean_name: "윈디",
    types: ["불꽃"],
    id: 59,
    description: "가디의 진화형으로, 더 큰 몸집과 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif",
    korean_name: "발챙이",
    types: ["물"],
    id: 60,
    description: "물 타입의 포켓몬으로, 작고 귀여운 개구리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
    korean_name: "슈륙챙이",
    types: ["물"],
    id: 61,
    description:
      "발챙이의 진화형으로, 더 큰 몸집과 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif",
    korean_name: "강챙이",
    types: ["물", "격투"],
    id: 62,
    description:
      "슈륙챙이의 최종 진화형으로, 강력한 물과 격투 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif",
    korean_name: "캐이시",
    types: ["에스퍼"],
    id: 63,
    description: "에스퍼 타입의 포켓몬으로, 초능력 사용에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif",
    korean_name: "윤겔라",
    types: ["에스퍼"],
    id: 64,
    description: "캐이시의 진화형으로, 초능력과 강한 정신력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif",
    korean_name: "후딘",
    types: ["에스퍼"],
    id: 65,
    description: "윤겔라의 최종 진화형으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif",
    korean_name: "알통몬",
    types: ["격투"],
    id: 66,
    description: "격투 타입의 포켓몬으로, 강한 근육과 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif",
    korean_name: "근육몬",
    types: ["격투"],
    id: 67,
    description: "알통몬의 진화형으로, 더 크고 강한 근육을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/68.gif",
    korean_name: "괴력몬",
    types: ["격투"],
    id: 68,
    description: "근육몬의 최종 진화형으로, 매우 강력한 힘을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/69.gif",
    korean_name: "모다피",
    types: ["풀", "독"],
    id: 69,
    description: "풀과 독 타입의 포켓몬으로, 작은 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/70.gif",
    korean_name: "우츠동",
    types: ["풀", "독"],
    id: 70,
    description: "모다피의 진화형으로, 더 크고 강한 식물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
    korean_name: "우츠보트",
    types: ["풀", "독"],
    id: 71,
    description: "우츠동의 최종 진화형으로, 강력한 독과 풀 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif",
    korean_name: "왕눈해",
    types: ["물", "독"],
    id: 72,
    description: "물과 독 타입의 포켓몬으로, 큰 눈과 촉수를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/73.gif",
    korean_name: "독파리",
    types: ["물", "독"],
    id: 73,
    description: "왕눈해의 진화형으로, 더 큰 몸집과 강한 독을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif",
    korean_name: "꼬마돌",
    types: ["바위", "땅"],
    id: 74,
    description: "바위와 땅 타입의 포켓몬으로, 작은 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/75.gif",
    korean_name: "데구리",
    types: ["바위", "땅"],
    id: 75,
    description: "꼬마돌의 진화형으로, 더 큰 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/76.gif",
    korean_name: "딱구리",
    types: ["바위", "땅"],
    id: 76,
    description: "데구리의 최종 진화형으로, 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif",
    korean_name: "포니타",
    types: ["불꽃"],
    id: 77,
    description: "불꽃 타입의 포켓몬으로, 불타는 갈기를 가진 말 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
    korean_name: "날쌩마",
    types: ["불꽃"],
    id: 78,
    description: "포니타의 진화형으로, 더 크고 빠른 말 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
    korean_name: "야돈",
    types: ["물", "에스퍼"],
    id: 79,
    description:
      "물과 에스퍼 타입의 포켓몬으로, 느린 움직임과 귀여운 외모를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
    korean_name: "야도란",
    types: ["물", "에스퍼"],
    id: 80,
    description: "야돈의 진화형으로, 더 크고 강한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif",
    korean_name: "코일",
    types: ["전기", "강철"],
    id: 81,
    description: "전기와 강철 타입의 포켓몬으로, 자석 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
    korean_name: "레어코일",
    types: ["전기", "강철"],
    id: 82,
    description: "코일의 진화형으로, 세 개의 자석이 합쳐진 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
    korean_name: "파오리",
    types: ["노말", "비행"],
    id: 83,
    description: "노말과 비행 타입의 포켓몬으로, 파를 든 오리 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif",
    korean_name: "두두",
    types: ["노말", "비행"],
    id: 84,
    description:
      "노말과 비행 타입의 포켓몬으로, 두 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
    korean_name: "두트리오",
    types: ["노말", "비행"],
    id: 85,
    description: "두두의 진화형으로, 세 개의 머리를 가진 새 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif",
    korean_name: "쥬쥬",
    types: ["물"],
    id: 86,
    description: "물 타입의 포켓몬으로, 귀여운 물개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
    korean_name: "쥬레곤",
    types: ["물", "얼음"],
    id: 87,
    description: "쥬쥬의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif",
    korean_name: "질퍽이",
    types: ["독"],
    id: 88,
    description: "독 타입의 포켓몬으로, 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
    korean_name: "질뻐기",
    types: ["독"],
    id: 89,
    description: "질퍽이의 진화형으로, 더 큰 진흙 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif",
    korean_name: "셀러",
    types: ["물"],
    id: 90,
    description: "물 타입의 포켓몬으로, 조개 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
    korean_name: "파르셀",
    types: ["물", "얼음"],
    id: 91,
    description: "셀러의 진화형으로, 강력한 물과 얼음 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif",
    korean_name: "고오스",
    types: ["고스트", "독"],
    id: 92,
    description: "고스트와 독 타입의 포켓몬으로, 유령 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif",
    korean_name: "고우스트",
    types: ["고스트", "독"],
    id: 93,
    description: "고오스의 진화형으로, 더 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
    korean_name: "팬텀",
    types: ["고스트", "독"],
    id: 94,
    description:
      "고우스트의 최종 진화형으로, 매우 강력한 고스트 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif",
    korean_name: "롱스톤",
    types: ["바위", "땅"],
    id: 95,
    description: "바위와 땅 타입의 포켓몬으로, 긴 돌 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif",
    korean_name: "슬리프",
    types: ["에스퍼"],
    id: 96,
    description: "에스퍼 타입의 포켓몬으로, 최면 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
    korean_name: "슬리퍼",
    types: ["에스퍼"],
    id: 97,
    description: "슬리프의 진화형으로, 더 강력한 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif",
    korean_name: "크랩",
    types: ["물"],
    id: 98,
    description: "물 타입의 포켓몬으로, 작은 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
    korean_name: "킹크랩",
    types: ["물"],
    id: 99,
    description: "크랩의 진화형으로, 더 큰 게 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif",
    korean_name: "찌리리공",
    types: ["전기"],
    id: 100,
    description: "전기 타입의 포켓몬으로, 전기를 방출할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
    korean_name: "붐볼",
    types: ["전기"],
    id: 101,
    description: "찌리리공의 진화형으로, 더 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
    korean_name: "아라리",
    types: ["풀", "에스퍼"],
    id: 102,
    description: "풀과 에스퍼 타입의 포켓몬으로, 알 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
    korean_name: "나시",
    types: ["풀", "에스퍼"],
    id: 103,
    description: "아라리의 진화형으로, 세 개의 머리를 가진 야자수 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
    korean_name: "탕구리",
    types: ["땅"],
    id: 104,
    description: "땅 타입의 포켓몬으로, 작은 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
    korean_name: "텅구리",
    types: ["땅"],
    id: 105,
    description:
      "탕구리의 진화형으로, 더 큰 몸집과 강한 땅 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
    korean_name: "시라소몬",
    types: ["격투"],
    id: 106,
    description: "격투 타입의 포켓몬으로, 강한 발차기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
    korean_name: "홍수몬",
    types: ["격투"],
    id: 107,
    description: "격투 타입의 포켓몬으로, 강한 펀치 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
    korean_name: "내루미",
    types: ["노말"],
    id: 108,
    description: "노말 타입의 포켓몬으로, 긴 혀를 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif",
    korean_name: "또가스",
    types: ["독"],
    id: 109,
    description: "독 타입의 포켓몬으로, 독가스를 내뿜습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
    korean_name: "또도가스",
    types: ["독"],
    id: 110,
    description: "또가스의 진화형으로, 더 큰 독가스 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
    korean_name: "뿔카노",
    types: ["땅", "바위"],
    id: 111,
    description: "땅과 바위 타입의 포켓몬으로, 큰 뿔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
    korean_name: "코뿌리",
    types: ["땅", "바위"],
    id: 112,
    description: "뿔카노의 진화형으로, 더 강력한 바위 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
    korean_name: "럭키",
    types: ["노말"],
    id: 113,
    description: "노말 타입의 포켓몬으로, 높은 체력을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
    korean_name: "덩쿠리",
    types: ["풀"],
    id: 114,
    description: "풀 타입의 포켓몬으로, 덩굴 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
    korean_name: "캥카",
    types: ["노말"],
    id: 115,
    description: "노말 타입의 포켓몬으로, 아기 캥거루를 보호합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
    korean_name: "쏘드라",
    types: ["물"],
    id: 116,
    description: "물 타입의 포켓몬으로, 작은 해마 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
    korean_name: "시드라",
    types: ["물"],
    id: 117,
    description: "쏘드라의 진화형으로, 더 크고 강한 물 속성 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
    korean_name: "콘치",
    types: ["물"],
    id: 118,
    description: "물 타입의 포켓몬으로, 작은 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
    korean_name: "왕콘치",
    types: ["물"],
    id: 119,
    description: "콘치의 진화형으로, 더 큰 물고기 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
    korean_name: "별가사리",
    types: ["물"],
    id: 120,
    description: "물 타입의 포켓몬으로, 별 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif",
    korean_name: "아쿠스타",
    types: ["물", "에스퍼"],
    id: 121,
    description: "별가사리의 진화형으로, 강력한 물과 에스퍼 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
    korean_name: "마임맨",
    types: ["에스퍼", "페어리"],
    id: 122,
    description: "에스퍼와 페어리 타입의 포켓몬으로, 마임 동작에 능숙합니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
    korean_name: "스라크",
    types: ["벌레", "비행"],
    id: 123,
    description: "벌레와 비행 타입의 포켓몬으로, 큰 낫 모양의 팔을 가졌습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
    korean_name: "루주라",
    types: ["얼음", "에스퍼"],
    id: 124,
    description: "얼음과 에스퍼 타입의 포켓몬으로, 독특한 춤 동작을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
    korean_name: "에레브",
    types: ["전기"],
    id: 125,
    description: "전기 타입의 포켓몬으로, 강력한 전기 능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
    korean_name: "마그마",
    types: ["불꽃"],
    id: 126,
    description: "불꽃 타입의 포켓몬으로, 뜨거운 마그마를 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
    korean_name: "쁘사이저",
    types: ["벌레"],
    id: 127,
    description: "벌레 타입의 포켓몬으로, 강한 턱을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
    korean_name: "켄타로스",
    types: ["노말"],
    id: 128,
    description: "노말 타입의 포켓몬으로, 강력한 뿔을 가진 황소 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
    korean_name: "잉어킹",
    types: ["물"],
    id: 129,
    description: "물 타입의 포켓몬으로, 약하지만 끈기 있는 잉어 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/130.gif",
    korean_name: "갸라도스",
    types: ["물", "비행"],
    id: 130,
    description: "잉어킹의 진화형으로, 매우 강력한 물과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif",
    korean_name: "라프라스",
    types: ["물", "얼음"],
    id: 131,
    description: "물과 얼음 타입의 포켓몬으로, 큰 바다 거북 모양입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
    korean_name: "메타몽",
    types: ["노말"],
    id: 132,
    description:
      "노말 타입의 포켓몬으로, 다양한 포켓몬으로 변신할 수 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
    korean_name: "이브이",
    types: ["노말"],
    id: 133,
    description: "노말 타입의 포켓몬으로, 다양한 진화형을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/134.gif",
    korean_name: "샤미드",
    types: ["물"],
    id: 134,
    description: "이브이의 물 타입 진화형으로, 강력한 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/135.gif",
    korean_name: "쥬피썬더",
    types: ["전기"],
    id: 135,
    description: "이브이의 전기 타입 진화형으로, 강력한 전기 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/136.gif",
    korean_name: "부스터",
    types: ["불꽃"],
    id: 136,
    description: "이브이의 불꽃 타입 진화형으로, 강력한 불꽃 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
    korean_name: "폴리곤",
    types: ["노말"],
    id: 137,
    description: "노말 타입의 포켓몬으로, 디지털 데이터로 이루어진 모습입니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
    korean_name: "암나이트",
    types: ["바위", "물"],
    id: 138,
    description: "바위와 물 타입의 포켓몬으로, 고대 생물 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
    korean_name: "암스타",
    types: ["바위", "물"],
    id: 139,
    description: "암나이트의 진화형으로, 더 강력한 바위와 물 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
    korean_name: "투구",
    types: ["바위", "물"],
    id: 140,
    description: "바위와 물 타입의 포켓몬으로, 고대 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
    korean_name: "투구푸스",
    types: ["바위", "물"],
    id: 141,
    description: "투구의 진화형으로, 더 큰 갑옷 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
    korean_name: "프테라",
    types: ["바위", "비행"],
    id: 142,
    description: "바위와 비행 타입의 포켓몬으로, 공룡 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
    korean_name: "잠만보",
    types: ["노말"],
    id: 143,
    description: "노말 타입의 포켓몬으로, 큰 몸집과 느긋한 성격을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
    korean_name: "프리져",
    types: ["얼음", "비행"],
    id: 144,
    description:
      "얼음과 비행 타입의 전설의 포켓몬으로, 차가운 바람을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
    korean_name: "썬더",
    types: ["전기", "비행"],
    id: 145,
    description:
      "전기와 비행 타입의 전설의 포켓몬으로, 강력한 번개를 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
    korean_name: "파이어",
    types: ["불꽃", "비행"],
    id: 146,
    description:
      "불꽃과 비행 타입의 전설의 포켓몬으로, 뜨거운 불꽃을 일으킵니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
    korean_name: "미뇽",
    types: ["드래곤"],
    id: 147,
    description:
      "드래곤 타입의 포켓몬으로, 작고 귀여운 뱀 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
    korean_name: "신뇽",
    types: ["드래곤"],
    id: 148,
    description: "미뇽의 진화형으로, 더 크고 강한 드래곤 모양을 하고 있습니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif",
    korean_name: "망나뇽",
    types: ["드래곤", "비행"],
    id: 149,
    description:
      "신뇽의 최종 진화형으로, 강력한 드래곤과 비행 속성을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
    korean_name: "뮤츠",
    types: ["에스퍼"],
    id: 150,
    description: "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다.",
  },
  {
    img_url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
    korean_name: "뮤",
    types: ["에스퍼"],
    id: 151,
    description:
      "에스퍼 타입의 전설의 포켓몬으로, 희귀하고 신비로운 능력을 가집니다.",
  },
];
export default MOCK_DATA;
