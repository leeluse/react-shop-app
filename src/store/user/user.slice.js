import { createSlice } from "@reduxjs/toolkit";

// 초기 상태를 localStorage에서 가져오거나 기본 상태를 설정합니다.
const initialState = localStorage.getItem('user') ?
  JSON.parse(localStorage.getItem('user')) :
   { email: "", token: "", id: "" }

// createSlice 함수를 사용하여 Redux 슬라이스를 생성합니다.
export const userSlice = createSlice({
  name: 'user', // 슬라이스의 이름을 지정합니다.
  initialState, // 초기 상태를 설정합니다.
  reducers: {
    // setUsers 액션 생성자 함수를 정의합니다. 이 함수는 새로운 사용자 정보를 상태에 설정하고 localStorage에 저장합니다.
    setUsers: (state, action) => {
      state.email = action.payload.email; // 액션의 payload에서 email 값을 가져와 상태에 설정합니다.
      state.token = action.payload.token; // 액션의 payload에서 token 값을 가져와 상태에 설정합니다.
      state.id = action.payload.id; // 액션의 payload에서 id 값을 가져와 상태에 설정합니다.

      localStorage.setItem('user', JSON.stringify(state)); // 상태를 문자열로 변환하여 localStorage에 저장합니다.
    },
    // removeUsers 액션 생성자 함수를 정의합니다. 이 함수는 사용자 정보를 초기화하고 localStorage에서 제거합니다.
    removeUsers: (state) => {
      state.email = ""; // 이메일 필드를 초기화합니다.
      state.token = ""; // 토큰 필드를 초기화합니다.
      state.id = ""; // ID 필드를 초기화합니다.

      localStorage.setItem('user', JSON.stringify(state)); // 변경된 상태를 localStorage에 저장합니다.
    }
  }
})

// 생성된 액션 생성자 함수들을 내보냅니다.
export const { setUsers, removeUsers } = userSlice.actions;

// 리듀서를 내보냅니다.
export default userSlice.reducer;
