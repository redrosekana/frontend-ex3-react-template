// import library
import React from "react"
import { useEffect, useState } from "react"

// import Components
import Card from "../component/Menucard"
import BCard from "../component/Bigcard"

// import api controller
import FetchData from "../api/FetchData"

function Home() {
  const [text,setText] = useState("")
  const [chooseMenu,setChooseMenu] = useState("pizza")
  const [menu,setMenu] = useState([])
  const [bigCard,setBigCard] = useState(false)
  const [numberId,setNumberId] = useState(-1)

  /* 
    หลังจาก render ครั้งแรกการดึงค่าข้อมูลมากจาก server-json จากนั้นทำการใส่ข้อมูลที่ได้เก็บลงใน state
    แล้วนำข้อมูลไปแสดงผล
  */

  /* หลังจากที่มีการกดปุ่ม เกิด event ที่ปุ่มมันก็จะมาทำฟังชันก์นี้หลังจาก render เช่นกันเพื่อทำการ
    ดึงข้อมูลใหม่จาก server-json แล้วมาแสดงผลนั่นเอง และ เซ็ต text ให้เป็น string ว่าง
    และ เซ็ตการแสดงผลการ์ดอันใหญ่ให้เป็น false เพราะทุกครั้ง
  */ 
  useEffect(() => {   
    FetchData(chooseMenu).then(result => {
      setMenu(result)
      setText("")
      setBigCard(false)
    })
  },[chooseMenu]) 


  /* ฟังชันก์ที่กดปุ่มเพื่อทำกรให้แสดงการ์ด component อันใหญ่ 
    โดยเซ็ต state BigCard ให้เป็น true เพื่อทำการแสดงผล และนำค่า id ที่ได้ไป filter เพื่อเอาเฉพาะภาพนั้นๆ
    มาแสดงผลเป็นการ์ดอันใหญ่
  */
  function onClick(id) {
    setNumberId(id)
    setBigCard(prev => !prev)
  }

  return (
    <div className="home">
      <div className="home-center">
        <div className="home-inp">
          <div className="search">
            {/* ทุกครั้งที่พิมพ์ค่า text ก็เปลี่ยนแปลง */}
            <input type="text" value={text} onChange={(ev) => setText(ev.currentTarget.value)} />
          </div>
          <div className="home-button">
            {/* ทุกครั้งที่กดปุ่มเลือกเมนู จะทำการดึงข้อมูลให่ม่ทุกครั้งนั่นเอง */}
            <button onClick={() => setChooseMenu("pizza")}>pizza</button>
            <button onClick={() => setChooseMenu("pasta")}>pasta</button>
            <button onClick={() => setChooseMenu("dessert")}>dessert</button>
            <button onClick={() => setChooseMenu("drinks")}>drinks</button>
            <button onClick={() => setChooseMenu("sauces")}>sauces</button>
            <button onClick={() => setChooseMenu("sides")}>sides</button>
          </div>
        </div>
        <div className="home-menulist">
          {/* สังเกตุว่าจะเช็คก่อนว่า bigCard เป็น true หรือไม่ถ้าเป็นคือทำการแสดงผลหน้าจอใหญ่โดยนำค่า
            ที่เก็บใน numberId มาเปรียบเทียบว่าตรงกับค่าไหน แล้วทำการใช้ map เพื่อแสดงผลนั่นเอง
          
            แต่ถ้า bigCard เป็น false จะนำการ filter ตาม text ที่พิมพ์ก่อนแล้วก็ทำการ map ข้อมูลแสดงผลตามปกตินั่นเอง
          */}
          {bigCard ? (menu.filter(e => e.id === numberId).map((e,i) => <BCard key={i} {...e} changeclick={onClick}/>))
           :((menu) ? (
            menu.filter((e) => e.name.toLowerCase().includes(text)).map((e,i) => {
              return <Card key={i} {...e} changeclick={onClick} />
            })
          ) : null )}
        </div>
      </div>
    </div>
  )
}

export default Home
