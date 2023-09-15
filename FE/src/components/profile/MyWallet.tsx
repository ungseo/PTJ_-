import style from "../../styles/css/MyWallet.module.css";
import { Icon } from "@iconify/react";
import DefaultButton from "../common/Buttons";
const MyWallet = () => {
  return (
    <div className={style.mywallet}>
      <p className={style.title}>
        포인트
        <Icon icon="bi:chevron-right"></Icon>
      </p>
      <p className={style.point}>{"123,456 P"}</p>
      <div className={style.buttons}>
        <DefaultButton
          text="계좌등록"
          styles={{
            width: "48%",
            height: "3.5rem",
            borderRadius: "12px",
            fontSize: "1.5rem",
          }}
        />
        <DefaultButton
          text="포인트 충전"
          styles={{
            width: "48%",
            height: "3.5rem",
            borderRadius: "12px",
            fontSize: "1.5rem",
          }}
        />
      </div>
    </div>
  );
};

export default MyWallet;