import React, { useState } from "react";
// 認証周りやDB周りで必要なためimportしておく
import "firebase/auth";
import "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../modules/rootReducer";



export default function ListComponent() {
    const [] = useState(
        useSelector((state: RootState) => state.tasks)
    );
    // const { data } = useFetchAllData();
    const { userTaskInfo } = useSelector((state: RootState) => state.tasks);
    // useEffect(() => {
      // // dataを取ってくる
      // if (userId != '' && !!data) {
      //   console.log(userId);
      //   console.log("getData.tsx data");
      //   console.log(data);
      //   // setUT(useSelector((state: RootState) => state.tasks));
      //   // dispatch(init(data));
      // }
    // },[userId]);
    
    // ここでstateを使うならログイン時にDBから取得したデータをReduxに保管する必要がある。
    // useCallback(() => {
    //     userTask = useSelector((state: RootState) => state.tasks);
    // }, [userId]);

    console.log("getData userTaskInfo");
    console.log(userTaskInfo);
    // data ? console.log(data.userTaskInfo) : console.log('noo');
    // object形式なので使いやすいように{key, value}形式のリストに変換する
    // また、データが変わらない限り結果は同じなのでメモ化しておく
    // const dataList = useMemo(() => Object.entries(data || {}).map(([key, value]) => ({ key, value })), [data]);

    return <div>test</div>;
    // return <div>{userTaskInfo.calendar[0].PatternId}</div>;
    // <dl>{dataList.map(({ key, value }) =>
    //   <React.Fragment key={`${key}${value}`}>
    //     <dt>key: {key}</dt>
    //     <dt>value: {value}</dt>
    //   </React.Fragment>
    // )}</dl>
}
