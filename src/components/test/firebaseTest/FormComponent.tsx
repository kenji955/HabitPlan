import React, { useState, ChangeEvent } from "react";
import { useRegisterData, useUpdateData, useDelteData } from "./DBFetch";

export default function FormComponent() {
    
    const registerData = useRegisterData();
    const updateData = useUpdateData();
    const deleteData = useDelteData();

    const [keyData, setKeyData] = useState<string>("");
    const [valueData, setValueData] = useState<string>("");

    return (
        <>
            <label>
                Key:{" "}
                <input
                    placeholder="key"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setKeyData(event.target.value)
                    }
                />
            </label>
            <label>
                Value:{" "}
                <input
                    placeholder="value"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setValueData(event.target.value)
                    }
                />
            </label>
            {/* <button onClick={() => registerData({ [keyData]: valueData })}> */}
            {/* <button onClick={() => registerData({ [keyData]: valueData })}> */}
            <button onClick={() => registerData({ [keyData]: valueData })}>
                登録
            </button>
            <button onClick={() => updateData({ [keyData]: valueData })}>
                更新
            </button>
            <button onClick={() => deleteData(keyData)}>Key指定削除</button>
        </>
    );
}
