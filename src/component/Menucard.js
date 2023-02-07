import React from "react"
import { BsCoin } from "react-icons/bs"
import { GiChiliPepper } from "react-icons/gi"
import { FaSeedling } from "react-icons/fa"

const Card = ({id,image,ingredients,name,price,spicy,vegetarian,changeclick}) => {
  
  return (
    /* ฟังชันก์ changeclick เป็น callback ที่ส่งมาเป็น props จะแนบค่า id ไปให้เพื่อให้
      ทำการใช้คำสั่ง setNumberId(id) เพื่อเซ็ตค่าแล้วนำไปเปรียบเทียบว่าเรากด card ไหน
      จากนั้นก็จะไปแสดงผล
    */
    <div className="card" onClick={() => changeclick(id)}>
      <div className="card-header">
        <img src={image} alt="food" className="card-img" />
      </div>

      <div className="card-body">
        <div className="card-name">{name} {spicy ? <GiChiliPepper /> : null}</div>

        <div className="price">
          {price}&nbsp;<BsCoin />
        </div>
        <div className="card-icon">
          {vegetarian ? <FaSeedling /> : null }
        </div>
        {ingredients ? null : <div className="ingredients-title">ingredients:</div>}
          <ul className="ingredients-ul">
            {ingredients.filter((e,i) => i < 2).map((e,i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
    </div>
  )
}
export default Card
