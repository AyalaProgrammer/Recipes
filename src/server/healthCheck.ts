// import axios from "axios"

// // פונקציה לבדיקת זמינות השרת
// export const checkServerHealth = async (): Promise<boolean> => {
//   try {
//     // ניסיון לגשת לנתיב בסיסי בשרת
//     await axios.get("http://localhost:8080/api/categories")
//     // await axios.get("http://localhost:8080/api/health")
//     return true
//   } catch (error) {
//     console.error("Server health check failed:", error)
//     return false
//   }
// }

// // פונקציה להוספת נתיב בדיקת זמינות לשרת
// export const setupHealthEndpoint = () => {
//   // הוספת נתיב בדיקת זמינות לשרת
//   // זו פונקציה שצריכה להיות מופעלת בצד השרת
//   // אם אין לך גישה לקוד השרת, אתה יכול להשתמש בנתיב קיים אחר לבדיקת זמינות
// }

//גירסה אחרת
// import axios from "axios"

// // פונקציה לבדיקת זמינות השרת
// export const checkServerHealth = async (): Promise<boolean> => {
//   try {
//     // ניסיון לגשת לנתיב קיים בשרת במקום /api/health
//     await axios.get("http://localhost:8080/api/categories")
//     return true
//   } catch (error) {
//     console.error("Server health check failed:", error)
//     return false
//   }
// }
//גירסה נוספת
import axios from "axios"

// פונקציה לבדיקת זמינות השרת
export const checkServerHealth = async (): Promise<boolean> => {
  try {
    // ניסיון לגשת לנתיב קיים בשרת
    await axios.get("http://localhost:8080/api/category")
    return true
  } catch (error) {
    console.error("Server health check failed:", error)
    return false
  }
}
