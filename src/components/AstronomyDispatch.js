import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../actions";

export default function AstronomyDispatch(props) {
  const dispatch = useDispatch();
  const datas = useSelector(state => state.app.datas);

  console.log("props!!", props);
  return (
    <div>
      <h1>Title</h1>
      <div onClick={() => dispatch({ type: types.APP_ACTION_TEST, data: {} })}>
        Redux test => {String(data)}
      </div>
    </div>
  );
}
