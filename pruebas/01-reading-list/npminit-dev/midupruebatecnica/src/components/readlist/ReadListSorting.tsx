import { Segmented, Space } from "antd"
import { Typography } from "antd";
import { useContext } from 'react';
import { GlobalContext } from "../../contexts/GlobalContext";
const { Text } = Typography

export default function ReadListSorting(): JSX.Element {

  const { readList, dispatchRl } = useContext(GlobalContext)

  return (
    <>
      <Space>
        <label>
          <Text type="secondary">Sorting</Text>
        </label>
        <Segmented
          disabled={readList?.length ? false : true}
          options={["Pendings", "Read"]}
          defaultValue={""}
          onChange={(value) => {
            value === "Pendings"
              ? dispatchRl({ type: "unreadFirst" })
              : value === "Read"
              ? dispatchRl({ type: "readFirst" })
              : null;
          }}
        ></Segmented>
      </Space>
    </>
  );
}