การทำงานของ ProductCard

1. Component ProductCard ถูกออกแบบมาให้รับข้อมูลเป็น Props ซึ่งช่วยให้ Component สามารถแสดงข้อมูลที่แตกต่างกันได้โดยไม่ต้องแก้ไขโค้ดภายใน
2. ในไฟล์ App.tsxจะมีข้อมูลสินค้า (products) อยู่ในรูปแบบของ Array
3. โค้ดจะใช้เมธอด .map() เพื่อวนซ้ำใน Array ของสินค้า และสร้าง Component ProductCard ขึ้นมาสำหรับสินค้าแต่ละชิ้น
4. แต่ละ ProductCard` จะได้รับข้อมูลจากสินค้าแต่ละรายการใน Array เพื่อนำไปแสดงผล (เช่น รูปภาพ, ชื่อ, ราคา)

การทำงานของ Layout และ Responsive Design

Tailwind CSSถูกใช้เพื่อจัดการดีไซน์ทั้งหมดโดยใช้คลาสต่างๆ เช่น shadow-md, rounded-md, และ flex
การจัดเรียง Card ให้ตอบสนอง (Responsive) ทำได้โดยใช้ CSS Grid ในไฟล์ App.tsx
1. grid-cols-1: บนหน้าจอขนาดเล็กจะแสดง 1 คอลัมน์
2. md:grid-cols-2: บนหน้าจอขนาดกลางจะแสดง 2 คอลัมน์
3. lg:grid-cols-3: บนหน้าจอขนาดใหญ่จะแสดง 3 คอลัมน์

Navbar ใช้คลาสของ Tailwind CSS เพื่อซ่อน Links และแสดงปุ่ม Hamburger Menu บนหน้าจอขนาดเล็ก
คลิกปุ่ม จะใช้ React State เพื่อสลับการแสดงผล (toggle) ของ Links ให้แสดงในแนวตั้ง

