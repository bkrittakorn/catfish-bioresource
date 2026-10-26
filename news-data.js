const newsData = [
  {
    id: 1, // รหัสข่าว (ใช้สำหรับดึงไปแสดงในหน้าเฉพาะข่าวนั้นๆ)
    date: "26 มีนาคม 2569",
    dateEn: "March 26, 2026",
    titleTh: "งานสัมมนาสรุปความก้าวหน้าโครงการวิจัยทรัพยากรชีวภาพปลาดุกประจำปี 2569",
    titleEn: "Annual Progress Seminar on Bioresource Genomics 2026",
    image: "images/news10.jpg",
    excerptTh: "สรุปผลการดำเนินงานวิจัย การพัฒนาคลังข้อมูลจีโนมิกส์ปลาดุก...",
    excerptEn: "Summary of research outcomes, native species conservation...",
    // เนื้อหาข่าวฉบับเต็มภาษาไทย (ใส่ HTML เช่น <b>, <i>, <p> ได้)
    contentTh: `<p>หน่วยวิจัยด้านจีโนมิกส์และทรัพยากรชีวภาพสัตว์ คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ จัดการประชุมสัมมนาประจำปี 2569 เพื่อสรุปผลการดำเนินงานวิจัยภายใต้โครงการ <b>CATFISH BIORESOURCE</b> โดยมีคณาจารย์ นักวิจัย และนักศึกษา ร่วมแลกเปลี่ยนองค์ความรู้เชิงลึกด้านความหลากหลายทางชีวภาพของปลาดุกสกุล <i>Clarias</i></p>
                <h3>ไฮไลต์สำคัญในการประชุม</h3>
                <p>ในงานดังกล่าว มีการนำเสนอข้อมูลการสำรวจประชากรปลาดุกอุย (<i>Clarias macrocephalus</i>) ในแหล่งน้ำธรรมชาติทั่วประเทศไทย พร้อมทั้งความก้าวหน้าในการพัฒนาฐานข้อมูลจีโนมิกส์ (Genomic Repository)...</p>`,
    // เนื้อหาข่าวฉบับเต็มภาษาอังกฤษ
    contentEn: `<p>Animal Genomics and Bioresources Research Unit, Faculty of Science, Kasetsart University, organized the annual seminar 2026 to summarize research outcomes under the <b>CATFISH BIORESOURCE</b> project...</p>
                <h3>Key Highlights</h3>
                <p>During the event, survey data on broadhead catfish (<i>Clarias macrocephalus</i>) populations in natural water sources across Thailand was presented...</p>`
  }
];
