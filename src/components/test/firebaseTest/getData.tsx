import React, { useMemo } from 'react';
import { useFetchAllData } from './DBFetch';
import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく
import "firebase/auth";
import "firebase/database";

export default function ListComponent() {
    // dataを取ってくる
  const { data } = useFetchAllData();
  console.log(data);
    // object形式なので使いやすいように{key, value}形式のリストに変換する
    // また、データが変わらない限り結果は同じなのでメモ化しておく
  const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);

  return <dl>{dataList.map(({ key, value }) =>
    <React.Fragment key={`${key}${value}`}>
      <dt>key: {key}</dt>
      <dt>value: {value}</dt>
    </React.Fragment>
  )}</dl>
};