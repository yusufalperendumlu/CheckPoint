import { call, put, takeEvery } from "redux-saga/effects";
import { getCocktailList } from "@/services/index";
import { getDemoDataSuccess } from "@/store/demo/demoAction"

function* fetchDemoData(): Generator {
    try {

        const data = yield call(getCocktailList);
        yield put(getDemoDataSuccess(data));
        
    } catch (error) {
        console.log(error);
    }
}

export default function* cocktailSaga() {
    yield takeEvery("GET_COCKTAIL_REQUEST", fetchDemoData);
}
