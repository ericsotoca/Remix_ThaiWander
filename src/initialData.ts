import { ItineraryItem, TripSettings } from './types';

export const DEFAULT_TRIP_SETTINGS: TripSettings = {
  title: "โรดทริปแคมป์ปิ้งและธรรมชาติ - 4 จังหวัด",
  description: "สัมผัสประสบการณ์โรดทริปท่องเที่ยวธรรมชาติอันแสนพิเศษ ค้นพบอุทยานแห่งชาติ น้ำตกมรกต และหุบเขาสลับซับซ้อนในจังหวัดกาญจนบุรี ราชบุรี สระบุรี และนครนายก",
  startDate: "2026-11-01" // November 1st, 2026 (dry/cool season, perfect for camping!)
};

// Precise coordinates for all default places in the 4 target provinces
export const PLACE_COORDINATES: Record<string, { lat: number; lng: number }> = {
  "123/99 Sarintara 1 Village, Samut Sakhon": { lat: 13.5266, lng: 100.3161 },
  "Bangkok": { lat: 13.7563, lng: 100.5018 },
  "Erawan National Park": { lat: 14.3686, lng: 99.1436 },
  "Sai Yok National Park": { lat: 14.4344, lng: 98.8546 },
  "Srinakarin Dam": { lat: 14.5000, lng: 99.0000 },
  "Sangkhlaburi (Mon Bridge)": { lat: 15.1436, lng: 98.4519 },
  "Pilok Mine & Ban Etong": { lat: 14.6722, lng: 98.3617 },
  "Suan Phueng (Ratchaburi)": { lat: 13.5414, lng: 99.3414 },
  "Khao Bin Cave (Ratchaburi)": { lat: 13.5936, lng: 99.6739 },
  "Namtok Chet Sao Noi (Saraburi)": { lat: 14.7300, lng: 101.1917 },
  "Khao Sam Lan National Park (Saraburi)": { lat: 14.4414, lng: 100.9547 },
  "Muak Lek Waterfall (Saraburi)": { lat: 14.6582, lng: 101.1969 },
  "Khun Dan Prakan Chon Dam (Nakhon Nayok)": { lat: 14.3128, lng: 101.3217 },
  "Sarika Waterfall (Nakhon Nayok)": { lat: 14.2989, lng: 101.2589 },
  "Wang Takrai Park (Nakhon Nayok)": { lat: 14.3256, lng: 101.3012 }
};

