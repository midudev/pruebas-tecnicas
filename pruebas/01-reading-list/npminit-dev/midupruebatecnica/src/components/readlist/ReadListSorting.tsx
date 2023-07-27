import { Segmented, Space } from "antd"
import { useContext } from 'react';
import { GlobalContext } from "../contexts/GlobalContext";
import '../../styles/readlist/readlistsorting.css'
import '../../styles/global-variables.css'


export default function ReadListSorting(): JSX.Element {

  const { readList, dispatchRl, colorMode, wWidth } = useContext(GlobalContext)

  return (
    <>
      <Space>
        <Segmented
          title={'Sorting books'}
          size={ wWidth < 310 ? 'small' : 'middle' }
          disabled={ readList?.length ? false : true }
          options={["Pendings", "Read"]}
          defaultValue={""}
          className={`RLSortSegmented ${colorMode}`}
          rootClassName={`RLSortSegmented-root ${colorMode}`}
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