import style from "../../styles/css/InfoItem.module.css";
import { InfoItemInterface } from "../../interface/homePageInterface";
import AscendingNumber from "../common/AscendingNumber";
const InfoItem = ({ imgSrc, text, num, unit }: InfoItemInterface) => {
  return (
    <div className={style.wrapper}>
      <img src={imgSrc} alt="info사진" style={{ width: "5rem" }} />
      <span style={{ color: "gray", fontWeight: "bold", fontSize: "1.2rem" }}>
        {text}
      </span>
      <div>
        <AscendingNumber num={num} unit={unit} />
      </div>
    </div>
  );
};

export default InfoItem;