export const DEFAULT_ITINERARY: ItineraryItem[] = [
  {
    id: "item-1",
    placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
    day: 1,
    category: "Lodging",
    notes: "จุดเริ่มต้นเดินทาง - ที่พักโฮมสเตย์ฟรีและเช็คอุปกรณ์เตรียมตัว",
    lat: 13.5266,
    lng: 100.3161,
    duration: "1 คืน",
    budget: 0,
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    detailedTips: "ที่พักฟรีเป็นกันเองในสมุทรสาคร แนะนำให้พกอุปกรณ์และจัดกระเป๋าเตรียมพร้อม และห้ามลืมซื้อแก๊สกระป๋องที่ Decathlon ก่อนออกเดินทาง",
    maxInfo: "ที่พักฟรีโฮมสเตย์แสนอบอุ่นในสมุทรสาคร เหมาะสำหรับการเตรียมพร้อมสำหรับเริ่มต้นทริปแสนสนุก"
  },
  {
    id: "item-2",
    placeName: "Suan Phueng (Ratchaburi)",
    day: 2,
    category: "Camping",
    notes: "กางเต็นท์รับลมหนาวในอ้อมกอดภูเขาและธรรมชาติ สวนผึ้ง",
    lat: 13.5414,
    lng: 99.3414,
    duration: "2 คืน",
    budget: 300,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    detailedTips: "กางเต็นท์หญ้านุ่มรับลมจากเทือกเขาตะนาวศรี อากาศยามค่ำคืนค่อนข้างเย็นสบายและเงียบสงบยิ่ง",
    maxInfo: "อำเภอสวนผึ้ง จังหวัดราชบุรี เป็นแหล่งท่องเที่ยวธรรมชาติยอดนิยม มีธารน้ำร้อน ฟาร์มแกะสไตล์ยุโรป และป่าเขาอุดมสมบูรณ์"
  },
  {
    id: "item-3",
    placeName: "Erawan National Park",
    day: 5,
    category: "Camping",
    notes: "กางเต็นท์ริมน้ำตกเอราวัณ 7 ชั้นอันลือชื่อ",
    lat: 14.3686,
    lng: 99.1436,
    duration: "3 คืน",
    budget: 300,
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    detailedTips: "เริ่มเดินขึ้นชมชั้น 7 แต่เช้าตรู่ประมาณ 8.00 น. เพื่อหลีกเลี่ยงฝูงชน และสัมผัสกิจกรรมฟิชสปาธรรมชาติที่ปลาจะคอยตอดเท้าให้รู้สึกผ่อนคลาย",
    maxInfo: "สุดยอดอุทยานแห่งชาติน้ำตกหินปูนสีมรกตใสสะอาด มีแอ่งน้ำสีฟ้าเทอร์ควอยซ์สวยงามให้ลงเล่นน้ำได้อย่างเต็มอิ่ม"
  },
  {
    id: "item-4",
    placeName: "Srinakarin Dam",
    day: 8,
    category: "Camping",
    notes: "กางเต็นท์สัมผัสทัศนียภาพอ่างเก็บน้ำเขื่อนอันกว้างขวาง",
    lat: 14.5000,
    lng: 99.0000,
    duration: "2 คืน",
    budget: 150,
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=600&q=80",
    detailedTips: "แนะนำจุดกางเต็นท์ที่น้ำตกห้วยแม่ขมิ้นชั้น 4 ซึ่งขึ้นชื่อเรื่องลานหญ้าที่สวยงามที่สุดและมองเห็นวิวอ่างเก็บน้ำเขื่อนศรีนครินทร์ทอแสงอาทิตย์สีทอง",
    maxInfo: "เขื่อนอเนกประสงค์ขนาดใหญ่ โอบล้อมด้วยแนวเขาสลับซับซ้อน เหมาะแก่การพักผ่อน นั่งแพเปียก หรือพายเรือคายัคดูดาว"
  },
  {
    id: "item-5",
    placeName: "Namtok Chet Sao Noi (Saraburi)",
    day: 10,
    category: "Camping",
    notes: "กางเต็นท์พักผ่อนริมลำธารเจ็ดสาวน้อย ฟังเสียงน้ำไหลเอื่อย",
    lat: 14.7300,
    lng: 101.1917,
    duration: "2 คืน",
    budget: 200,
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    detailedTips: "ลิ้มลองส้มตำไก่ย่างรสแซ่บหน้าทางเข้าอุทยาน ลานกางเต็นท์มีหญ้านุ่มและสิ่งอำนวยความสะดวกครบครัน ปลอดภัยมาก",
    maxInfo: "น้ำตกหินปูนชั้นเตี้ยๆ 7 ชั้นที่มีน้ำไหลเย็นตลอดทั้งปี ปลอดภัยเหมาะสำหรับการลงแช่น้ำผ่อนคลายความเหนื่อยล้า"
  },
  {
    id: "item-6",
    placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
    day: 12,
    category: "Camping",
    notes: "กางเต็นท์ริมอ่างเก็บน้ำเขื่อนขุนด่าน ชมวิวขุนเขาพาดสายหมอก",
    lat: 14.3128,
    lng: 101.3217,
    duration: "2 คืน",
    budget: 200,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    detailedTips: "ตื่นเช้าเพื่อล่องเรือหางยาวเข้าไปชม 3 น้ำตกลับหลังเขื่อน ได้แก่ น้ำตกช่องลม น้ำตกคลองคราม และน้ำตกผางามงอน สวยงามราวสรวงสวรรค์",
    maxInfo: "เขื่อนคอนกรีตบดอัดที่ยาวที่สุดในโลก ทำหน้าที่กักเก็บน้ำสะอาดจากผืนป่าเขาใหญ่ โดดเด่นด้วยทิวทัศน์หุบเขาลับด้านหลังเขื่อน"
  },
  {
    id: "item-7",
    placeName: "Bangkok",
    day: 14,
    category: "Lodging",
    notes: "เดินทางกลับกรุงเทพฯ คืนรถเช่า และนวดแผนไทยคลายเมื่อยล้า",
    lat: 13.7563,
    lng: 100.5018,
    duration: "1 คืน",
    budget: 800,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
    detailedTips: "แวะคืนรถเช่าและคืนอุปกรณ์ เดินเล่นทานสตรีทฟู้ดแสนอร่อยย่านเยาวราชหรือตลาดกลางคืนเพื่อจบทริปแสนประทับใจ",
    maxInfo: "ปิดฉากโรดทริป 2 สัปดาห์แสนวิเศษใน 4 จังหวัดธรรมชาติรอบกรุงเทพมหานคร ได้รับทั้งความสุขและความทรงจำเต็มเปี่ยม"
  }
];

// Fallback legacy presets structure to prevent type compilation errors
export const PRESET_ITINERARIES = [
  {
    id: "preset-1",
    nameFr: "L'Ouest & Centre Sauvage",
    nameTh: "ธรรมชาติภาคตะวันตกและภาคกลาง",
    items: DEFAULT_ITINERARY
  }
];
