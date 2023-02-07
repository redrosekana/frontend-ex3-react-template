# Frontend last exercise

## Intro

แบบฝึกนี้จะให้น้องๆทดลองสร้างเว็บเป็นของตัวเอง\
ให้น้องๆเขียนฟังก์ชันต่างๆในแบบของตัวเอง\
แนะนำให้ปรับเปลี่ยนเฉพาะในไฟล์ App.js กับ Home.js\
พี่ได้ทำไฟล์ css ให้บางส่วนแล้ว

## Installation Guide

-ให้ใช้คำสั่งเหล่านี้ใน Terminal ตามลำดับ\
-npm install\
-json-server db.json --port 3004\
-npm start

## API URL

-get pizza http://localhost:3004/pizza \
-get pasta http://localhost:3004/pasta \
-get dessert http://localhost:3004/dessert \
-get drinks http://localhost:3004/drinks \
-get sauces http://localhost:3004/sauces \
-get sides http://localhost:3004/sides

## Required function

-แก้ไข App.js เพื่อให้สามารถเข้าถึงหน้า Home.js และแสดงผล Nav.js ไว้ที่ด้านบนสุดของเว็บได้\
-แสดงรายการเมนูอาหารด้วย component menucard ในหน้า Home.js\
-ค้นหาอาหารจากชื่อด้วย input box ในหน้า Home.js\
-คลิก menucard เพื่อซ่อน menucard และแสดง bigcard ของ menucard แทน รวมทั้งคลิก bigcard เพื่อเปลี่ยนกลับเป็น menucard ตามเดิม\
-คลิกที่ปุ่มเพื่อเปลี่ยนรายชื่อของ menucard ตามประเภทอาหาร
