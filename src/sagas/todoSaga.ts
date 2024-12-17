import { call, put, select, takeLeading } from "redux-saga/effects";
import {
  fetchTodoFailure,
  fetchTodoRequest,
  fetchTodoSuccess,
} from "../slices/todoSlice";
import { Todo } from "../types";
import { getTodos } from "../services/todoApi";
import { RootState } from "../store";

export function* fetchTodoSaga() {
  try {
    const status: RootState["todo"]["status"] = yield select(
      (state: RootState) => state.todo.status
    );

    if (status !== "succeeded") {
      const todos: Todo[] = yield call(getTodos);
      yield put(fetchTodoSuccess({ todos }));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchTodoFailure({ error: error.message }));
    } else {
      yield put(fetchTodoFailure({ error: "알 수 없는 에러" }));
    }
  }
}

export function* todoSaga() {
  yield takeLeading(fetchTodoRequest, fetchTodoSaga);
}
