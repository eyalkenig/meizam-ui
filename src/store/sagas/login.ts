import { select } from 'redux-saga/effects';    //    <- here it is

export function ThrowToLogin(history: any) {
   history.push("/sign-in")
}

